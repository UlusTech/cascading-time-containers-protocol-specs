# CTCP demo — kaskad çözücü + federasyon

İki federe düğüm, altı kutucuk, bir toplantı. Amaç güzel görünmek değil;
tartışılan varsayımların hangilerinin ayakta kaldığını çalışan kodla görmek.

**Canlı demo:**
<https://ulustech.github.io/cascading-time-containers-protocol-specs/> —
iki düğüm aynı sayfada, taşıma katmanı sayfa içi doğrudan çağrı (aynı çekirdek,
`src/core.ts`). `?node=alice` veya `?node=bob` tek panel açar. Her ziyaretçi
kendi kum havuzunu alır.

```sh
bun install
bun run src/index.ts     # gerçek iki süreç: alice :4001 · bob :4002
bun test                 # iki protokol kanunu + birim cebri + wait dalı
bun run build            # statik simülasyonu dist/'e derler (Pages bunu yayınlar)
```

Yerelde iki sekmeyi birlikte aç: `localhost:4001` (Alice) ve `localhost:4002`
(Bob) — ya da tek sekmede `localhost:4001/sim`. Alice teklif gönderdiğinde iki
log birlikte hareket eder. Arayüz takvim görünümündedir: blok = kutucuk,
taralı bölge = belirsizlik aralığı; yakıt bütçesini düşürünce blokların
gözle görülür biçimde uzaması demonun ana numarasıdır.

## İki protokol kanunu

Demonun tamamı bu iki kurala dayanıyor. Kaldırırsan geri kalan her şey çöker.

**K1 — `resolve` asla nokta dönmez.** Aralık + kesinlik damgası döner
(`observed` · `derived` · `budget-truncated` · `needs-oracle`). Böylece kısmi
hesap yanlış cevap değil, sadece **daha geniş** cevap olur. Formül taşıyan her
kutucuk zorunlu bir `envelope` bildirir; yakıt biterse çözücü formülü bırakıp
oraya düşer.

**K2 — her dal tanımlıdır.** `wait` · `alternative` · `cancel`. Çözümleme
"tanımsız" dönemez; illa bir şey olur. İptal aşağıya yayılır, alternatif
etkinleşince bağımlılıklar yeniden bağlanır.

Kod: `src/cascade.ts`. Özyineleme serbest, sonlanma garantisi dilden değil
**yakıt bütçesinden** gelir (`src/minilang.ts`). Bu bir süs değil: iptal +
alternatif + bekleme üçlüsü eklendiği an problem STNU'dan çıkıp ayrık kısıtlı
hale geliyor, yani bütçe tasarımın zorunlu sonucu.

## Ne denenecek

Senaryo: Alice'in sabah zinciri `uyanış → hazırlık → yol → toplantı`.
`hazırlık` süresi kasten pahalı, özyinelemeli bir formülle hesaplanıyor.
Bob'un kendi günü var ve Alice bunu **hiçbir zaman** görmüyor.

| Düğme | Ne olur | Hangi soruyu cevaplıyor |
| --- | --- | --- |
| (gözlem yok) | tüm zincir geniş projeksiyon, cephe boş | gözlem olmadan takvim bir aralıktır |
| `07:00` | toplantı 07:50–08:50 → Bob standup'ı yüzünden **counter 10:00** | karşı taraf kendi kaskadıyla cevap üretiyor |
| `09:10` | hazırlık 48 dk'ya çıkar, toplantı 10:23–11:23 → **accept** | esnek kutucuk (derin çalışma) sessizce yer açtı |
| `09:10` + otobüsü kaçırdım | metro dalı etkinleşir, toplantı 10:43–11:48 → **counter 13:30** → son başlama vakti geçer → `async-inceleme` 16:00'da devreye girer | iptal + alternatif zinciri, "illa bir şey olur" |
| `11:50` + yakıt `200` | hazırlık `budget-truncated`, toplantı aralığı 13:00 eşiğini keser → **KARARSIZ** | kısmi hesap yanlış değil, geniş |
| aynı girdi + yakıt `20000` | formül çözülür, aralık daralır, karar netleşir | bütçe artırınca kararsızlık kapanıyor |

Son iki satır bu demonun en önemli kısmı: **aynı girdi, farklı hesap bütçesi,
farklı karar.** Nokta değer döndüren bir çözücü burada sessizce yanlış cevap
verirdi.

## Federasyon: takvim gönderilmez

Bob'un uçları (`src/node.ts`):

| Uç | Ne yapar |
| --- | --- |
| `GET /ctcp/describe` | düğümün kendini tanımlaması: dallar, link tipleri, bütçe politikası, birim sınıfları |
| `GET /ctcp/units` | statik uyumluluk tablosu — karşı taraf **offline** çevirebilir |
| `POST /ctcp/resolve-unit` | dinamik/oracle birim; offline çevrilemez, aralık döner |
| `POST /ctcp/freebusy` | yalnızca yüklem: "müsait misin?" |
| `POST /ctcp/proposal` | federe yeniden planlama teklifi |

Gizlilik tek bir primitife bağlı: **yetenek jetonu**. Jeton yoksa ne sorgu ne
teklif geçer (`401`) — yani teklif spam'i de aynı mekanizmayla kesiliyor, ayrı
bir itibar sistemi gerekmiyor.

Parmak izine karşı üç önlem birlikte çalışıyor:

- cevaplar 30 dk **ızgaraya dışa doğru** yuvarlanır,
- aynı yuvarlanmış aralığa tekrar sorgu **önbellekten** aynı cevabı alır ve
  bütçe yakmaz (5 dakika kaydırarak blok sınırı aranamaz),
- jeton başına sorgu bütçesi biter (`429`), yani yineleme ile takvim yeniden
  inşa edilemez.

Karşı tarafın cevabı içerik taşımaz: "busy" der, hangi kutucuk olduğunu
söylemez. Kabul gerekçesinde de "esnek bir kutucuk yer açtı" yazar, hangisi
olduğu yazmaz.

Belirsizlik federasyona yayılıyor: Alice bir **pencere** gönderiyorsa Bob tüm
zarfın güvenli olmasını istiyor. Aralık genişse Bob daha kolay counter atar —
yani düşük hesap bütçesi doğrudan daha kötü müzakereye dönüşüyor.

## Birim cebri: üç sınıf

`src/units.ts` — karma tabanlı (mixed-radix) bir takvim: `an` → `dilim` (72) →
`gün` (20) → `devre` (düzensiz tablo: 40/37/41/39/43) → `dönem` (200 gün).
Sıfır noktası 6 Şubat 2023 04:17.

- **static** — afin + tablo ile bildirilir, sunucuya bağımlılık yok.
  `1 dilim = 72 an` demek yeterli.
- **eventually-static** — gözlemlenince sonsuza kadar sabit
  (`hilal-ayı`: geçmiş aylar önbelleklenebilir, gelecek aylar oracle ister).
- **dynamic** — her sorguda hesaplanır, offline çevrilemez.

"Yıllar birbirini ittirir" ifadesinin statik hali tam olarak **elde (carry)**:
düzensiz seviyede taşma arayüzde canlı gösteriliyor. Kaskadın basit hali elde,
karmaşık hali kısıt çözümü — aynı nesnenin iki modu.

## Bilerek dışarıda bırakılanlar

Demo dürüst olmak için küçük tutuldu. Yok olanlar:

- kalıcılık yok (süreç ölünce durum gider), gerçekte append-only log kalıcı olmalı
- kimlik/imza yok (jetonlar sabit metin), gerçekte imzalı ve iptal edilebilir olmalı
- gerçek Wasm/Lua taşıyıcı yok, yerine bütçeli mini bir ifade dili var
- eş zamanlı çakışan teklif çözümü yazıldı ama arayüzde tetiklenmiyor
  (`proposalWins`, `src/log.ts`)
- tek gün, tek eş, tek zincir; DST ve artık saniye yok — çekirdek monoton,
  takvim dönüşümü sunumda

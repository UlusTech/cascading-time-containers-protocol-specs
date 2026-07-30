# CTCP — tasarım tartışması (transcript)

Bu belge, herhangi bir kod yazılmadan önce yapılan fikir tartışmasının birebir
kaydıdır. Demo (`ctcp-demo/`) bu tartışmadaki iddiaları test etmek için yazıldı;
kodda geçen "K1/K2 protokol kanunları", yakıt bütçesi, üç birim sınıfı ve
yetenek jetonu kavramlarının nereden geldiğini burada bulabilirsin.

Katılımcılar: **Bilgehan** (Ulus Tech) ve **Claude** (Opus 5). Kayıt, ilk
uygulama talebinden hemen önce kesilmiştir.

---

## 1 · Bilgehan

> # CTCP, Cascading Time Containers Protocol
>
> Zaman akar, ve zaman zamanları barındır.
>
> ## Zaman kutucukları
>
> Dilimizin ve algımızın gelişme yapısı bizi "1 hafta 7 gündür, 1 gün 24 saatir"
> mantığı ile düşünmeye sürüklemiştir. Eğer zamana böyle bakarsak zaman sınırsız
> derinliğe sahiptir. Bir alt birim veya üst birim uydurmak yeterlidir.
>
> Herkes ve herşey yıllar veya haftalar ile düşünmez, düşünülmez. Zaman bazen
> "farklıdır".
>
> 12 aylık sistemimiz ve ayların eşit olmamasının temelinde de bu yatar.
> İnsanlar alışkanlıklarını kolay değiştiremezse değişikliğe gitmez.
>
> **Peki ya kendi takvimimizi, hiç bir uyumluluk sorunu olmadan
> oluşturabilseydik?**
>
> CTCP'de istediğiniz biçimde zaman planlamaları yapabilirsiniz. İsterseniz nano
> saniye biçiminde yapın, isterseniz kendiniz sıfırdan bir şey uydurun. Eğer
> yaptığınız zaman sisteminin başka birisinin de bildiği bir takvim sistemine
> göre neye denk geldiğini söyleyebilirseniz, yüzde yüz uyumlu olursunuz.
>
> Mesela "decade" kavramını sisteminizde uydurabilirsiniz. Önünüzdeki engel ne
> ki? Başkası sorduğunda "1 Decade = 10 Years" dersiniz! Ve işin en iyi tarafı,
> basit zaman mantıkları kurmanıza gerekte yok! Karmaşık, kendi içine çöken bir
> zaman konsepti oluştursanız bile sunucunuz CTCP'ye uygun bir şekile kişiye
> zamanı söylediği sürece derin matematiksel işlemler gerekiren bir mantık bile
> oluşturabilirsiniz. Limit yok. Limit sizsiniz. Zaman ucu açık bir kavram,
> sisteme uymak zorunda değilsin; eğer derdin "açıklamak" ise uyumluluk sistemi
> yeterlidir.
>
> ## Akan zaman
>
> Zaman kutuculukları birbirlerini etkileyerek işler, aynı anda iki yılda birden
> olamazsın (basit örnek). Yıllar birbirini ittirir.
>
> Sadece zaman temelleri böyle olmak zorunda değil, işe gideceğiniz saat
> uyandığınız saate göre değişir. Nelerin olduğu planlanmış zaman değiştirir!
>
> CTCP kondisyonlar ile, matematiksel işlemler ile sürekli zamanı hesaplayan bir
> sunucu modeli ile öne çıkar. Tarihi olaylar gibi şeyler tabiki statik
> gösterilebilir, ama kişisel bir takvim dinamiktir.
>
> CTCP sizin için otomatik olarak zamanı hesaplar. Siz girdiler ve eklenti gibi
> sistemler ile takvime veri beslersiniz. Mesela işe başlamanızı veya bir toplu
> taşıma sistemine binmenizi takviminize bildirerek hesaplanan zamanın
> değişmesini sağlayabilirsiniz.
>
> Ve bu akışı her zaman sunucunuzu takip edenlere verebilirsiniz. Kelimenin tam
> manasıyla, sizin uyuya veya geç kalmanız durumunda buluşmanın veya toplantının
> ne zamana erteleneceğini basit bir formül ile belirleyebilirsiniz. Kutucuklar
> öyle dümdüz hareket etmez. Mesela geç kalma durumunda, buluşmadaki diğer
> kişilerin boşlukları da hesaba katılır. Hatta bu sırada her sunucu aldığı
> veriyi kendikisine göre yorumlayıp yeni tekliflere bulunur! Yani veri hiç bir
> zaman sizden çıkmadan, arkadaşlarınızın takvimleri buluşmayı otomatik olarak
> erteleyebilir.
>
> CTCP sizinle ne kadar entegre olursa o kadar iyi zaman yardımcılığı yapar.
>
> Uyumanız gereken saatleri sizin için hesaplayabilir; sisteme dahil edilecek
> bir asistan veya yapay zeka sizin fikirlerinze göre size özel yeni bir takvim
> sistemi kurabilir!
>
> Doktorunuzla gerekli verileri burdan paylaşabilirsiniz, hatta bu sadece uyku
> için de değil, "kayıt deftleri" mantığı için de kullanılabilir!
> Diyetisyeninize CTCP verinizi ister saatler ve günler olmadan haftalık, ister
> sadece gün tabanlı veya verinin tamamı olacak şekilde verebilirsiniz! Neyi ne
> kadar sürede yediğiniz, veya o an ne yaptığınızı bile kayıt altına
> alabilirsiniz!
>
> Bu kötü bir şey değil, eğer veriniz sizin elinizde kalırsa bu bir sorundan çok
> güce dönüşür.
>
> **SINIRSIZ FARKINDALIK!**

---

## 2 · Claude

Fikir güzel ve aslında iddia ettiğinden daha derin bir alana dokunuyor. Ama
metinde iki farklı protokol var gibi görünüyor ve bunları ayırmazsan spec
yazarken çakışacaklar:

1. **Bildirimsel takvim cebiri** — "1 Decade = 10 Years". Statik,
   önbelleklenebilir, sunucu gerekmez.
2. **Canlı zaman çözücü** — koşullara göre sürekli yeniden hesaplanan kişisel
   zaman. RPC gerektirir, sunucu düşerse cevap yoktur.

Metindeki "başka birine söylersen yüzde yüz uyumlu olursun" iddiası yalnızca
birinci sınıf için doğru. Uyumluluk ancak dönüşüm **afin** ise (ölçek + kayma)
bir tabloya sığar. Ama senin istediğin dinamik birimler saf fonksiyon değil,
sorgu. O zaman "uyumluluk" bir çeviri tablosu değil, bir `resolve` protokolüdür
— ve dışarıdan bakan biri artık senin sunucuna bağımlı hale gelir. Bu,
anti-lock-in duruşunla gerilim içinde: kimse senin takvimini offline
yorumlayamaz.

Buna iyi bir test vakası: **Hicri takvim**. Ay gözlemine dayandığı için önceden
hesaplanamaz — yani sistemin zorunlu olarak "oracle destekli birim" kavramını
taşımak durumunda. Bunu baştan modele koyarsan, dinamik birimler özel bir durum
olmaktan çıkıp temel vaka olur.

### Kaskad kısmı için hazır formalizm var

"Yıllar birbirini ittirir", "işe gitme saati uyanma saatine bağlı" — bu tam
olarak **Simple Temporal Network with Uncertainty (STNU)**. Ve senin en can
alıcı örneğin (geç kalırsam buluşma nasıl kayar) literatürde şu ayrımla
çözülmüş:

- **requirement link**: senin kontrol ettiğin süre (toplantı 1 saat olsun)
- **contingent link**: kontrol etmediğin süre (uyku, trafik, otobüs)
- **dynamic controllability**: "ben ne kadar geç kalsam bu plan hâlâ tutarlı
  kalır mı?" sorusunun karar problemi — polinom zamanda çözülebiliyor (Morris'in
  algoritmaları)

Bunu CTCP'nin çekirdeğine koymanı öneririm, çünkü "kutucuklar birbirini ittirir"
ifadesi şu an underspecified: döngüsel kısıt olduğunda (A, B'ye bağlı, B, A'ya)
ya sabit nokta yok ya da salınım var. Ayrıca Allen aralık cebiri ilişki sözlüğün
için hazır bir taban (before, meets, overlaps, during...).

### Bir tuzak: durma problemi

"Kendi içine çöken, derin matematiksel işlemler gerektiren bir mantık bile
kurabilirsin, limit yok" — burada limit koymak zorundasın. Çözümleme dili
Turing-tam olursa "saat kaç?" sorusunun cevabı sonlanmayabilir. Ya toplam bir
dil (primitive recursive, WASM-tarzı yakıt/gas bütçesi) seç, ya da her `resolve`
çağrısına deterministik bir hesap bütçesi koy. Aksi halde bir kullanıcının
takvimi tüm federasyonu kilitleyebilir.

Küçük ama kaçınılmaz olan: artık saniye ve DST. Uyumluluk katmanı yazarken UTC
değil TAI tabanlı bir monoton çekirdek + sunumda takvim dönüşümü ayrımı seni çok
acıdan kurtarır.

### Gizlilik iddiasını düzeltmek gerek

"Veri hiç bir zaman sizden çıkmadan arkadaşlarınızın takvimleri buluşmayı
erteleyebilir" — bu tam olarak doğru olamaz. Arkadaşının sunucusu yeniden
planlama yapabiliyorsa, en azından şu bilgiler sızıyor: geç kaldığın olgusu,
müsaitlik pencereleri, ve tekrarlanan sorgularla müsaitlik haritasının tamamı.
Free/busy sızıntısı takvim sistemlerinde bilinen bir sorun.

Daha savunulabilir çerçeve: veri paylaşımı değil, **yetenek kapsamlı yüklem
sorgusu**. Karşı taraf "t anında müsait misin?" sorabilir, "takvimin nedir?"
soramaz. Diyetisyen örneğindeki granülerlik seviyeleri de aslında
_view/projection_ — bunu spec'te birinci sınıf nesne yap (`View`: hangi alanlar,
hangi çözünürlük, hangi zaman aralığı, süre sınırı, iptal edilebilirlik). Ve
sorgu hızını sınırla, yoksa yineleme ile tam takvim yeniden inşa edilir.

Bir de dürüst olmak adına yazılması gereken tehdit modeli: teknik saldırgan
değil, **zorlama**. Sistem ne kadar zenginse "CTCP akışını paylaş" diyen
işveren, sigorta şirketi, okul o kadar güçlenir. Self-hosting bunu çözmez, çünkü
sorun erişim değil talep. "SINIRSIZ FARKINDALIK" başlığı ile aynı sayfada bunun
da durması metni daha güçlü yapar, zayıflatmaz.

### Minimum spec nesneleri

Şunları ayrı ayrı adlandırırsan protokol yazılabilir hale gelir:

`Unit` (birim tanımı + anchor) · `Container` (kutucuk, iç içe) · `Anchor`
(bilinen bir takvime bağlanma noktası) · `Link` (requirement / contingent) ·
`Constraint` (koşul + formül) · `Resolver` (bütçeli çözümleme) · `View`
(projeksiyon) · `Capability` (kim ne sorabilir) · `Proposal` (federe yeniden
planlama teklifi)

Federe kısımda ironik bir zorunluluk var: bir _zaman_ protokolü, teklif
çakışmalarını çözmek için **mantıksal saat** (vector clock / Lamport) ve bir
teklif-kabul asimetrisi isteyecek. Fiziksel zaman sıralama için yetmez.

Hangi tarafı önce netleştirmek istiyorsun — birim cebri (statik, tek başına spec
olabilir) mi, kaskad çözücü mü? Bunlar ayrı belge olmalı bence; ikisini tek
spec'e sıkıştırırsan ikisi de gevşek kalır.

---

## 3 · Bilgehan

> Bildirimsel takvim cebiri de, Canlı zaman çözücü aynı iletişim mantığı ile
> verilir (CTCP transport katmanı agnostiktir), dinamik olan bir kod olarakta
> verilebilir. Burda asıl önemli olan hesaplanamayacak kadar büyük veya
> öngörülemez olanlardır. Recursive olması sıkıntı değil, hesaplarız
> hesaplayabildiğimiz kadar. Kod olarak verilebilir (Wasm, ts, lua veya başka
> bişey) eğer çok karmaşık değilse (olsa da verebilirsin, sadece kaynak
> sıkıntısı olur). Asıl sıkıntı Hicri takvim örneği. Ve cevabı da basit; e
> dinamik olsun ne olacak? Cidden cevap bu, offline olması sıkıntı evet, ama
> senin hesaplama becerin yoksa başkasına muhtaçsındır. Bu böyledir, şaşmaz.
>
> Gizlilik de aşırı kolay; dediğin formül için benim sunucumun "teklif edemiyor"
> olması gerek. Eğer bir sunucu bunu desteklemiyorsa evet, verilerini isimleri
> kaldırılmış ve bloklar birleştirilmiş şekilde verebilirsin. Neden bunu yapasın
> ki? Biz bunu ilk günden örnek sunucu yazılımına bile ekleyeceğiz!
>
> Beni en çok mutlu eden şey "Kaskad" mantığı üstünde ciddi bir çalışma olması.
> Bunlar basit/temel, önceden hazırlanmış ve hatta protokolize edilmiş formüller
> ile hesaplanabilir!
>
> RL yani requirement link, CL yani contingent link ve DC dynamic
> controllability mantıklarını kendi yazılımızda ilk günden ekleriz. Tabi,
> protokol açık uçlu kalabilmesi için öyle yazılmaz temelde, ama ufak bir
> kategorizasyon ile buna uymadan da CTCP uyumlu sistemler yapılabilir; buna
> uyan CTCP sunucuları farklı yorumlanabilir.
>
> Bir kutucuk içerisinde bir "birim" oluşturur ve ondan makismum ne kadarı
> olacağını belirler. Bu her bir birim kendi altına böyle bir şey belirler. Ve
> eventler de benzer bir şekilde yapar bunu aslında, bir eventi 3 parçaya
> bölersen o da onun 3 tane karakteri olan uniti olur.
>
> Ayrıca, kutucuklar sadece bir birini ittirmez, bazen bir olay olmazsa bütün
> event iptal olur, bazen olmaması durumunda alternatif şeyler yaşanır, bazen
> illa o olay beklenir. Ama illa bir şey olur. Statik olmamasındaki en büyük
> argüman bu zaten.
>
> Sistem mail sistemleri gibi ilk günden federe bu arada.
>
> Bir server'ın en çok kullanılan zaman ve mantık sistemine en azından bir
> çeviriye sahip olması mantıksal bir gereksinim. Yok mu? O onun problemi.
>
> Sadece fikri konuşuyoruz, ama kulağa nasıl geliyor?

---

## 4 · Claude

Kulağa şöyle geliyor: elinde iki fikir var, biri kanca, biri motor. "Kendi
takvimini uydur" kanca. "Zaman gerçeklik kaydıkça yeniden hesaplanır ve karşı
tarafın takvimi kendini onarır" motor. Metin şu an kancayı öne çıkarıyor, ama
değerin tamamı motorda. Keyfî birim tanımlamanın kısmî muadili zaten var (CLDR
bir düzine takvim sistemi taşıyor); tam keyfî olan kısım yeni ama "kime ne
faydası var" sorusu zayıf kalıyor. Kaskad kısmının ise gerçekten rakibi yok.

### Cevapların bir şeyi farkında olmadan sağlamlaştırdı

"Hesaplayabildiğimiz kadar hesaplarız" tek başına tehlikeli, çünkü kısmi cevap
_yanlış_ cevapsa hiç cevaptan kötüdür. Ama senin "illa bir şey olur" kuralın
bunu kurtarıyor. İki koşulla:

- Cevap tipi nokta değil **aralık** olursa, kısmi hesap = daha geniş aralık.
  Yanlış değil, sadece belirsiz. Bütçe bitince "toplantı 14:00–16:00 arasında"
  demek doğru bir cevaptır.
- Her container'ın tanımlı bir fallback dalı varsa, çözümleme asla "tanımsız"
  dönmez.

Bu ikisini protokol kanunu yaz: `resolve` asla nokta dönmez, aralık + kesinlik
damgası döner; ve her dal tanımlı. O zaman recursion konusunda söylediğin şey
gerçekten doğru olur — ama ancak bu iki kural yazılıysa.

Bir de şunu bilerek yap: iptal / alternatif / süresiz bekleme üçlüsünü eklediğin
an STNU'dan çıktın, çünkü STNU'da disjunction yok. Tarif ettiğin şey DTP
(Disjunctive Temporal Problem) + belirsizlik, ve o NP-hard. Yani bütçe artık
"hoş bir özellik" değil, tasarımın zorunlu sonucu. İyi haber: iptal propagasyonu
ve alternatif dallar için hazır pratik semantik var — durable workflow motorları
(Temporal.io tarzı) tam olarak aktivite / timer / compensation / retry taşıyor.
Kaskad çekirdeğini takvim tarafından değil iş akışı tarafından modellersen
çözülmüş bir alana oturuyorsun.

### Bedava kazanç: karma taban

"Kutucuk içinde birim tanımlar ve maksimumunu belirler, o da altına aynısını
yapar" — bunun adı var, **mixed-radix konumsal sayı sistemi**. 1 hafta = 7 gün
bir taban; ayların eşit olmaması ise tabanın kendisinin bir fonksiyon olması.
Açıkça böyle modellersen üç şey bedavaya gelir: adresleme (zaman = ağaçta bir
yol), sıralama (leksikografik), aritmetik (elde/borç). Ve "yıllar birbirini
ittirir" dediğin şey statik durumda tam olarak **carry**. Kaskadın basit hali
elde, karmaşık hali kısıt çözümü — aynı nesnenin iki modu, iki ayrı mekanizma
değil.

Bedeli: taban dinamikse adresler çözümlemeden karşılaştırılamaz, yani `X < Y`
sorusu bile resolve gerektirebilir. Kabul edilebilir, ama indeksleme tarafında
bunu bilerek gir.

### Hicri cevabın bir kategori bırakıyor

"Dinamik olsun ne olacak" duruşu tutarlı, ama gözleme dayalı birimler _geçmişte
statiktir_. Ay gözlendikten sonra o ay sonsuza kadar sabit. Üçüncü sınıf:
**nihayetinde statik**. Bu sana tek bir kavram kazandırıyor — **çözümleme
cephesi**. Cephenin gerisi değişmez log, önü projeksiyon.

Ve bu tam olarak event sourcing. Metinde "kayıt defteri" (diyetisyen, uyku,
doktor) ile planlama iki ayrı özellik gibi duruyor, ama değil: geçmiş = çözülmüş
gelecek. Tek veri modeli — append-only olay logu + türetilmiş çözümleme. Böyle
kurarsan diyetisyen örneği ayrı bir modül olmaktan çıkıp aynı motorun geçmişe
bakan yüzü olur.

### Hâlâ ikna olmadığım iki yer

**Birleştirilmiş blok anonim değil, parmak izi.** Tek bakışta zararsız, ama
sorguyu 5 dakika kaydırarak tekrarlarsan blok sınırlarını, oradan rutini
çıkarırsın. Önlem anonimleştirme değil: cevapları ızgaraya yuvarlamak (15/30
dk), sorgu bütçesi, ve aynı aralığa tekrar sorguya deterministik/cache'li aynı
cevabı vermek.

**Mail benzetmesi seni rahatlatmasın.** Mail federe kaldı ama pratikte
merkezileşti, çünkü istenmeyen mesaj problemi itibar sistemi doğurdu, itibar
sistemi de kapı bekçisi. Teklif spam'i mail spam'inin aynısı olacak. Yetenek
jetonuna bağlı teklif hakkı (jetonsuz kimse sana teklif gönderemez) bunu spam
filtresi olmadan kökten kesiyor — ve gizlilik modeliyle aynı primitife oturuyor,
iki sorun bir mekanizma.

Ufak not: CTCP kısaltması IRC'de Client-To-Client Protocol olarak yerleşik.
RDIP/Vemde çizgisinde isim seçiyorsun, çakışmayı bilerek seç.

Dürüst stratejik okuma: benimsenme kapısı birim cebri değil. Kapı, kimsenin
çözmediği o tek şey — geç kaldığımda karşı tarafın takvimi kendini onarıyor. Onu
tek takvim sistemiyle (Gregoryen), tek kısıt tipiyle, dar bir demoda
çalıştırırsan insanlar birim cebrini sonra kendileri ister. Tersini yaparsan
elinde güzel bir spec ve sıfır kullanıcı olur.

---

_Kayıt burada bitiyor. Sonrasında bu tartışmadaki varsayımları test etmek için
`ctcp-demo/` yazıldı; hangi düğmenin hangi iddiayı sınadığı `README.md` içindeki
tabloda._

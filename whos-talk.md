?᲼Whoλm᲼Rol simgesi, Üst Yönetim Kurulu — 03:04
cascadelerin nasıl çalışması gerektiğini çözdüm @cata
```xml
<container id="gregorian-time" name="Time">
    <cascade>
        <container id="gregorian-year" name="1">
        </container>
        <container id="gregorian-year" name="2">
        </container>
        <!-- ... -->
        <container id="gregorian-year" name="2025">
        </container>
        <container id="gregorian-year" name="2026">
            <cascade>
                <container id="gregorian-month" name="1">
                </container>
                <container id="gregorian-month" name="2">
                </container>
                <!-- ... -->
                <container id="gregorian-month" name="11">
                </container>
                <container id="gregorian-month" name="12">
                    <cascade>
                        <container name="1">
                        </container>
                        <!-- ... -->
                        <container name="31">
                            <container name="Last day of this year"></container>
                            <cascade>
                                <!-- ... -->
                                <container name="0">
                                    <cascade>
                                        <!-- ... -->
                                        <container name="0">
                                            <container name="Starting of last day of this year"></container>
                                        </container>
                                        <!-- ... -->
                                    </cascade>
                                </container>
                                <!-- ... -->
                                <container name="16">
                                    <cascade>
                                        <!-- ... -->
                                        <container name="30">
                                            <container id="dinner-party-entry-talk" point="start"
                                                name="Entry Talk">
                                            </container>
                                            <container name="Dinner Party">
                                                <cascade>
                                                    <container id="dinner-party-entry-talk"
                                                        name="Entry Talk">
                                                    </container>
                                                    <container name="Entry Meal">
                                                    </container>
                                                    <container name="Meal">
                                                    </container>
                                                    <container name="Dessert">
                                                    </container>
                                                </cascade>
                                            </container>
                                        </container>
                                        <!-- ... -->
                                        <container name="40">
                                            <container id="dinner-party-entry-talk" point="end"
                                                name="Entry Talk">
                                            </container>
                                        </container>
                                        <!-- ... -->
                                    </cascade>
                                </container>
                                <!-- ... -->
                            </cascade>
                        </container>
                    </cascade>
                </container>
            </cascade>
        </container>
        <!-- ... -->
    </cascade>
</container>
```
burası bayaaa bi karışık amk
ama basitçe
şimdi biliyorsun
herşey bir container dedik
bu yıl, ay gün gibi şeyleri de bir kutucuk yaptı dimi
o zaman her bir gün ay yıl için containerları özel olarak tutmak gerekir
ama biz öyle yapmıyoruz
tüm yıllar, aylar, günler, saatler ve dakikalar teker teker veri olarak depolanmak yerine
hepsi tek bir formül üstünen oluşuyor
yani aslında
2025 yok
o onun ismi
o aslında bir gregorian-year
o formül ne diyor
her grogorian-year
içinde 12 tane gregorian-month bulundurur
ve her bir ay da, numarasına göre içinde o kadar gün bulundurur
aylar günleri
günler saatleri
saatler dakikaları
dakikalar saniyeleri
saniyeler milisaniyeleri
içinde bulundurur
bu databasete tek bir entry
bir ay varsa içerisinde günler vardır vs
bu böyle olunca
sınırsız sayıda günümüz, ayımız zartımız zurtumuz oluyor
asıl olay
bu tek tip günlerden
?᲼Whoλm᲼Rol simgesi, Üst Yönetim Kurulu — 03:11
hangi ayın içerisindeki günün olduğu
spesifikasyon bu
yoksa bir şeye gregorian-month içerisinde, x gününde, x saatinde falan dersen
o otomatik olarak her ay her gün her o saate olur
yıllıklar için de aynı
yılı belirtmeden yılın içindedir dersen tüm yıllarda olur
veya yılı belirten kısma bir formül koyarsan o yıllarda olmasını da sağlayabilirsin
her 2 yılda bir
veya her 0 ile biten yılda bir
vs vs
buraya kadar containerların böyle değişken olmasından bahsettim ya
neye göre değişiyor amk?
cascade'e göre
her container içinde başka bir container olması durumunda bir cascade'e sahiptir
içinde bişey yoksa yok diyebiliriz
şimdi cascade ne oluyor ve neden değişiyor
şöyle
Büyük Ulus Akşam Yemeği
düzenliyoruz abi
bu olay zaman içerisinde, x bir yılda, x bir ayda, x bir günde, x bir saate, x bir dakikada başlıyor
ve bir yerde de bitiyor tüm event
?᲼Whoλm᲼Rol simgesi, Üst Yönetim Kurulu — 03:22
başlangıcı bir zımbırtı ile gösteriyorum bu sistemde, bitişi ayrı
şöyle yani
```xml
<!-- ... -->
<container name="16">
    <cascade>
        <!-- ... -->
        <container name="30">
            <container name="Dinner Party" point="start">
            </container>
        </container>
    </cascade>
</container>
<!-- ... -->
<container name="18">
    <cascade>
        <!-- ... -->
        <container name="10">
            <container name="Dinner Party" point="end">
            </container>
        </container>
        <!-- ... -->
    </cascade>
</container>
<!-- ... -->
```
biz db'de bunu farklı bir şekilde tutuyoruz
hani pointleri özel olarak tutmuyoruz
zaten bu XML şeyi bildiğin takvimde nasıl gözükeceğini görselleştirmeye çalışmam
neyse
?᲼Whoλm᲼Rol simgesi, Üst Yönetim Kurulu — 03:25
saat dakika tabanlı düzende
?᲼Whoλm᲼ — 03:26
bizim eventimiz evet, xte başlayıp yde bitiyor
ama bunun içinde de olay var dimi
mesela "Entry Talk"
giriş konuşması
giriş konuşması akşam yemeği planına göre 1. konumda
ve ne zaman olduğu fark etmeksizin bu konumda
ama saat dakika olarak?
işte cascade mevzusu bu aslında
cascadedeki konumun, bir container'a göre nerde olduğun diyebiliriz 
akşam yemeği 4 uzunluğunda bir container
4 tane container var cascade'i içinde
ama bu hani o saatin o dakikasını içindeydi dimi
yani 30da başlıyorsa 34te bitmesi gerekir mantıken
veya 30 içerisinde 4 büyüklüğü varsa 4. saniyede falan bitmesi gerek
burda öyle değil
her bir alt containerın zamana göre nerde olduğunu veri olarak giriyoruz
yani giriş konuşması 1. konumda
zamana göre nerde?
16:30'da
veya event başladığı gibi konuşma yapılmaz belki
35te
`<container id="dinner-party-entry-talk" point="start" name="Entry Talk"></container>`
şeklinde 30da bir işaretçi var ya mesela
?᲼Whoλm᲼ — 03:33
o, akşam yemeğinin içindeki giriş konuşması ile aynı giriş konuşması
sadece pozisyon verisi farklı, hangi cascade'e göre nerde olduğu
"nerde olduğu" da aslında "neyin içinde, hangi sırada olduğu" 
bu bağlamda şöyle şeyler yapılabilir
bi alışveriş listesi kutucuğu oluşturursun
süt al, zart al, zurt al
bunların zamanı belli değil
öylece boşta duran bir containerlar "alışveriş listesi" diye bir containerın cascadei içerisinde
e bu planlama olmuş oldu
bammm takvimde planlama yapıyorsun
ne yapacağını
sonra diyorsun ki
her bir alışveriş listesi elementine onları oluştururken
"önümüzdeki ilk alışveriş eyleminin içinde olun"
alışverişe girdin
belki bi tuşla, belki otomatik algılar
alacaklarının listesi belli bu alışverişte
ne zaman alacaksın?
fark etmez
sütü ne zaman aldığın belli olmak zorunda değil ki
alışveriş olayı içerisine bir ara aldın sonuçta
yani herşeyin zamanı kesin olmak zorunda da değil
zamanın neresinde olduğu bilgisini girmezsen, onun parentinin zamanın neresinde olduğuna bakarsın
"süt almıştım" ne zaman aldım? Süt alma olayı zamanda işaretli değil evet, ama sütü aldığın alışverişe çıkma olayı işaretli
?᲼Whoλm᲼ — 03:40
20 eylül 19:48'de gittiğin alışverişten almışsın
noldu?
baya aldığını ettiğini takip etmiş oldun
amk düşünsene hayatını bununla tasarladığını
"10dk koş" ne zaman? ilk boş zamanda amk
yarak yap yurak yap
hepsini listele
otomatik oturt
planla
bu bide bu dinamik veri sisteminin görünen yüzü
cascade mantığının
container mantığının ucu ÇOOOOK açık
abi iş yapman gerek dimi
kod yazmna
kod yazman 
bunun için onu yapmaya uygun olman lazım
"bir şey üstünde çalışmaya uygunluğu" adında bir container var 
bunun içinde işte senin uyuma eventin de var, yiyip içip sıçman da
ve bu arkadaşların "zaman"'a göre de bir yeri var dimi
yani xte kalkıp yde yatıyorsun
?᲼Whoλm᲼ — 03:47
ben buna bakarak ne zaman dolu olduğunu nelerden dolayı dolu olduğunu bilerek görebiliyorum
yani sıçarken kod yazamazsın
veya uyurken
veya başka bir kod üstüne çalışırken yeni bir kod üstüne de çalışamazsın 
ben bunları zamandan bağımsız bir şekilde bu containerda tutuyorum
bir event eklemek istediğimde
iki olay arasındaki zamana bakıyorum
iki olayın zaman cascadeine göre arasındaki farka bakıyorum 
baktım uyku ile yemek yeme arasındaki süreden hayır yok, böyle 15dk falan oynuyor belki
pıt bi sonraki aralığa
pıt bi sonraki aralığa
en kötü nereye, tüm işinin gücünün sonuna
yani yapman gereken bir iş olduğunda o otomatik olarak takviminde yer buluyor
"bir şey üstünde çalışmaya uygunluğu" containerının cascadeinde bir container'a dönüşüyor, aynı zamanda da o containerın içeriklerine göre zaman sisteminde boş bir yere oturuyor
ve diğerleri ile çakışmamış oluyor
yani aynı anda yapamayacağın işlerin listesini tutuyorsun
motor da onların üst üste gelmemesini sağlıyor
buna başka bir argüman da
tuvaletteyken çalışamazsın, kod yazamazsın evet ama
telefon kullanabilirsin bro, fiziksel olarak imkanlı
"telefon kullanma" diye bir container abi 
içine kullanamayacağı zamanlar
?᲼Whoλm᲼ — 03:54
kullanamayacağı zamanlardan da gün saat dakika sisteminde onların kaplamadığı yerlere göre kullanabileceği bir zaman bulup gün saat dakika sistemine göre hangi olaylardan önce sonra geliyorsa ona göre de "telefon kullanma" içerisindeki konumu ayarlanması 
telefon kullanma eyleminin gün saat dakika sistemi içerisinde konumunun olması
bitti abi
istersen bu telefon kullanma eylemi içerisine
mesajlara bak
şunu yap
bunu yap diye containerlar düş
abi baya mesela mesajlarını okuma saatini bu sistem sayesinde otomatik saptayabilirsin
çok yazdım arkadaşlar evet farkındayım ama bu amına kodumun şeyi dünyayı değiştirir
nerdeyse her gün yaşadığımız, hayatlarımızdaki plan sistemini yeni bir boyuta çıkarır 
ADHD ultimate fix ammmına koyim
görev verebiliyorsun kendine
evi topla diye bir container abi
bitişi belli değil açık uçlu
ne zaman boşsan, yorgunluğunu vsde hesaba katarak
kendine evi toplama saati belirleyebilirsin
koca koca iş zamanlama planlamaları
?᲼Whoλm᲼ — 04:01
taşları tak diye yerine otutturursun
o yüzden çok heyecanlıyım
eğer bunu adam akıllı bir hale getirirsem, bir protokole çevirebilirsek http veya smtp gibi
büyük şirketler ulusun parmağında döner
engineleri biz yazacağız
protokolü biz yöneteceğiz
çok potansiyelli bir proje
ve öyle hafif bişey de değil hani
ve öyle basit bişey de değil hani 
her yana uzanıyor amk
öyleli
uzun süredir blog yazmak istiyordum
bu da onun dışa vurumu oldu
# Öğrenci Takip Sitesi

Derleme gerektirmez (HTML + JS + Firebase). VS Code'da klasörü açın, **Live Server** eklentisiyle `index.html`'i çalıştırın
(dosyayı çift tıklayıp açmayın; ES modülleri http üzerinden çalışır).

## Firebase kurulumu
1. https://console.firebase.google.com → **Proje ekle**.
2. **Proje ayarları → Genel → Uygulamalarınız → Web (</>)** ile web uygulaması ekleyin. Çıkan `firebaseConfig` değerlerini `js/fb.js` içine yapıştırın.
3. **Authentication → Başlayın → Oturum açma yöntemi**: **E-posta/Şifre** ve **Google**'ı etkinleştirin (Google için destek e-postası seçin).
4. **Authentication → Kullanıcılar → Kullanıcı ekle**: e-posta `fatiher45@icloud.com` ve belirlediğin şifre. Bunu siteyi yayınlamadan önce hemen yap. (Giriş ekranında aynı e-posta ve şifre girilir.)
5. **Firestore Database → Veritabanı oluştur** (konum: europe-west / eur3). Ardından **Kurallar** sekmesine `firestore.rules` içeriğini yapıştırıp **Yayınla**'ya basın.
6. **Authentication → Ayarlar → Yetkili alan adları**: `localhost` hazır gelir. Siteyi yayınlarsanız alan adını buraya ekleyin.
7. (İsteğe bağlı) Yayın: `npm i -g firebase-tools`, `firebase login`, `firebase init` (Hosting + Firestore, mevcut dosyaları ezmeyin), `firebase deploy`.

## Dosyalar
- `index.html` giriş (öğretmen / veli) · `teacher.html` öğretmen paneli · `parent.html` veli paneli
- `js/fb.js` Firebase ayarı · `js/common.js` sabitler ve tablo tanımları · `js/records.js` ders/deneme/kitap/mesaj
- `js/report.js` rapor ve PDF · `js/studentview.js` ortak sekmeler · `firestore.rules` güvenlik kuralları

## Notlar
- Öğrenci dosyaları silinemez (kurallarda kapalı), yalnızca arşivlenir.
- Aynı isimde iki öğrenci olursa isme şube ekleyin ("Ahmet Yılmaz 12A"); veli de adı bu şekilde yazar.

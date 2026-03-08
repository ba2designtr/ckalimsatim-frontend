# CK Alım Satım - Kurumsal Vitrin Sitesi

Premium araç ve gayrimenkul danışmanlığı kurumsal tanıtım sitesi.

## 🌐 Site URL
https://elite-marketplace-6.preview.emergentagent.com

---

## 📁 Klasör Yapısı

```
frontend/src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Üst menü (sticky)
│   │   ├── Footer.jsx          # Alt bilgi + ba2design kredisi
│   │   └── FloatingButtons.jsx # Sabit WhatsApp/Telefon/Instagram butonları
│   └── ui/                     # Shadcn UI bileşenleri
├── pages/
│   ├── HomePage.jsx            # Ana sayfa
│   ├── AboutPage.jsx           # Hakkımızda
│   ├── ServicesPage.jsx        # Hizmetler
│   ├── GalleryPage.jsx         # Galeri
│   └── ContactPage.jsx         # İletişim
├── config/
│   └── siteConfig.js           # TÜM AYARLAR BURADA
└── App.js                      # Ana uygulama
```

---

## 🚀 Kurulum Komutları

```bash
# Bağımlılıkları yükle
cd frontend
yarn install

# Geliştirme sunucusunu başlat
yarn start

# Production build
yarn build
```

---

## 📦 Netlify Deploy Adımları

### Yöntem 1: Manuel Deploy
```bash
cd frontend
yarn build
# build klasörünü Netlify'a sürükle
```

### Yöntem 2: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
cd frontend
netlify deploy --prod --dir=build
```

### Yöntem 3: GitHub Entegrasyonu
1. Kodu GitHub'a push edin
2. Netlify'da "Import from Git" seçin
3. Build komutu: `cd frontend && yarn build`
4. Publish dizini: `frontend/build`

---

## 📞 WhatsApp Linkini Değiştirme

`/frontend/src/config/siteConfig.js` dosyasında:

```javascript
// WhatsApp numarasını değiştirin (ülke kodu + numara, boşluksuz)
whatsapp: "905469172309",
```

---

## 📷 Instagram Linkini Değiştirme

`/frontend/src/config/siteConfig.js` dosyasında:

```javascript
// Instagram kullanıcı adlarını değiştirin (@ olmadan)
instagramSales: "_ck_auto",
instagramPersonal: "ceyhun_kucurekk",
```

---

## 📱 Telefon Numarasını Değiştirme

`/frontend/src/config/siteConfig.js` dosyasında:

```javascript
// Görüntülenecek telefon numarası
phone: "0546 917 23 09",
```

---

## 🖼️ Görselleri Değiştirme

Görseller `siteConfig.js` dosyasındaki `gallery` ve `heroImages` bölümlerinden değiştirilir:

```javascript
// Hero arka plan görselleri
heroImages: [
  "https://yeni-gorsel-url.jpg",
],

// Galeri görselleri
gallery: {
  vehicles: [
    "https://arac-gorsel-1.jpg",
    "https://arac-gorsel-2.jpg",
  ],
  realEstate: [
    "https://ev-gorsel-1.jpg",
  ],
  land: [
    "https://arsa-gorsel-1.jpg",
  ],
  office: [
    "https://ofis-gorsel-1.jpg",
  ]
}
```

**Öneri:** Görseller için Unsplash veya kendi hosting servisinizi kullanın.

---

## 🗺️ Google Maps Değiştirme

`/frontend/src/config/siteConfig.js` dosyasında:

```javascript
// Google Maps embed URL'sini değiştirin
mapEmbedUrl: "https://www.google.com/maps/embed?pb=...",
```

Google Maps'ten embed kodunu almak için:
1. Google Maps'te konumunuzu bulun
2. Paylaş > Haritayı yerleştir
3. iframe src URL'sini kopyalayın

---

## 🏢 Şirket Bilgilerini Değiştirme

`/frontend/src/config/siteConfig.js` dosyasında:

```javascript
// Şirket adı ve slogan
name: "CK Alım Satım",
tagline: "Premium Araç & Emlak Yatırım Danışmanlığı",
description: "Güvenilir araç alım satım...",

// Adres
address: "Yeni adres bilgisi",

// Hakkımızda içeriği
about: {
  title: "Başlık",
  subtitle: "Alt başlık",
  mainText: "Firma tanıtım metni...",
  values: ["Değer 1", "Değer 2"],
}
```

---

## 🎨 ba2design Kredisi

Footer'da animasyonlu ba2design butonları bulunmaktadır:
- Instagram: @ba2designtr
- Website: ba2design.com

Bu bilgileri değiştirmek için `siteConfig.js`:

```javascript
footerCredit: {
  text: "ba2design",
  instagram: "ba2designtr",
  website: "https://ba2design.com"
}
```

---

## 📱 Sayfalar

| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Ana Sayfa | `/` | Hero, hizmetler, neden biz, galeri önizleme, CTA |
| Hakkımızda | `/hakkimizda` | Firma tanıtımı, değerler, istatistikler |
| Hizmetler | `/hizmetler` | 5 hizmet detaylı anlatım |
| Galeri | `/galeri` | Filtrelenebilir görsel galerisi |
| İletişim | `/iletisim` | İletişim kartları, Google Maps |

---

## 🎨 Tasarım Özellikleri

- **Renk Paleti:** Lacivert (#0F172A) + Beyaz + Gri tonları
- **Font:** Outfit (başlıklar) + Manrope (metin)
- **WhatsApp Yeşili:** #25D366
- **Instagram Gradyanı:** Mor-Pembe-Turuncu
- **Responsive:** Tam mobil uyumlu
- **Animasyonlar:** Hover efektleri, scroll animasyonları

---

## ✅ Özellikler

- ✅ 5 Sayfa (Ana, Hakkımızda, Hizmetler, Galeri, İletişim)
- ✅ Sabit WhatsApp/Telefon/Instagram butonları
- ✅ Google Maps entegrasyonu
- ✅ Filtrelenebilir galeri + lightbox
- ✅ Mobil hamburger menü
- ✅ Sticky header
- ✅ ba2design animasyonlu kredi butonları
- ✅ SEO uyumlu yapı
- ✅ Netlify deploy hazır
- ✅ Backend gerektirmiyor

---

**ba2design tarafından yapılmıştır**

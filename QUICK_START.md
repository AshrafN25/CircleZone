# 🚀 Quick Start Guide - CircleZone

## Aplikasi Sudah Berjalan! ✅

Server development sudah aktif di: **http://localhost:5174/**

## 📋 Fitur yang Tersedia

### 1. **Navigasi**
- Navbar sticky dengan menu navigasi
- Sidebar (desktop) dengan highlight section aktif
- Dark mode toggle
- Mobile responsive menu

### 2. **Materi Pembelajaran**
- ✅ Hero Section dengan ilustrasi SVG
- ✅ Pengertian Lingkaran
- ✅ Unsur-Unsur Lingkaran (interaktif - klik diagram)
- ✅ Nilai Phi (π)
- ✅ Keliling & Luas dengan kalkulator real-time
- ✅ Materi SMK (Sudut, Busur, Juring, Garis Singgung)
- ✅ Penerapan dalam Kehidupan
- ✅ Latihan Soal dengan accordion

### 3. **Kalkulator Interaktif**
- Keliling lingkaran
- Luas lingkaran
- Panjang busur (dengan slider sudut)
- Luas juring (dengan slider sudut)
- Garis singgung

### 4. **AI Assistant**
- Chatbot simulasi untuk menjawab pertanyaan
- Quick question chips
- Animasi smooth dengan Framer Motion
- Floating button (mobile) dan sidebar button (desktop)

### 5. **Latihan Soal**
- Tab untuk Soal SMP dan SMK
- Accordion dengan langkah penyelesaian
- Badge untuk soal SMK

## 🎨 Cara Menggunakan

### Navigasi
1. Klik menu di navbar untuk scroll ke section
2. Gunakan sidebar (desktop) untuk navigasi cepat
3. Toggle dark mode dengan tombol di navbar

### Kalkulator
1. Masukkan nilai jari-jari atau parameter lain
2. Hasil akan muncul secara real-time
3. Gunakan slider untuk sudut pada busur/juring

### Unsur-Unsur Lingkaran
1. Klik pada diagram SVG untuk melihat detail
2. Atau klik tombol di bawah diagram
3. Info akan muncul dengan animasi

### AI Chat
1. Klik tombol "Tanya AI" (sidebar desktop atau floating button mobile)
2. Pilih pertanyaan cepat atau ketik sendiri
3. AI akan menjawab dengan penjelasan lengkap

### Latihan Soal
1. Pilih tab SMP atau SMK
2. Klik soal untuk membuka accordion
3. Lihat langkah-langkah penyelesaian

## 🛠️ Customization

### Mengubah Warna
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#1976D2',    // Biru
  secondary: '#FFC107',  // Kuning
  tertiary: '#4CAF50',   // Hijau
}
```

### Menambah Soal
Edit `src/data/materiData.js`:
```js
export const SOAL_SMP = [
  {
    id: 'soal-baru',
    judul: 'Judul Soal',
    soal: 'Pertanyaan...',
    jawaban: 'Jawaban',
    langkah: ['Step 1', 'Step 2', ...]
  }
]
```

### Mengaktifkan Anthropic API
1. Dapatkan API key dari https://console.anthropic.com/
2. Copy `.env.example` ke `.env`
3. Isi `VITE_ANTHROPIC_API_KEY`
4. Uncomment kode API di `src/components/ai/AIChatPanel.jsx`

## 📱 Responsive Design

- **Mobile** (< 768px): Hamburger menu, floating chat button
- **Tablet** (768px - 1024px): Expanded navbar
- **Desktop** (> 1024px): Sidebar navigation, full layout

## 🎯 Tips Penggunaan

1. **Scroll Progress**: Lihat progress bar biru di atas untuk tracking posisi
2. **Smooth Scroll**: Semua navigasi menggunakan smooth scroll
3. **Dark Mode**: Preferensi tersimpan di localStorage
4. **Animasi**: Gunakan Framer Motion untuk transisi halus
5. **Intersection Observer**: Section aktif terdeteksi otomatis

## 🐛 Troubleshooting

### Port sudah digunakan
Server otomatis mencari port lain (5174, 5175, dst)

### Styling tidak muncul
```bash
npm run dev
# Restart server jika perlu
```

### Dark mode tidak bekerja
Cek localStorage browser atau clear cache

### Kalkulator tidak update
Pastikan input adalah angka valid

## 📚 Struktur Kode

```
src/
├── components/
│   ├── layout/      # Navbar, Sidebar, Footer
│   ├── sections/    # Hero, Pengertian, UnsurUnsur, dll
│   ├── ui/          # FormulaCard, SoalAccordion, dll
│   └── ai/          # AIChatPanel, AIChatButton
├── hooks/           # useActiveSection, useDarkMode, dll
├── utils/           # circleFormulas.js
├── data/            # materiData.js
└── App.jsx          # Main component
```

## 🚀 Next Steps

1. Tambahkan lebih banyak soal latihan
2. Integrasikan dengan Anthropic API untuk AI chat real
3. Tambahkan animasi SVG yang lebih kompleks
4. Buat quiz interaktif dengan scoring
5. Export hasil kalkulator ke PDF
6. Tambahkan mode print-friendly

## 📞 Support

Jika ada pertanyaan atau issue:
1. Cek console browser (F12)
2. Lihat terminal untuk error
3. Baca dokumentasi di README.md

---

Selamat belajar geometri lingkaran! 🎉

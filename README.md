# LingkaranKu - Platform Edukasi Geometri Lingkaran

Platform edukasi interaktif untuk mempelajari materi Geometri Lingkaran, mencakup jenjang SMP hingga SMK (Kurikulum Merdeka).

## 🎯 Fitur Utama

- **Materi Lengkap**: Dari pengertian dasar hingga materi lanjutan SMK
- **Kalkulator Interaktif**: Hitung keliling, luas, busur, juring, dan garis singgung
- **Visualisasi SVG**: Diagram interaktif untuk memahami unsur-unsur lingkaran
- **Latihan Soal**: Soal-soal dengan pembahasan lengkap
- **AI Assistant**: Chatbot untuk menjawab pertanyaan seputar lingkaran
- **Dark Mode**: Tema gelap untuk kenyamanan belajar
- **Responsive**: Tampilan optimal di semua perangkat

## 🛠️ Teknologi

- **React 18** dengan Vite
- **Tailwind CSS** untuk styling
- **Framer Motion** untuk animasi
- **Recharts** untuk visualisasi data
- **Material Symbols** untuk ikon

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Struktur Materi

### Materi SMP
1. Pengertian Lingkaran
2. Unsur-Unsur Lingkaran
3. Nilai Phi (π)
4. Keliling & Luas Lingkaran

### Materi SMK
1. Sudut Pusat dan Sudut Keliling
2. Panjang Busur
3. Luas Juring dan Tembereng
4. Garis Singgung Lingkaran
5. Persamaan Lingkaran

## 🎨 Desain System

Aplikasi menggunakan design system yang konsisten dengan:
- **Warna**: Primary (Blue), Secondary (Amber), Tertiary (Green)
- **Tipografi**: Inter untuk body, Poppins untuk heading
- **Spacing**: Sistem 8px grid
- **Border Radius**: sm (4px), md (8px), lg (16px), xl (24px)

## 🤖 AI Assistant

AI Assistant menggunakan simulasi response untuk demo. Dalam produksi, dapat diintegrasikan dengan Anthropic Claude API dengan menambahkan API key di environment variables.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode otomatis tersimpan di localStorage dan mengikuti preferensi sistem.

## 📄 License

Dibuat untuk tujuan edukasi matematika dengan Kurikulum Merdeka.

## 👨‍💻 Development

```bash
# Format code
npm run format

# Lint code
npm run lint
```

## 🚀 Deployment

Aplikasi dapat di-deploy ke:
- Vercel
- Netlify
- GitHub Pages
- Atau hosting static lainnya

```bash
npm run build
# Upload folder 'dist' ke hosting pilihan Anda
```

## 📞 Kontak

Untuk pertanyaan atau saran, silakan buka issue di repository ini.

---

© 2026 LingkaranKu - Proyek Geometri Lingkaran

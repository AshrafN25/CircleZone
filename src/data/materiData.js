export const UNSUR_LINGKARAN = [
  {
    id: 'titik-pusat',
    nama: 'Titik Pusat (O)',
    simbol: 'O',
    ikon: 'trip_origin',
    definisi: 'Titik tepat di tengah lingkaran. Jarak dari titik ini ke semua titik pada lengkungan adalah sama.',
    warna: '#F44336'
  },
  {
    id: 'jari-jari',
    nama: 'Jari-Jari (r)',
    simbol: 'r',
    ikon: 'straighten',
    definisi: 'Garis dari titik pusat ke tepi lingkaran. Semua jari-jari dalam satu lingkaran panjangnya sama.',
    warna: '#1976D2'
  },
  {
    id: 'diameter',
    nama: 'Diameter (d)',
    simbol: 'd',
    ikon: 'horizontal_rule',
    definisi: 'Garis lurus yang melalui titik pusat dan menghubungkan dua titik pada lingkaran. d = 2r atau r = d ÷ 2',
    warna: '#4CAF50'
  },
  {
    id: 'busur',
    nama: 'Busur Lingkaran',
    simbol: 'AB',
    ikon: 'gesture',
    definisi: 'Garis lengkung pada tepi lingkaran. Ada busur kecil dan busur besar tergantung sudut pusatnya.',
    warna: '#FFC107'
  },
  {
    id: 'tali-busur',
    nama: 'Tali Busur',
    simbol: 'AB',
    ikon: 'remove',
    definisi: 'Garis lurus yang menghubungkan dua titik pada lingkaran tanpa melalui titik pusat. Diameter adalah tali busur terpanjang.',
    warna: '#9C27B0'
  },
  {
    id: 'juring',
    nama: 'Juring',
    simbol: 'AOB',
    ikon: 'pie_chart',
    definisi: 'Daerah yang dibatasi dua jari-jari dan sebuah busur (seperti potongan pizza).',
    warna: '#FF5722'
  },
  {
    id: 'tembereng',
    nama: 'Tembereng',
    simbol: '-',
    ikon: 'lens',
    definisi: 'Daerah yang dibatasi tali busur dan busur.',
    warna: '#00BCD4'
  },
  {
    id: 'apotema',
    nama: 'Apotema',
    simbol: 'h',
    ikon: 'height',
    definisi: 'Jarak terpendek dari titik pusat ke tali busur. Apotema selalu tegak lurus terhadap tali busur.',
    warna: '#795548'
  }
];

export const SOAL_LATIHAN = [
  {
    id: 'soal-1',
    nomor: 1,
    soal: 'Sebuah lingkaran memiliki jari-jari 21 cm. Berapakah keliling lingkaran tersebut? (π = 22/7)',
    pilihan: [
      { id: 'a', text: '122 cm' },
      { id: 'b', text: '132 cm' },
      { id: 'c', text: '142 cm' },
      { id: 'd', text: '152 cm' }
    ],
    jawaban: 'b',
    pembahasan: [
      'K = 2 × π × r',
      'K = 2 × 22/7 × 21',
      'K = 2 × 22 × 3',
      'K = 132 cm'
    ]
  },
  {
    id: 'soal-2',
    nomor: 2,
    soal: 'Diameter sebuah lingkaran adalah 50 cm. Berapakah luas lingkaran tersebut? (π = 3,14)',
    pilihan: [
      { id: 'a', text: '1.925 cm²' },
      { id: 'b', text: '1.962,5 cm²' },
      { id: 'c', text: '1.975 cm²' },
      { id: 'd', text: '1.985 cm²' }
    ],
    jawaban: 'b',
    pembahasan: [
      'r = d/2 = 50/2 = 25 cm',
      'L = π × r²',
      'L = 3,14 × 25²',
      'L = 3,14 × 625',
      'L = 1.962,5 cm²'
    ]
  },
  {
    id: 'soal-3',
    nomor: 3,
    soal: 'Sebuah juring lingkaran memiliki sudut pusat 120° dan jari-jari 21 cm. Berapakah luas juring tersebut? (π = 22/7)',
    pilihan: [
      { id: 'a', text: '452 cm²' },
      { id: 'b', text: '456 cm²' },
      { id: 'c', text: '460 cm²' },
      { id: 'd', text: '462 cm²' }
    ],
    jawaban: 'd',
    pembahasan: [
      'L = (α/360°) × π × r²',
      'L = (120/360) × 22/7 × 21²',
      'L = 1/3 × 22/7 × 441',
      'L = 1/3 × 1386',
      'L = 462 cm²'
    ]
  },
  {
    id: 'soal-4',
    nomor: 4,
    soal: 'Sudut pusat ∠AOB = 110°. Titik C berada pada busur besar AB. Berapakah besar sudut keliling ∠ACB?',
    pilihan: [
      { id: 'a', text: '110°' },
      { id: 'b', text: '55°' },
      { id: 'c', text: '220°' },
      { id: 'd', text: '45°' }
    ],
    jawaban: 'b',
    pembahasan: [
      'Sudut keliling = ½ × Sudut pusat',
      '∠ACB = ½ × ∠AOB',
      '∠ACB = ½ × 110°',
      '∠ACB = 55°'
    ]
  },
  {
    id: 'soal-5',
    nomor: 5,
    soal: 'Titik P berada di luar lingkaran berpusat O dengan jari-jari 8 cm. Jarak OP = 17 cm. Berapakah panjang garis singgung dari titik P ke lingkaran?',
    pilihan: [
      { id: 'a', text: '9 cm' },
      { id: 'b', text: '13 cm' },
      { id: 'c', text: '15 cm' },
      { id: 'd', text: '16 cm' }
    ],
    jawaban: 'c',
    pembahasan: [
      'PT = √(OP² − r²)',
      'PT = √(17² − 8²)',
      'PT = √(289 − 64)',
      'PT = √225',
      'PT = 15 cm'
    ]
  },
  {
    id: 'soal-6',
    nomor: 6,
    soal: 'Dua lingkaran memiliki jari-jari R = 10 cm dan r = 4 cm. Jarak antara kedua pusat = 20 cm. Berapakah panjang garis singgung persekutuan luar?',
    pilihan: [
      { id: 'a', text: '√264 cm' },
      { id: 'b', text: '√300 cm' },
      { id: 'c', text: '√364 cm' },
      { id: 'd', text: '√400 cm' }
    ],
    jawaban: 'c',
    pembahasan: [
      'GSPL = √(d² − (R−r)²)',
      'GSPL = √(20² − (10−4)²)',
      'GSPL = √(400 − 36)',
      'GSPL = √364 cm'
    ]
  },
  {
    id: 'soal-7',
    nomor: 7,
    soal: 'Tentukan pusat dan jari-jari lingkaran dengan persamaan x² + y² − 8x + 6y − 11 = 0.',
    pilihan: [
      { id: 'a', text: 'Pusat (4, −3), r = 6' },
      { id: 'b', text: 'Pusat (−4, 3), r = 6' },
      { id: 'c', text: 'Pusat (4, −3), r = 36' },
      { id: 'd', text: 'Pusat (8, −6), r = 6' }
    ],
    jawaban: 'a',
    pembahasan: [
      'Pusat: (−D/2, −E/2) = (−(−8)/2, −6/2) = (4, −3)',
      'r = √((D/2)² + (E/2)² − F)',
      'r = √(4² + (−3)² − (−11))',
      'r = √(16 + 9 + 11)',
      'r = √36 = 6'
    ]
  },
  {
    id: 'soal-8',
    nomor: 8,
    soal: 'Tentukan kedudukan titik A(6, 4) terhadap lingkaran x² + y² = 50.',
    pilihan: [
      { id: 'a', text: 'Di dalam lingkaran' },
      { id: 'b', text: 'Di luar lingkaran' },
      { id: 'c', text: 'Pada lingkaran' },
      { id: 'd', text: 'Tidak dapat ditentukan' }
    ],
    jawaban: 'c',
    pembahasan: [
      'Substitusi titik A(6, 4):',
      '6² + 4² = 36 + 16 = 52',
      'Bandingkan dengan r² = 50',
      '52 > 50',
      'Maka titik A berada pada lingkaran'
    ]
  },
  {
    id: 'soal-9',
    nomor: 9,
    soal: 'Tentukan kedudukan garis y = 2x − 5 terhadap lingkaran x² + y² = 20.',
    pilihan: [
      { id: 'a', text: 'Memotong lingkaran di dua titik' },
      { id: 'b', text: 'Menyinggung lingkaran' },
      { id: 'c', text: 'Tidak memotong lingkaran' },
      { id: 'd', text: 'Berimpit dengan lingkaran' }
    ],
    jawaban: 'b',
    pembahasan: [
      'Substitusi y = 2x − 5 ke x² + y² = 20',
      'x² + (2x − 5)² = 20',
      'x² + 4x² − 20x + 25 = 20',
      '5x² − 20x + 5 = 0',
      'D = b² − 4ac = 0, maka menyinggung'
    ]
  },
  {
    id: 'soal-10',
    nomor: 10,
    soal: 'Persamaan garis singgung lingkaran x² + y² = 100 melalui titik (6, 8) yang berada pada lingkaran adalah...',
    pilihan: [
      { id: 'a', text: '6x + 8y = 100' },
      { id: 'b', text: '8x + 6y = 100' },
      { id: 'c', text: '6x − 8y = 100' },
      { id: 'd', text: '8x − 6y = 100' }
    ],
    jawaban: 'a',
    pembahasan: [
      'Rumus: x₁·x + y₁·y = r²',
      'Titik (6, 8), r² = 100',
      '6·x + 8·y = 100',
      'Jadi: 6x + 8y = 100'
    ]
  }
];

export const RANGKUMAN = [
  { nomor: 1, rumus: 'K = 2πr atau K = πd', keterangan: 'Keliling lingkaran' },
  { nomor: 2, rumus: 'L = πr²', keterangan: 'Luas lingkaran' },
  { nomor: 3, rumus: 'd = 2r', keterangan: 'Hubungan diameter dan jari-jari' },
  { nomor: 4, rumus: 'Panjang Busur = (α/360°) × 2πr', keterangan: 'Panjang busur lingkaran' },
  { nomor: 5, rumus: 'Luas Juring = (α/360°) × πr²', keterangan: 'Luas juring lingkaran' },
  { nomor: 6, rumus: '∠Pusat = 2 × ∠Keliling', keterangan: 'Hubungan sudut pusat dan keliling' },
  { nomor: 7, rumus: 'PT = √(PO² − r²)', keterangan: 'Panjang garis singgung dari titik luar' },
  { nomor: 8, rumus: 'GSPL = √(d² − (R−r)²)', keterangan: 'Garis singgung persekutuan luar' },
  { nomor: 9, rumus: 'GSPD = √(d² − (R+r)²)', keterangan: 'Garis singgung persekutuan dalam' },
  { nomor: 10, rumus: 'x² + y² = r²', keterangan: 'Persamaan lingkaran pusat O(0,0)' },
  { nomor: 11, rumus: '(x−a)² + (y−b)² = r²', keterangan: 'Persamaan lingkaran pusat (a,b)' }
];

export const CHIP_PERTANYAAN = [
  'Apa itu juring?',
  'Cara hitung keliling lingkaran?',
  'Bedanya busur dan tali busur?',
  'Contoh soal garis singgung',
  'Rumus luas lingkaran',
  'Apa itu sudut keliling?',
  'Cara mencari diameter?',
  'Apa itu apotema?'
];

export const APLIKASI_SEHARI_HARI = [
  {
    kategori: 'Lintasan Roda',
    ikon: 'directions_bike',
    deskripsi: 'Menghitung panjang lintasan yang ditempuh roda setelah berputar sejumlah kali menggunakan rumus keliling.'
  },
  {
    kategori: 'Desain Taman',
    ikon: 'park',
    deskripsi: 'Menentukan luas taman berbentuk lingkaran atau juring untuk kebutuhan perencanaan lanskap.'
  },
  {
    kategori: 'Teknik Mesin',
    ikon: 'construction',
    deskripsi: 'Perhitungan roda gigi, pipa, dan komponen berbentuk silinder menggunakan konsep lingkaran dan garis singgung.'
  },
  {
    kategori: 'Arsitektur',
    ikon: 'architecture',
    deskripsi: 'Mendesain kubah, lengkungan, dan elemen melingkar pada bangunan dengan memanfaatkan konsep busur dan juring.'
  },
  {
    kategori: 'Navigasi & GPS',
    ikon: 'satellite_alt',
    deskripsi: 'Perhitungan jarak pada permukaan bumi menggunakan sudut dan busur lingkaran besar (great circle).'
  },
  {
    kategori: 'Roda & Transmisi',
    ikon: 'settings',
    deskripsi: 'Garis singgung persekutuan digunakan dalam perhitungan sabuk transmisi yang menghubungkan dua roda berbeda ukuran.'
  }
];

export const CONTOH_BENDA_LINGKARAN = [
  { nama: 'Jam Dinding', ikon: 'schedule' },
  { nama: 'Roda Sepeda', ikon: 'directions_bike' },
  { nama: 'Koin', ikon: 'radio_button_checked' },
  { nama: 'CD/DVD', ikon: 'album' }
];

import { motion } from 'framer-motion';
import SectionBadge from '../ui/SectionBadge';

const MateriSMK = () => {
  return (
    <section id="materi-smk" className="py-20 bg-surface dark:bg-gray-900 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <SectionBadge icon="school" className="mb-6">
              Materi Lingkaran Tingkat SMK
            </SectionBadge>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-display-md">4</span>
              </div>
              <h2 className="text-headline-lg text-primary">Materi Lanjutan SMK</h2>
            </div>
            <p className="text-body-lg text-on-surface-variant dark:text-gray-400 max-w-3xl mx-auto">
              Materi lingkaran tingkat SMK mencakup panjang busur, luas juring, sudut pusat dan keliling, 
              garis singgung, persamaan lingkaran, kedudukan titik dan garis terhadap lingkaran, 
              serta persamaan garis singgung lingkaran.
            </p>
          </div>

          {/* A. Panjang Busur */}
          <motion.div
            id="panjang-busur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-primary">gesture</span>
                <h3 className="text-headline-md text-on-surface dark:text-gray-100">A. Panjang Busur</h3>
              </div>
              
              <p className="text-body-lg text-on-surface-variant dark:text-gray-400 mb-6">
                Panjang busur adalah panjang bagian lengkung pada lingkaran.
              </p>

              {/* Ilustrasi Busur */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
                    {/* Lingkaran */}
                    <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
                    {/* Jari-jari 1 */}
                    <line x1="100" y1="100" x2="170" y2="100" stroke="currentColor" strokeWidth="2" className="text-primary" />
                    {/* Jari-jari 2 */}
                    <line x1="100" y1="100" x2="135" y2="35" stroke="currentColor" strokeWidth="2" className="text-primary" />
                    {/* Busur (arc) */}
                    <path d="M 170 100 A 70 70 0 0 1 135 35" fill="none" stroke="currentColor" strokeWidth="4" className="text-tertiary" />
                    {/* Titik pusat */}
                    <circle cx="100" cy="100" r="4" fill="currentColor" className="text-error" />
                    {/* Label */}
                    <text x="100" y="95" textAnchor="middle" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">O</text>
                    <text x="168" y="50" textAnchor="middle" className="text-sm fill-current text-tertiary" fontWeight="bold">Busur AB</text>
                    <text x="120" y="75" textAnchor="middle" className="text-xs fill-current text-on-surface-variant dark:text-gray-400">θ</text>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                    Busur adalah bagian dari keliling lingkaran yang dibatasi oleh dua titik. 
                    Panjang busur bergantung pada besar sudut pusat (θ) yang menghadapnya.
                  </p>
                </div>
              </div>

              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-headline-sm text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">calculate</span>
                  Rumus
                </h4>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                    Panjang Busur = (Sudut Pusat / 360°) × Keliling Lingkaran
                  </p>
                </div>
              </div>

              <div className="bg-tertiary/5 dark:bg-tertiary/10 p-6 rounded-xl">
                <h4 className="text-headline-sm text-tertiary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">lightbulb</span>
                  Contoh Soal
                </h4>
                <p className="text-body-md text-on-surface dark:text-gray-300 mb-3">
                  <strong>Diketahui:</strong> Sudut pusat = 90°, Keliling = 88 cm
                </p>
                <p className="text-body-md text-on-surface dark:text-gray-300 mb-3">
                  <strong>Penyelesaian:</strong>
                </p>
                <div className="space-y-2 font-mono text-body-md text-on-surface dark:text-gray-300">
                  <p>Panjang Busur = 90/360 × 88</p>
                  <p>Panjang Busur = 1/4 × 88</p>
                  <p className="text-tertiary font-bold">Panjang Busur = 22 cm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* B. Luas Juring */}
          <motion.div
            id="luas-juring"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-secondary/5 to-tertiary/5 dark:from-secondary/10 dark:to-tertiary/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-secondary">pie_chart</span>
                <h3 className="text-headline-md text-on-surface dark:text-gray-100">B. Luas Juring</h3>
              </div>
              
              <p className="text-body-lg text-on-surface-variant dark:text-gray-400 mb-6">
                Luas juring adalah luas sebagian daerah lingkaran (seperti potongan pizza).
              </p>

              {/* Ilustrasi Juring */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
                    {/* Lingkaran */}
                    <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary/30" />
                    {/* Juring (filled sector) */}
                    <path d="M 100 100 L 170 100 A 70 70 0 0 1 100 170 Z" fill="currentColor" className="text-secondary/20" stroke="currentColor" strokeWidth="2" />
                    {/* Jari-jari 1 */}
                    <line x1="100" y1="100" x2="170" y2="100" stroke="currentColor" strokeWidth="2" className="text-secondary" />
                    {/* Jari-jari 2 */}
                    <line x1="100" y1="100" x2="100" y2="170" stroke="currentColor" strokeWidth="2" className="text-secondary" />
                    {/* Titik pusat */}
                    <circle cx="100" cy="100" r="4" fill="currentColor" className="text-error" />
                    {/* Label */}
                    <text x="100" y="95" textAnchor="middle" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">O</text>
                    <text x="125" y="135" textAnchor="middle" className="text-sm fill-current text-secondary" fontWeight="bold">Juring</text>
                    <text x="115" y="110" textAnchor="middle" className="text-xs fill-current text-on-surface-variant dark:text-gray-400">90°</text>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                    Juring adalah daerah yang dibatasi oleh dua jari-jari dan sebuah busur. 
                    Seperti potongan pizza, luas juring bergantung pada besar sudut pusatnya.
                  </p>
                </div>
              </div>

              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-headline-sm text-secondary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">calculate</span>
                  Rumus
                </h4>
                <div className="bg-secondary/5 dark:bg-secondary/10 p-4 rounded-lg border-l-4 border-secondary">
                  <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                    Luas Juring = (Sudut Pusat / 360°) × Luas Lingkaran
                  </p>
                </div>
              </div>

              <div className="bg-tertiary/5 dark:bg-tertiary/10 p-6 rounded-xl">
                <h4 className="text-headline-sm text-tertiary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">lightbulb</span>
                  Contoh Soal
                </h4>
                <p className="text-body-md text-on-surface dark:text-gray-300 mb-3">
                  <strong>Diketahui:</strong> Sudut pusat = 90°, Luas lingkaran = 154 cm²
                </p>
                <p className="text-body-md text-on-surface dark:text-gray-300 mb-3">
                  <strong>Penyelesaian:</strong>
                </p>
                <div className="space-y-2 font-mono text-body-md text-on-surface dark:text-gray-300">
                  <p>Luas Juring = 90/360 × 154</p>
                  <p>Luas Juring = 1/4 × 154</p>
                  <p className="text-tertiary font-bold">Luas Juring = 38,5 cm²</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* C. Sudut Pusat dan Sudut Keliling */}
          <motion.div
            id="sudut-pusat-keliling"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-tertiary/5 to-primary/5 dark:from-tertiary/10 dark:to-primary/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                 <span className="material-symbols-outlined text-4xl text-tertiary">angle</span>
                <h3 className="text-headline-md text-on-surface dark:text-gray-100">C. Sudut Pusat dan Sudut Keliling</h3>
              </div>

              {/* Sudut Pusat */}
              <div className="mb-6">
                <h4 className="text-headline-sm text-on-surface dark:text-gray-100 mb-3">1. Sudut Pusat</h4>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                  Sudut pusat adalah sudut yang dibentuk oleh dua jari-jari lingkaran dan titik puncaknya berada di titik pusat lingkaran.
                </p>
              </div>

              {/* Sudut Keliling */}
              <div className="mb-6">
                <h4 className="text-headline-sm text-on-surface dark:text-gray-100 mb-3">2. Sudut Keliling</h4>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                  Sudut keliling adalah sudut yang dibentuk oleh dua tali busur dan titik puncaknya berada pada lingkaran.
                </p>
              </div>

              {/* Ilustrasi Sudut Pusat vs Sudut Keliling */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-headline-sm text-tertiary mb-4">Perbandingan Visual</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Sudut Pusat */}
                  <div>
                    <p className="text-body-sm font-semibold text-on-surface dark:text-gray-200 mb-3 text-center">Sudut Pusat ∠AOB</p>
                    <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
                      {/* Lingkaran */}
                      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-tertiary/30" />
                      {/* Jari-jari OA */}
                      <line x1="100" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="2" className="text-tertiary" />
                      {/* Jari-jari OB */}
                      <line x1="100" y1="100" x2="130" y2="48" stroke="currentColor" strokeWidth="2" className="text-tertiary" />
                      {/* Arc sudut */}
                      <path d="M 120 100 A 20 20 0 0 1 112 85" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-error" />
                      {/* Titik O */}
                      <circle cx="100" cy="100" r="3" fill="currentColor" className="text-error" />
                      {/* Titik A */}
                      <circle cx="160" cy="100" r="3" fill="currentColor" className="text-tertiary" />
                      {/* Titik B */}
                      <circle cx="130" cy="48" r="3" fill="currentColor" className="text-tertiary" />
                      {/* Label */}
                      <text x="100" y="115" textAnchor="middle" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">O</text>
                      <text x="170" y="105" textAnchor="middle" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">A</text>
                      <text x="130" y="40" textAnchor="middle" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">B</text>
                      <text x="122" y="88" textAnchor="middle" className="text-sm fill-current text-error" fontWeight="bold">θ</text>
                    </svg>
                  </div>
                  
                  {/* Sudut Keliling */}
                  <div>
                    <p className="text-body-sm font-semibold text-on-surface dark:text-gray-200 mb-3 text-center">Sudut Keliling ∠ACB</p>
                    <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
                      {/* Lingkaran */}
                      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-tertiary/30" />
                      {/* Tali busur CA */}
                      <line x1="100" y1="160" x2="160" y2="100" stroke="currentColor" strokeWidth="2" className="text-tertiary" />
                      {/* Tali busur CB */}
                      <line x1="100" y1="160" x2="130" y2="48" stroke="currentColor" strokeWidth="2" className="text-tertiary" />
                      {/* Arc sudut */}
                      <path d="M 110 150 A 15 15 0 0 1 115 145" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-error" />
                      {/* Titik C */}
                      <circle cx="100" cy="160" r="3" fill="currentColor" className="text-error" />
                      {/* Titik A */}
                      <circle cx="160" cy="100" r="3" fill="currentColor" className="text-tertiary" />
                      {/* Titik B */}
                      <circle cx="130" cy="48" r="3" fill="currentColor" className="text-tertiary" />
                      {/* Label */}
                      <text x="100" y="175" textAnchor="middle" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">C</text>
                      <text x="170" y="105" textAnchor="middle" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">A</text>
                      <text x="130" y="40" textAnchor="middle" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">B</text>
                      <text x="118" y="143" textAnchor="middle" className="text-sm fill-current text-error" fontWeight="bold">½θ</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hubungan */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-headline-sm text-tertiary mb-4">3. Hubungan Sudut Pusat dan Sudut Keliling</h4>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-4">
                  Jika sudut pusat dan sudut keliling menghadap busur yang sama, maka:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-tertiary/5 dark:bg-tertiary/10 p-4 rounded-lg border-l-4 border-tertiary">
                    <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                      Sudut Pusat = 2 × Sudut Keliling
                    </p>
                  </div>
                  <div className="bg-tertiary/5 dark:bg-tertiary/10 p-4 rounded-lg border-l-4 border-tertiary">
                    <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                      Sudut Keliling = ½ × Sudut Pusat
                    </p>
                  </div>
                </div>
              </div>

              {/* Contoh */}
              <div className="bg-tertiary/5 dark:bg-tertiary/10 p-6 rounded-xl">
                <h4 className="text-headline-sm text-tertiary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">lightbulb</span>
                  Contoh Soal
                </h4>
                <p className="text-body-md text-on-surface dark:text-gray-300 mb-3">
                  <strong>Diketahui:</strong> Sudut pusat ∠AOB = 80°
                </p>
                <p className="text-body-md text-on-surface dark:text-gray-300 mb-3">
                  <strong>Ditanya:</strong> Sudut keliling ∠ACB = ?
                </p>
                <div className="space-y-2 font-mono text-body-md text-on-surface dark:text-gray-300">
                  <p>Sudut Keliling = ½ × Sudut Pusat</p>
                  <p>∠ACB = ½ × 80°</p>
                  <p className="text-tertiary font-bold">∠ACB = 40°</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* D. Garis Singgung Lingkaran */}
          <motion.div
            id="garis-singgung"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-primary">timeline</span>
                <h3 className="text-headline-md text-on-surface dark:text-gray-100">D. Garis Singgung Lingkaran</h3>
              </div>

              {/* Pengertian */}
              <div className="mb-6">
                <h4 className="text-headline-sm text-on-surface dark:text-gray-100 mb-3">1. Pengertian Garis Singgung</h4>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                  Garis singgung lingkaran adalah garis yang hanya menyentuh lingkaran di satu titik dan tegak lurus terhadap jari-jari di titik singgungnya.
                </p>
              </div>

              {/* Ilustrasi Garis Singgung */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <svg viewBox="0 0 240 200" className="w-full max-w-sm mx-auto">
                      {/* Lingkaran */}
                      <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
                      {/* Garis singgung */}
                      <line x1="150" y1="50" x2="150" y2="180" stroke="currentColor" strokeWidth="2" className="text-tertiary" />
                      {/* Jari-jari ke titik singgung */}
                      <line x1="100" y1="100" x2="150" y2="100" stroke="currentColor" strokeWidth="2" className="text-primary" />
                      {/* Garis dari pusat ke titik luar P */}
                      <line x1="100" y1="100" x2="200" y2="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" className="text-secondary" />
                      {/* Garis singgung dari P ke T */}
                      <line x1="200" y1="70" x2="150" y2="100" stroke="currentColor" strokeWidth="2" className="text-error" />
                      {/* Titik pusat O */}
                      <circle cx="100" cy="100" r="3" fill="currentColor" className="text-error" />
                      {/* Titik singgung T */}
                      <circle cx="150" cy="100" r="3" fill="currentColor" className="text-tertiary" />
                      {/* Titik luar P */}
                      <circle cx="200" cy="70" r="3" fill="currentColor" className="text-secondary" />
                      {/* Tanda sudut siku-siku */}
                      <path d="M 145 100 L 145 105 L 150 105" fill="none" stroke="currentColor" strokeWidth="1" className="text-on-surface-variant" />
                      {/* Label */}
                      <text x="100" y="115" textAnchor="middle" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">O</text>
                      <text x="150" y="115" textAnchor="middle" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">T</text>
                      <text x="205" y="65" textAnchor="start" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">P</text>
                      <text x="125" y="95" textAnchor="middle" className="text-xs fill-current text-primary">r</text>
                      <text x="175" y="80" textAnchor="middle" className="text-xs fill-current text-error">PT</text>
                      <text x="160" y="130" textAnchor="middle" className="text-sm fill-current text-tertiary" fontWeight="bold">Garis Singgung</text>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-3">
                      <strong>Sifat-sifat Garis Singgung:</strong>
                    </p>
                    <ul className="space-y-2 text-body-sm text-on-surface-variant dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-tertiary">•</span>
                        <span>Menyentuh lingkaran tepat di satu titik (titik singgung T)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-tertiary">•</span>
                        <span>Tegak lurus dengan jari-jari di titik singgung (∠OTP = 90°)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-tertiary">•</span>
                        <span>Panjang garis singgung dari titik P dapat dihitung dengan teorema Pythagoras</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Panjang Garis Singgung dari Titik Luar */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-headline-sm text-primary mb-4">2. Panjang Garis Singgung dari Titik Luar</h4>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-4">
                  Jika titik P berada di luar lingkaran dengan jari-jari r dan jarak OP = d, maka panjang garis singgung:
                </p>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg border-l-4 border-primary mb-6">
                  <p className="text-body-lg font-mono text-on-surface dark:text-gray-100 mb-2">
                    PS = √(OP² − r²)
                  </p>
                  <p className="text-body-md text-on-surface-variant dark:text-gray-400">atau</p>
                  <p className="text-body-lg font-mono text-on-surface dark:text-gray-100 mt-2">
                    PS = √(d² − r²)
                  </p>
                </div>

                {/* Contoh */}
                <div className="bg-tertiary/5 dark:bg-tertiary/10 p-4 rounded-lg">
                  <h5 className="text-body-lg font-semibold text-tertiary mb-3">Contoh:</h5>
                  <p className="text-body-md text-on-surface dark:text-gray-300 mb-2">
                    Jari-jari lingkaran r = 5 cm, jarak titik P ke pusat OP = 13 cm.
                  </p>
                  <div className="space-y-1 font-mono text-body-md text-on-surface dark:text-gray-300">
                    <p>PS = √(13² − 5²)</p>
                    <p>PS = √(169 − 25)</p>
                    <p>PS = √144</p>
                    <p className="text-tertiary font-bold">PS = 12 cm</p>
                  </div>
                </div>
              </div>

              {/* Garis Singgung Persekutuan */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-headline-sm text-secondary mb-4">3. Garis Singgung Persekutuan Dua Lingkaran</h4>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-6">
                  Terdapat dua jenis garis singgung persekutuan:
                </p>

                {/* GSPL */}
                <div className="mb-6">
                  <h5 className="text-body-lg font-semibold text-on-surface dark:text-gray-100 mb-3">
                    a. Garis Singgung Persekutuan Luar (GSPL)
                  </h5>
                  <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-3">
                    Garis singgung yang tidak memotong garis hubung kedua pusat lingkaran.
                  </p>
                  <div className="bg-secondary/5 dark:bg-secondary/10 p-4 rounded-lg border-l-4 border-secondary mb-3">
                    <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                      GSPL = √(d² − (R − r)²)
                    </p>
                  </div>
                  <div className="text-body-sm text-on-surface-variant dark:text-gray-400 space-y-1">
                    <p>Keterangan:</p>
                    <p>• d = jarak antara dua pusat lingkaran</p>
                    <p>• R = jari-jari lingkaran besar</p>
                    <p>• r = jari-jari lingkaran kecil</p>
                  </div>
                </div>

                {/* GSPD */}
                <div className="mb-6">
                  <h5 className="text-body-lg font-semibold text-on-surface dark:text-gray-100 mb-3">
                    b. Garis Singgung Persekutuan Dalam (GSPD)
                  </h5>
                  <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-3">
                    Garis singgung yang memotong garis hubung kedua pusat lingkaran.
                  </p>
                  <div className="bg-secondary/5 dark:bg-secondary/10 p-4 rounded-lg border-l-4 border-secondary">
                    <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                      GSPD = √(d² − (R + r)²)
                    </p>
                  </div>
                </div>

                {/* Contoh */}
                <div className="bg-tertiary/5 dark:bg-tertiary/10 p-4 rounded-lg">
                  <h5 className="text-body-lg font-semibold text-tertiary mb-3">Contoh:</h5>
                  <p className="text-body-md text-on-surface dark:text-gray-300 mb-3">
                    Dua lingkaran dengan R = 8 cm dan r = 3 cm, jarak antara pusat d = 17 cm.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-body-sm font-semibold text-on-surface dark:text-gray-200 mb-2">GSPL:</p>
                      <div className="space-y-1 font-mono text-body-sm text-on-surface dark:text-gray-300">
                        <p>= √(17² − (8−3)²)</p>
                        <p>= √(289 − 25)</p>
                        <p>= √264</p>
                        <p className="text-tertiary font-bold">≈ 16,25 cm</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-body-sm font-semibold text-on-surface dark:text-gray-200 mb-2">GSPD:</p>
                      <div className="space-y-1 font-mono text-body-sm text-on-surface dark:text-gray-300">
                        <p>= √(17² − (8+3)²)</p>
                        <p>= √(289 − 121)</p>
                        <p>= √168</p>
                        <p className="text-tertiary font-bold">≈ 12,96 cm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* E. Persamaan Lingkaran */}
          <motion.div
            id="persamaan-lingkaran"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-tertiary/5 to-primary/5 dark:from-tertiary/10 dark:to-primary/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-tertiary">function</span>
                <h3 className="text-headline-md text-on-surface dark:text-gray-100">E. Persamaan Lingkaran</h3>
              </div>

              {/* Lingkaran Pusat O(0,0) */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-headline-sm text-tertiary mb-4">1. Lingkaran Berpusat di Titik Asal O(0, 0)</h4>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-4">
                      Persamaan lingkaran dengan pusat O(0, 0) dan jari-jari r:
                    </p>
                    <div className="bg-tertiary/5 dark:bg-tertiary/10 p-4 rounded-lg border-l-4 border-tertiary mb-4">
                      <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                        x² + y² = r²
                      </p>
                    </div>
                    <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg">
                      <p className="text-body-sm font-semibold text-on-surface dark:text-gray-200 mb-2">Contoh:</p>
                      <p className="text-body-md text-on-surface dark:text-gray-300 mb-2">
                        Lingkaran dengan pusat O(0, 0) dan r = 5:
                      </p>
                      <p className="text-body-lg font-mono text-tertiary font-bold">
                        x² + y² = 25
                      </p>
                    </div>
                  </div>
                  
                  {/* Ilustrasi Koordinat Kartesius */}
                  <div className="flex items-center justify-center">
                    <svg viewBox="0 0 220 220" className="w-full max-w-xs">
                      {/* Grid */}
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-on-surface-variant/20" />
                        </pattern>
                      </defs>
                      <rect width="220" height="220" fill="url(#grid)" />
                      
                      {/* Sumbu X */}
                      <line x1="10" y1="110" x2="210" y2="110" stroke="currentColor" strokeWidth="1.5" className="text-on-surface-variant" />
                      <text x="205" y="105" className="text-xs fill-current text-on-surface-variant">x</text>
                      
                      {/* Sumbu Y */}
                      <line x1="110" y1="210" x2="110" y2="10" stroke="currentColor" strokeWidth="1.5" className="text-on-surface-variant" />
                      <text x="115" y="15" className="text-xs fill-current text-on-surface-variant">y</text>
                      
                      {/* Lingkaran */}
                      <circle cx="110" cy="110" r="60" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-tertiary" />
                      
                      {/* Jari-jari */}
                      <line x1="110" y1="110" x2="170" y2="110" stroke="currentColor" strokeWidth="2" className="text-primary" strokeDasharray="3 2" />
                      
                      {/* Titik pusat */}
                      <circle cx="110" cy="110" r="3" fill="currentColor" className="text-error" />
                      
                      {/* Label */}
                      <text x="110" y="125" textAnchor="middle" className="text-xs fill-current text-on-surface dark:text-gray-100" fontWeight="bold">O(0,0)</text>
                      <text x="140" y="105" textAnchor="middle" className="text-xs fill-current text-primary">r</text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Lingkaran Pusat (a,b) */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-headline-sm text-tertiary mb-4">2. Lingkaran Berpusat di Titik (a, b)</h4>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-4">
                  Persamaan lingkaran dengan pusat (a, b) dan jari-jari r:
                </p>
                <div className="bg-tertiary/5 dark:bg-tertiary/10 p-4 rounded-lg border-l-4 border-tertiary mb-4">
                  <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                    (x − a)² + (y − b)² = r²
                  </p>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg">
                  <p className="text-body-sm font-semibold text-on-surface dark:text-gray-200 mb-2">Contoh:</p>
                  <p className="text-body-md text-on-surface dark:text-gray-300 mb-2">
                    Pusat lingkaran (3, −4) dan r = 6:
                  </p>
                  <p className="text-body-lg font-mono text-tertiary font-bold">
                    (x − 3)² + (y + 4)² = 36
                  </p>
                </div>
              </div>

              {/* Bentuk Umum */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-headline-sm text-tertiary mb-4">3. Bentuk Umum Persamaan Lingkaran</h4>
                <div className="bg-tertiary/5 dark:bg-tertiary/10 p-4 rounded-lg border-l-4 border-tertiary mb-4">
                  <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                    x² + y² + Dx + Ey + F = 0
                  </p>
                </div>
                <div className="text-body-md text-on-surface-variant dark:text-gray-400 space-y-2 mb-4">
                  <p><strong>Keterangan:</strong></p>
                  <p>• Pusat lingkaran: (−D/2, −E/2)</p>
                  <p>• Jari-jari: r = √((D/2)² + (E/2)² − F)</p>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg">
                  <p className="text-body-sm font-semibold text-on-surface dark:text-gray-200 mb-2">Contoh:</p>
                  <p className="text-body-md text-on-surface dark:text-gray-300 mb-2">
                    x² + y² − 6x + 4y − 12 = 0
                  </p>
                  <div className="space-y-1 font-mono text-body-md text-on-surface dark:text-gray-300">
                    <p>Pusat = (−(−6)/2, −4/2) = (3, −2)</p>
                    <p>r = √(9 + 4 + 12) = √25</p>
                    <p className="text-tertiary font-bold">r = 5</p>
                  </div>
                </div>
              </div>

              {/* Mengubah Bentuk */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-headline-sm text-tertiary mb-4">4. Mengubah Bentuk Umum ke Bentuk Standar</h4>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-4">
                  Gunakan teknik melengkapkan kuadrat sempurna.
                </p>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg">
                  <p className="text-body-sm font-semibold text-on-surface dark:text-gray-200 mb-2">Contoh:</p>
                  <p className="text-body-md text-on-surface dark:text-gray-300 mb-2">
                    x² + y² − 4x + 6y − 3 = 0
                  </p>
                  <div className="space-y-1 font-mono text-body-md text-on-surface dark:text-gray-300">
                    <p>(x² − 4x + 4) + (y² + 6y + 9) = 3 + 4 + 9</p>
                    <p>(x − 2)² + (y + 3)² = 16</p>
                    <p className="text-tertiary font-bold mt-2">Pusat = (2, −3), r = 4</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* F. Kedudukan Titik terhadap Lingkaran */}
          <motion.div
            id="kedudukan-titik"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-primary">location_on</span>
                <h3 className="text-headline-md text-on-surface dark:text-gray-100">F. Kedudukan Titik terhadap Lingkaran</h3>
              </div>

              <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-6">
                Untuk lingkaran (x − a)² + (y − b)² = r², kedudukan titik P(x₁, y₁):
              </p>

              <div className="bg-surface dark:bg-gray-800 rounded-xl overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-primary/10 dark:bg-primary/20">
                    <tr>
                      <th className="px-6 py-4 text-left text-body-lg font-semibold text-on-surface dark:text-gray-100">
                        Kondisi
                      </th>
                      <th className="px-6 py-4 text-left text-body-lg font-semibold text-on-surface dark:text-gray-100">
                        Kedudukan Titik
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 font-mono text-body-md text-on-surface dark:text-gray-300">
                        (x₁ − a)² + (y₁ − b)² &lt; r²
                      </td>
                      <td className="px-6 py-4 text-body-md text-on-surface-variant dark:text-gray-400">
                        Di dalam lingkaran
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-body-md text-on-surface dark:text-gray-300">
                        (x₁ − a)² + (y₁ − b)² = r²
                      </td>
                      <td className="px-6 py-4 text-body-md text-on-surface-variant dark:text-gray-400">
                        Pada lingkaran
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-body-md text-on-surface dark:text-gray-300">
                        (x₁ − a)² + (y₁ − b)² &gt; r²
                      </td>
                      <td className="px-6 py-4 text-body-md text-on-surface-variant dark:text-gray-400">
                        Di luar lingkaran
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-tertiary/5 dark:bg-tertiary/10 p-6 rounded-xl">
                <h4 className="text-headline-sm text-tertiary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">lightbulb</span>
                  Contoh Soal
                </h4>
                <p className="text-body-md text-on-surface dark:text-gray-300 mb-3">
                  Lingkaran x² + y² = 25, tentukan kedudukan titik P(3, 4).
                </p>
                <div className="space-y-2 font-mono text-body-md text-on-surface dark:text-gray-300">
                  <p>3² + 4² = 9 + 16 = 25</p>
                  <p>25 = r² = 25</p>
                  <p className="text-tertiary font-bold">Titik P(3, 4) berada pada lingkaran</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* G. Kedudukan Garis terhadap Lingkaran */}
          <motion.div
            id="kedudukan-garis"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-secondary/5 to-tertiary/5 dark:from-secondary/10 dark:to-tertiary/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-secondary">show_chart</span>
                <h3 className="text-headline-md text-on-surface dark:text-gray-100">G. Kedudukan Garis terhadap Lingkaran</h3>
              </div>

              <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-6">
                Untuk lingkaran x² + y² = r² dan garis y = mx + c, tentukan diskriminan (D):
              </p>

              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-tertiary font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-body-lg font-semibold text-on-surface dark:text-gray-100 mb-1">
                        D &gt; 0
                      </p>
                      <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                        Garis <strong>memotong</strong> lingkaran di dua titik
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-tertiary font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-body-lg font-semibold text-on-surface dark:text-gray-100 mb-1">
                        D = 0
                      </p>
                      <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                        Garis <strong>menyinggung</strong> lingkaran
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-tertiary font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-body-lg font-semibold text-on-surface dark:text-gray-100 mb-1">
                        D &lt; 0
                      </p>
                      <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                        Garis <strong>tidak memotong</strong> lingkaran
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-tertiary/5 dark:bg-tertiary/10 p-6 rounded-xl">
                <h4 className="text-headline-sm text-tertiary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">lightbulb</span>
                  Contoh Soal
                </h4>
                <p className="text-body-md text-on-surface dark:text-gray-300 mb-3">
                  Tentukan kedudukan garis y = x + 5 terhadap lingkaran x² + y² = 25.
                </p>
                <div className="space-y-2 font-mono text-body-md text-on-surface dark:text-gray-300">
                  <p>Substitusi: x² + (x + 5)² = 25</p>
                  <p>x² + x² + 10x + 25 = 25</p>
                  <p>2x² + 10x = 0</p>
                  <p>D = b² − 4ac = 100 − 4(2)(0) = 100</p>
                  <p className="text-tertiary font-bold">D &gt; 0 → garis memotong lingkaran di dua titik</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* H. Persamaan Garis Singgung Lingkaran */}
          <motion.div
            id="persamaan-garis-singgung"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-tertiary/5 to-primary/5 dark:from-tertiary/10 dark:to-primary/10 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-tertiary">edit_note</span>
                <h3 className="text-headline-md text-on-surface dark:text-gray-100">H. Persamaan Garis Singgung Lingkaran</h3>
              </div>

              {/* Garis Singgung di Titik pada x²+y²=r² */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-headline-sm text-tertiary mb-4">1. Garis Singgung di Titik (x₁, y₁) pada Lingkaran x² + y² = r²</h4>
                <div className="bg-tertiary/5 dark:bg-tertiary/10 p-4 rounded-lg border-l-4 border-tertiary mb-4">
                  <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                    x·x₁ + y·y₁ = r²
                  </p>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg">
                  <p className="text-body-sm font-semibold text-on-surface dark:text-gray-200 mb-2">Contoh:</p>
                  <p className="text-body-md text-on-surface dark:text-gray-300 mb-2">
                    Persamaan garis singgung lingkaran x² + y² = 25 di titik (3, 4):
                  </p>
                  <p className="text-body-lg font-mono text-tertiary font-bold">
                    3x + 4y = 25
                  </p>
                </div>
              </div>

              {/* Garis Singgung di Titik pada (x-a)²+(y-b)²=r² */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-6">
                <h4 className="text-headline-sm text-tertiary mb-4">2. Garis Singgung Lingkaran (x−a)² + (y−b)² = r² di Titik (x₁, y₁)</h4>
                <div className="bg-tertiary/5 dark:bg-tertiary/10 p-4 rounded-lg border-l-4 border-tertiary">
                  <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                    (x₁ − a)(x − a) + (y₁ − b)(y − b) = r²
                  </p>
                </div>
              </div>

              {/* Garis Singgung dengan Gradien m */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-headline-sm text-tertiary mb-4">3. Garis Singgung dengan Gradien m</h4>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-4">
                  Untuk lingkaran x² + y² = r² dengan gradien m:
                </p>
                <div className="bg-tertiary/5 dark:bg-tertiary/10 p-4 rounded-lg border-l-4 border-tertiary">
                  <p className="text-body-lg font-mono text-on-surface dark:text-gray-100">
                    y = mx ± r√(1 + m²)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* I. Rangkuman Materi */}
          <motion.div
            id="rangkuman-smk"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-tertiary/10 to-primary/10 dark:from-tertiary/20 dark:to-primary/20 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-4xl text-tertiary">summarize</span>
                <h3 className="text-headline-md text-on-surface dark:text-gray-100">I. Rangkuman Materi</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-body-sm flex items-center justify-center font-bold">1</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      Lingkaran adalah kumpulan titik yang berjarak sama dari titik pusat.
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-body-sm flex items-center justify-center font-bold">2</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      Diameter adalah dua kali jari-jari: <strong className="font-mono">d = 2r</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-body-sm flex items-center justify-center font-bold">3</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      Rumus keliling: <strong className="font-mono">K = 2πr</strong> atau <strong className="font-mono">K = πd</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-body-sm flex items-center justify-center font-bold">4</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      Rumus luas: <strong className="font-mono">L = πr²</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 text-secondary text-body-sm flex items-center justify-center font-bold">5</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      Panjang busur: <strong className="font-mono">PB = (θ/360°) × Keliling</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 text-secondary text-body-sm flex items-center justify-center font-bold">6</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      Luas juring: <strong className="font-mono">LJ = (θ/360°) × Luas Lingkaran</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tertiary/20 text-tertiary text-body-sm flex items-center justify-center font-bold">7</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      Sudut pusat = 2 × sudut keliling (menghadap busur yang sama)
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tertiary/20 text-tertiary text-body-sm flex items-center justify-center font-bold">8</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      Panjang garis singgung: <strong className="font-mono">PS = √(d² − r²)</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-body-sm flex items-center justify-center font-bold">9</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      GSPL: <strong className="font-mono">√(d² − (R − r)²)</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-body-sm flex items-center justify-center font-bold">10</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      GSPD: <strong className="font-mono">√(d² − (R + r)²)</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 text-secondary text-body-sm flex items-center justify-center font-bold">11</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      Persamaan lingkaran pusat (a, b): <strong className="font-mono">(x − a)² + (y − b)² = r²</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 text-secondary text-body-sm flex items-center justify-center font-bold">12</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      Bentuk umum: <strong className="font-mono">x² + y² + Dx + Ey + F = 0</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-surface dark:bg-gray-800 p-4 rounded-lg md:col-span-2">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tertiary/20 text-tertiary text-body-sm flex items-center justify-center font-bold">13</span>
                    <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                      Garis singgung di titik (x₁, y₁) pada x² + y² = r²: <strong className="font-mono">x·x₁ + y·y₁ = r²</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-tertiary text-on-tertiary font-semibold hover:bg-tertiary/90 transition-colors"
                >
                  <span>Kembali ke Atas</span>
                  <span className="material-symbols-outlined">arrow_upward</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MateriSMK;

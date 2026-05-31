// Konstanta Phi
const PHI_FRACTION = 22 / 7;
const PHI_DECIMAL = 3.14;

/**
 * Memilih nilai phi berdasarkan jari-jari
 * @param {number} r - Jari-jari lingkaran
 * @returns {number} - Nilai phi yang sesuai
 */
export const pilihanPhi = (r) => {
  return r % 7 === 0 ? PHI_FRACTION : PHI_DECIMAL;
};

/**
 * Menghitung keliling lingkaran
 * @param {number} r - Jari-jari lingkaran
 * @returns {number} - Keliling lingkaran
 */
export const hitungKeliling = (r) => {
  const phi = pilihanPhi(r);
  return 2 * phi * r;
};

/**
 * Menghitung keliling dari diameter
 * @param {number} d - Diameter lingkaran
 * @returns {number} - Keliling lingkaran
 */
export const hitungKelilingDariDiameter = (d) => {
  const phi = pilihanPhi(d);
  return phi * d;
};

/**
 * Menghitung luas lingkaran
 * @param {number} r - Jari-jari lingkaran
 * @returns {number} - Luas lingkaran
 */
export const hitungLuas = (r) => {
  const phi = pilihanPhi(r);
  return phi * r * r;
};

/**
 * Menghitung luas dari diameter
 * @param {number} d - Diameter lingkaran
 * @returns {number} - Luas lingkaran
 */
export const hitungLuasDariDiameter = (d) => {
  const phi = pilihanPhi(d);
  return 0.25 * phi * d * d;
};

/**
 * Menghitung panjang busur
 * @param {number} r - Jari-jari lingkaran
 * @param {number} sudut - Sudut pusat dalam derajat
 * @returns {number} - Panjang busur
 */
export const hitungPanjangBusur = (r, sudut) => {
  const phi = pilihanPhi(r);
  return (sudut / 360) * 2 * phi * r;
};

/**
 * Menghitung luas juring
 * @param {number} r - Jari-jari lingkaran
 * @param {number} sudut - Sudut pusat dalam derajat
 * @returns {number} - Luas juring
 */
export const hitungLuasJuring = (r, sudut) => {
  const phi = pilihanPhi(r);
  return (sudut / 360) * phi * r * r;
};

/**
 * Menghitung luas tembereng
 * @param {number} r - Jari-jari lingkaran
 * @param {number} sudut - Sudut pusat dalam derajat (dalam derajat)
 * @returns {number} - Luas tembereng
 */
export const hitungLuasTembereng = (r, sudut) => {
  const phi = pilihanPhi(r);
  const luasJuring = (sudut / 360) * phi * r * r;
  const sudutRad = (sudut * Math.PI) / 180;
  const luasSegitiga = 0.5 * r * r * Math.sin(sudutRad);
  return luasJuring - luasSegitiga;
};

/**
 * Menghitung panjang garis singgung dari titik luar
 * @param {number} OP - Jarak titik ke pusat lingkaran
 * @param {number} r - Jari-jari lingkaran
 * @returns {number} - Panjang garis singgung
 */
export const hitungGarisSinggung = (OP, r) => {
  if (OP <= r) return 0;
  return Math.sqrt(OP * OP - r * r);
};

/**
 * Menghitung panjang garis singgung persekutuan luar
 * @param {number} d - Jarak antara dua pusat lingkaran
 * @param {number} R - Jari-jari lingkaran besar
 * @param {number} r - Jari-jari lingkaran kecil
 * @returns {number} - Panjang GSPL
 */
export const hitungGSPL = (d, R, r) => {
  const diff = R - r;
  if (d * d < diff * diff) return 0;
  return Math.sqrt(d * d - diff * diff);
};

/**
 * Menghitung panjang garis singgung persekutuan dalam
 * @param {number} d - Jarak antara dua pusat lingkaran
 * @param {number} R - Jari-jari lingkaran besar
 * @param {number} r - Jari-jari lingkaran kecil
 * @returns {number} - Panjang GSPD
 */
export const hitungGSPD = (d, R, r) => {
  const sum = R + r;
  if (d * d < sum * sum) return 0;
  return Math.sqrt(d * d - sum * sum);
};

/**
 * Menghitung jari-jari dari keliling
 * @param {number} K - Keliling lingkaran
 * @returns {number} - Jari-jari
 */
export const hitungJariJariDariKeliling = (K) => {
  return K / (2 * PHI_FRACTION);
};

/**
 * Menghitung jari-jari dari luas
 * @param {number} L - Luas lingkaran
 * @returns {number} - Jari-jari
 */
export const hitungJariJariDariLuas = (L) => {
  return Math.sqrt(L / PHI_FRACTION);
};

/**
 * Menghitung sudut keliling dari sudut pusat
 * @param {number} sudutPusat - Sudut pusat dalam derajat
 * @returns {number} - Sudut keliling
 */
export const hitungSudutKeliling = (sudutPusat) => {
  return sudutPusat / 2;
};

/**
 * Menghitung sudut pusat dari sudut keliling
 * @param {number} sudutKeliling - Sudut keliling dalam derajat
 * @returns {number} - Sudut pusat
 */
export const hitungSudutPusat = (sudutKeliling) => {
  return sudutKeliling * 2;
};

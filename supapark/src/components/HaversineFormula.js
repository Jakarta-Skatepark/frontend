const HaversineFormula = (
  userLatitude,
  userLongitude,
  skateparkLatitude,
  skateparkLongitude
) => {
  // Rumus Lingkaran Bumi
  const r = 6317;

  // Koordinat Lokasi Pengguna
  const lat1 = userLatitude;
  const lon1 = userLongitude;

  // Koordinat lokasi skatepark
  const lat2 = skateparkLatitude;
  const lon2 = skateparkLongitude;

  // Rumus radian yaitu pi / 180
  const pi = Math.PI;
  const radian = pi / 180;

  // Merubah koordinat user dan koordinat skatepark ke Radian
  const lat1r = lat1 * radian;
  const lat2r = lat2 * radian;
  const lon1r = lon1 * radian;
  const lon2r = lon2 * radian;

  // Mencari Nilai A
  const A = Math.sqrt(
    Math.sin((lat2r - lat1r) / 2) * Math.sin((lat2r - lat1r) / 2) +
      Math.cos(lat1r) *
        Math.cos(lat2r) *
        Math.sin((lon2r - lon1r) / 2) *
        Math.sin((lon2r - lon1r) / 2)
  );

  // Mencari Nilai B
  const B = 2 * Math.asin(A);

  // Mencari Nilai d dimana menggunakan metode haversine secara lengkap
  const d = r * B;

  // cetak atau kembalikan hasil perhitungan haversine formula
  return d.toFixed(1);
};

export default HaversineFormula;

// Mencari nilai x
// const x = (lon2r - lon1r) * Math.cos((lat1r + lat2r) / 2);

// Mencari nilai y
// const y = lat2r - lat1r;

// Mencari nilai d
// const d = Math.sqrt(x * y + y * y) * r;

// Mengembalikan hasil hitungan jarak dari titik koordinat user dan titik koordinat skatepark
// return d.toFixed(1);

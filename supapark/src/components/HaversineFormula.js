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

  // Mencari nilai x
  const x = (lon2r - lon1r) * Math.cos((lat1r + lat2r) / 2);

  // Mencari nilai y
  const y = lat2r - lat1r;

  // Mencari nilai d
  const d = Math.sqrt(x * y + y * y) * r;

  // Mengembalikan hasil hitungan jarak dari titik koordinat user dan titik koordinat skatepark
  return d.toFixed(1);
};

export default HaversineFormula;

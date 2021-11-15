import React from 'react';

const About = () => {
  return (
    <div className='my-20 mx-15'>
      <h1 className='text-center mb-15'>Tentang Aplikasi</h1>
      <p>
        Aplikasi ini dibuat untuk menemukan lokasi skatepark terdekat
        berdasarkan lokasi pengguna. Metode yang digunakan pada aplikasi ini
        adalah metode Haversine Formula. Metode Haversine Formula di gunakan
        untuk meng-kalkulasi jarak dari titik geografis pengguna dan titik
        geografis skatepark yang ingin dituju.
      </p>
    </div>
  );
};

export default About;

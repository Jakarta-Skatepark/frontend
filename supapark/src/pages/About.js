import React from 'react';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import MobileMenu from '../components/MobileMenu';

const About = ({ loggedIn, setLoggedIn }) => {
  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className='mobile'>
        <MobileNav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <MobileMenu />
      </div>
      <div className='my-20 mx-15 container'>
        <h1 className='text-center mb-15 mt-11'>Tentang Aplikasi</h1>
        <p>
          Aplikasi ini dibuat untuk menemukan lokasi skatepark terdekat
          berdasarkan lokasi pengguna. Metode yang digunakan pada aplikasi ini
          adalah metode Haversine Formula. Metode Haversine Formula di gunakan
          untuk meng-kalkulasi jarak dari titik geografis pengguna dan titik
          geografis skatepark yang ingin dituju.
        </p>
      </div>
    </div>
  );
};

export default About;

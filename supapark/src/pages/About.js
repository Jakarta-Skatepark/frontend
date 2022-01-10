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
      <div className='my-20 mx-15 container about-section'>
        <h1 className='text-center mb-15 mt-11'>Tentang Aplikasi</h1>
        <p>
          Aplikasi ini dibuat untuk menemukan lokasi skatepark terdekat
          berdasarkan lokasi pengguna, berikut adalah penjelasan singkat tentang
          aplikasi ini:
        </p>
        <ul className='about-list'>
          <li>
            Aplikasi pencarian lokasi skatepark terdekat di DKI Jakarta adalah
            sebuah sistem yang dapat mengukur jarak terdekat antara lokasi
            skatepark dengan lokasi pengguna. Perancangan aplikasi berbasis web
            ini dibangun menggunakan sebuah library teknologi pengembangan
            website yaitu React Js dan aplikasi ini terintegrasi pada sebuah API
            yang dideploy di Heroku dan dipanggil menggunakan bahasa pemrograman
            Graph QL.
          </li>
          <li>
            Selain mengukur jarak terdekat antara lokasi skatepark dengan lokasi
            pengguna, aplikasi ini juga dapat memberikan informasi mengenai
            lokasi skatepark, jenis-jenis rintangan yang ada pada skatepark, dan
            area skatepark yang ada di Jakarta.
          </li>
          <li>
            Aplikasi berbasis web ini dapat di akses melalui browser pada semua
            perangkat baik browser pada desktop pc, browser pada tablet, maupun
            browser pada handphone.
          </li>
          <li>
            Penggunaan mapbox membantu aplikasi untuk memberikan map petunjuk
            arah menuju lokasi skatepark yang ingin dituju oleh pengguna.
          </li>
          <li>
            Metode haversine formula digunakan untuk menghitung jarak antara dua
            titik koordinat dari lokasi pengguna menuju lokasi skatepark yang
            ingin dituju berdasarkan latitude (garis lintang) dan longitude
            (garis bujur).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

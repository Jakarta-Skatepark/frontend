import React, { useState } from 'react';
import ListCard from '../components/ListCard';
import Map from './Map';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';
import MobileMenu from '../components/MobileMenu';

export default function Home({
  userLatitude,
  userLongitude,
  loggedIn,
  setLoggedIn,
}) {
  const [inputSearch, setInputSearch] = useState('');

  const onChange = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className='mobile'>
        <MobileNav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <MobileMenu loggedIn={loggedIn} />
      </div>
      <div className='flex m-auto'>
        <div className='left pt-11 pb-1'>
          <h4 className=' mb-15'>Temukan Lokasi Skatepark didekatmu.</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              onChange={onChange}
              value={inputSearch}
              type='search'
              className='bg-primary-2 mb-20'
              placeholder='Cari Skatepark...'
            />
          </form>

          <div>
            <ListCard
              inputSearch={inputSearch}
              setInputSearch={setInputSearch}
              userLatitude={userLatitude}
              userLongitude={userLongitude}
            />
          </div>
        </div>
        <div className='right'>
          <Map userLatitude={userLatitude} userLongitude={userLongitude} />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import ListCard from '../components/ListCard';

export default function Home({ userLatitude, userLongitude }) {
  const [inputSearch, setInputSearch] = useState('');

  const onChange = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div>
      <div className='hero'>
        <h1 className='mt-20 mb-15'>Temukan Lokasi Skatepark didekatmu.</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={onChange}
            value={inputSearch}
            type='search'
            className='bg-base-1 mb-20'
            placeholder='Cari Skatepark...'
          />
        </form>
      </div>
      <div>
        <ListCard
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          userLatitude={userLatitude}
          userLongitude={userLongitude}
        />
      </div>
    </div>
  );
}

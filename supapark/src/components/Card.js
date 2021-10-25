import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ name, area, image, jarak, linkId }) {
  return (
    <Link
      to={`/detail/${linkId}`}
      className='card flex bg-base-2 items-center gap-7 rounded-4'
    >
      <div>
        <img
          style={{
            width: '364px',
            height: '260px',
            borderRadius: '10px',
            objectFit: 'cover',
          }}
          src={image}
          alt={name}
        />
      </div>

      <div>
        <h3>{name}</h3>
        <p className='text-8 mb-7 mt-3'>{area}</p>
        <h2>
          {jarak === 'NaN' ? 'Nyalakan Lokasi!' : jarak}
          <span className='ml-7'>KM</span>
        </h2>
      </div>
    </Link>
  );
}

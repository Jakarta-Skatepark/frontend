import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ name, area, image, jarak, linkId }) {
  return (
    <Link to={`/detail/${linkId}`} className='card flex bg-base-2 gap-3'>
      <div>
        <img
          style={{
            width: '212px',
            height: '135px',
          }}
          src={image}
          alt={name}
        />
      </div>

      <div className='card-name'>
        <span className='jarakMobile'>
          {jarak === 'NaN' ? 'Nyalakan Lokasi!' : jarak} KM
        </span>
        <h3>{name}</h3>
        <p className='text-6 mb-3 mt-3'>{area}</p>
        <h2 className='desktop'>
          {jarak === 'NaN' ? 'Nyalakan Lokasi!' : jarak}
          <span className='ml-6'>KM</span>
        </h2>
      </div>
    </Link>
  );
}

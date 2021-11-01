import React from 'react';

import { useQuery } from '@apollo/client';
import { LOAD_SKATEPARK } from '../GraphQL/Queries';

import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

export default function DetailPage() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(LOAD_SKATEPARK, {
    variables: { skateparkId: id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className='mt-20'>
      <Link to='/' className='text-primary-3'>
        Kembali
      </Link>
      <h1 className='mt-16'>{data.skatepark.park_name}</h1>
      <h4 className='mt-7 text-11'>
        {data.skatepark.park_type} || {data.skatepark.park_area}
      </h4>
      <div className='image-container'>
        <img
          className='mt-15'
          src={data.skatepark.park_image}
          alt={data.skatepark.park_name}
        />
      </div>
      <p className='mt-15 mb-20 text-11'>{data.skatepark.park_description}</p>
      <h1 className='mb-15'>Rintangan</h1>
      {data.skatepark.park_obstacles.map((obstacle) => {
        return (
          <ul className='flex gap-2'>
            <li key={obstacle.id}>
              <Link className='text-11' to='/obstacle'>
                {obstacle.obstacle_name}
              </Link>
            </li>
          </ul>
        );
      })}
      <h1 className='my-15'>Petunjuk Arah</h1>
      <p className='text-11'>
        Latitude: {data.skatepark.park_geometry.latitude}
      </p>
      <p className='text-11'>
        Longitude: {data.skatepark.park_geometry.longitude}
      </p>
      <p className='text-11'>{data.skatepark.park_address}</p>
    </div>
  );
}

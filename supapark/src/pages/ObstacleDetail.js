import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { LOAD_OBSTACLE } from '../GraphQL/Queries';

export default function ObstacleDetail() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(LOAD_OBSTACLE, {
    variables: { obstacleId: id },
  });

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='mt-15 paddingMobile' id='obstacleDetail'>
      <Link className='text-primary-3 text-8' to='/obstacles'>
        Kembali
      </Link>
      <h1 className='mt-15 text-center mb-15'>{data.obstacle.obstacle_name}</h1>
      <div className='image-container'>
        <img
          className='obstacle-image'
          src={data.obstacle.imageUrl}
          alt={'gambar' + data.obstacle.obstacle_name}
        />
      </div>
      <p className='mt-15 text-11'>{data.obstacle.description}</p>
    </div>
  );
}

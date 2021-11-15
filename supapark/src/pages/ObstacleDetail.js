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
    <div className='mt-20'>
      <Link className='text-primary-3 text-8' to='/obstacles'>
        Kembali
      </Link>
      <h1 className='mt-16 text-center mb-14'>{data.obstacle.obstacle_name}</h1>
      <div className='image-container'>
        <img
          src={data.obstacle.imageUrl}
          alt={'gambar' + data.obstacle.obstacle_name}
        />
      </div>
      <p className='mt-7 text-11'>{data.obstacle.description}</p>
    </div>
  );
}

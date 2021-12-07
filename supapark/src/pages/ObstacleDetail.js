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
  if (loading)
    return (
      <h1 className='flex justify-center items-center loading'>Loading...</h1>
    );

  return (
    <div className=' paddingMobile' id='obstacleDetail'>
      <div className='image-container'>
        <img
          className='obstacle-image'
          src={data.obstacle.imageUrl}
          alt={'gambar' + data.obstacle.obstacle_name}
        />
      </div>
      <div className='imageMenu'>
        <div className='flex justify-between items-center'>
          <Link
            to='/obstacles'
            className='text-primary-3 bg-primary-2 px-6 py-6 text-8 radius-100'
          >
            <img src='/back.svg' alt='backbutton' />
          </Link>
        </div>
      </div>
      <div className='container'>
        <h1 className='mt-11'>{data.obstacle.obstacle_name}</h1>
        <hr />
        <p className=' text-7'>{data.obstacle.description}</p>
      </div>
    </div>
  );
}

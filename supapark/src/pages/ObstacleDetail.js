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
    <div>
      <Link to='/obstacles'>Kembali</Link>
      <h1>{data.obstacle.obstacle_name}</h1>
      <img
        src={data.obstacle.imageUrl}
        alt={'gambar' + data.obstacle.obstacle_name}
      />
      <p>{data.obstacle.description}</p>
    </div>
  );
}

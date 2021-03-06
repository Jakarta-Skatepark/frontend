import React from 'react';
import ObstacleCard from './ObstacleCard';

import { useQuery } from '@apollo/client';
import { LOAD_ALL_OBSTACLES } from '../GraphQL/Queries';

const ObstacleList = () => {
  const { data, loading, error } = useQuery(LOAD_ALL_OBSTACLES);
  if (error) return <h1>Error</h1>;
  if (loading)
    return (
      <h1 className='flex justify-center items-center loading'>Loading...</h1>
    );

  return (
    <div className='list flex flex-wrap gap-5'>
      {data.obstacles.map((obs) => {
        return (
          <ObstacleCard name={obs.obstacle_name} key={obs.id} index={obs.id} />
        );
      })}
    </div>
  );
};

export default ObstacleList;

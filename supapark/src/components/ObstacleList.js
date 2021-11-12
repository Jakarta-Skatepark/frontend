import React from 'react';
import ObstacleCard from './ObstacleCard';

import { useQuery } from '@apollo/client';
import { LOAD_ALL_OBSTACLES } from '../GraphQL/Queries';

const ObstacleList = () => {
  const { data, loading, error } = useQuery(LOAD_ALL_OBSTACLES);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='flex flex-wrap gap-2'>
      {data.obstacles.map((obs) => {
        return (
          <ObstacleCard name={obs.obstacle_name} key={obs.id} index={obs.id} />
        );
      })}
    </div>
  );
};

export default ObstacleList;

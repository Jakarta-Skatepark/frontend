import React from 'react';
import ObstacleCard from './ObstacleCard';
import { Obstacles } from '../data/Obstacles';

const ObstacleList = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      {Obstacles.map((obs) => {
        return (
          <ObstacleCard name={obs.obstacle_name} key={obs.id} index={obs.id} />
        );
      })}
    </div>
  );
};

export default ObstacleList;

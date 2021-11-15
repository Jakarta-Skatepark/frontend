import React from 'react';
import ObstacleList from '../components/ObstacleList';

const Obstacle = () => {
  return (
    <div className='mt-20 px-29 pb-20'>
      <h1 className='mb-15'>Skatepark Obstacles</h1>
      <ObstacleList />
    </div>
  );
};

export default Obstacle;

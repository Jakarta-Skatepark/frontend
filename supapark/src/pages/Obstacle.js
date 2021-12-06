import React from 'react';
import ObstacleList from '../components/ObstacleList';

const Obstacle = () => {
  return (
    <div className='mt-15 pb-15 container'>
      <h1 className='mb-15'>Skatepark Obstacles</h1>
      <ObstacleList />
    </div>
  );
};

export default Obstacle;

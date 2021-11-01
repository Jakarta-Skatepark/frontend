import React from 'react';
import ObstacleList from '../components/ObstacleList';

const Obstacle = () => {
  return (
    <div className='content pb-20 px-15 mt-20 '>
      <h1 className='mb-15'>Skatepark Obstacles</h1>
      <ObstacleList />
    </div>
  );
};

export default Obstacle;

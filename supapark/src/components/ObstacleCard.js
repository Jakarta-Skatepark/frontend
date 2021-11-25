import React from 'react';
import { Link } from 'react-router-dom';

const ObstacleCard = ({ name, index }) => {
  return (
    <div className=''>
      <Link
        to={`/obstacle/detail/${index}`}
        className='flex justify-center obstacleCard'
      >
        {name}
      </Link>
    </div>
  );
};

export default ObstacleCard;

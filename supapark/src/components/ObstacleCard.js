import React from 'react';
import { Link } from 'react-router-dom';

const ObstacleCard = ({ name, index }) => {
  return (
    <div className=''>
      <Link
        to={`/obstacle/detail/${index}`}
        className='flex justify-center '
        style={{
          width: '315px',
          height: '315px',
          alignItems: 'center',
          backgroundColor: '#F0EDE6',
          fontSize: '18px',
          fontWeight: 'bold',
          borderRadius: '10px',
        }}
      >
        {name}
      </Link>
    </div>
  );
};

export default ObstacleCard;

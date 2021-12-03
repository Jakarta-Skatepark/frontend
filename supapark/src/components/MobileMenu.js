import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <div className='mobileMenu'>
      <nav>
        <ul>
          <li>
            <Link to='/' className='text-4 text-primary-2'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/' className='text-4 text-primary-2'>
              Obstacles
            </Link>
          </li>
          <li>
            <Link to='/' className='text-4 text-primary-2'>
              About
            </Link>
          </li>
          <li>
            <Link to='/' className='text-4 text-primary-2'>
              Input Data
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;

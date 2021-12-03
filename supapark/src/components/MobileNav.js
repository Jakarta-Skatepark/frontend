import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  return (
    <div className='mobileHeader'>
      <nav>
        <ul>
          <li>
            <Link to='/' className='logo'>
              Japark
            </Link>
          </li>
          <li>
            <Link to='/login' className='text-7 text-primary-2'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;

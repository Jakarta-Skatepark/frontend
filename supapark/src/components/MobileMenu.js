import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <div className='mobileMenu'>
      <nav>
        <ul>
          <li>
            <Link
              to='/'
              className='text-4 text-primary-2 flex items-center flex-col gap-1'
            >
              <img src='/home.svg' alt='homePage' />
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/obstacles'
              className='text-4 text-primary-2 flex items-center flex-col gap-1'
            >
              <img src='/obstacle.svg' alt='obstaclePage' />
              Obstacles
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='text-4 text-primary-2 flex items-center flex-col gap-1'
            >
              <img src='/tentang.svg' alt='AboutPage' />
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;

// Input Data Menu
// {/* <li>
//             <Link
//               to='/input'
//               className='text-4 text-primary-2 flex items-center flex-col gap-1'
//             >
//               <img src='/inputdata.svg' alt='InputDataPage' />
//               Input Data
//             </Link>
//           </li> */}

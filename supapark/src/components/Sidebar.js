import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='bg-base-4 sidebar px-15 pt-20'>
      <div className='text-8 text-primary-2 font-bold'>
        Jakarta <br /> Skatepark
      </div>
      <nav>
        <ul>
          <li className='mt-7'>
            <Link to='/' className='text-8 text-primary-2 hover:text-base-1'>
              Home
            </Link>
          </li>
          <li className='mt-7'>
            <Link
              to='/maps'
              className='text-8 text-primary-2 hover:text-base-1'
              href='#'
            >
              Maps
            </Link>
          </li>
          <li className='mt-7'>
            <Link
              to='/obstacles'
              className='text-8 text-primary-2 hover:text-base-1'
              href='#'
            >
              Obstacles
            </Link>
          </li>
          <li className='mt-7'>
            <Link
              to='/about'
              className='text-8 text-primary-2 hover:text-base-1'
              href='#'
            >
              Tentang Aplikasi
            </Link>
          </li>
          {/* <li className='mt-7'>
            <Link
              to='/input'
              className='text-8 text-primary-2 hover:text-base-1'
              href='#'
            >
              Input Data
            </Link>
          </li>
          <li className='mt-7'>
            <Link
              to='/'
              className='text-8 text-primary-2 hover:text-base-1'
              href='#'
            >
              Log Out
            </Link>
          </li> */}
          <li className='mt-7'>
            <Link
              to='/'
              className='text-8 text-primary-2 hover:text-base-1'
              href='#'
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

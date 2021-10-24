import React from 'react';

export default function Sidebar() {
  return (
    <div className='bg-base-4 sidebar px-15 pt-20'>
      <div className='text-8 text-primary-2 '>LOGO</div>
      <nav>
        <ul>
          <li className='mt-7'>
            <a className='text-8 text-primary-2 hover:text-base-1' href='#'>
              Home
            </a>
          </li>
          <li className='mt-7'>
            <a className='text-8 text-primary-2 hover:text-base-1' href='#'>
              Maps
            </a>
          </li>
          <li className='mt-7'>
            <a className='text-8 text-primary-2 hover:text-base-1' href='#'>
              Obstacles
            </a>
          </li>
          <li className='mt-7'>
            <a className='text-8 text-primary-2 hover:text-base-1' href='#'>
              Tentang Aplikasi
            </a>
          </li>
          <li className='mt-7'>
            <a className='text-8 text-primary-2 hover:text-base-1' href='#'>
              Input Data
            </a>
          </li>
          <li className='mt-7'>
            <a className='text-8 text-primary-2 hover:text-base-1' href='#'>
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

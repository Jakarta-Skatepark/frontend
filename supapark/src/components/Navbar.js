import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ loggedIn, setLoggedIn }) {
  const onLogoutClick = (e) => {
    e.preventDefault();
    setLoggedIn(false);
    alert('logout berhasil!');
  };
  return (
    <header className='flex justify-between bg-primary-1 text-primary-2 px-15 items-center'>
      <Link to='/' className='logo'>
        Japark
      </Link>
      <nav>
        <ul className='flex gap-8'>
          <li>
            <Link to=''>Home</Link>
          </li>
          <li>
            <Link to='/obstacles'>Obstacles</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/input'>Input Data</Link>
          </li>
          {loggedIn ? (
            <li>
              <Link to='/' onClick={onLogoutClick}>
                Log Out
              </Link>
            </li>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

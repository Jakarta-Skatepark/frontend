import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({ loggedIn, setLoggedIn }) => {
  const onLogoutClick = (e) => {
    e.preventDefault();
    setLoggedIn(false);
    alert('logout berhasil!');
  };
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
            {loggedIn ? (
              <li>
                <Link
                  to='/'
                  className='text-7 text-primary-2'
                  onClick={onLogoutClick}
                >
                  Log Out
                </Link>
              </li>
            ) : (
              <li>
                <Link to='/login' className='text-7 text-primary-2'>
                  Login
                </Link>
              </li>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;

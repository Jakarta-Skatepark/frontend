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
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;

// Props
// { loggedIn, setLoggedIn }

// Logout Handler
// const onLogoutClick = (e) => {
//   e.preventDefault();
//   setLoggedIn(false);
//   alert('logout berhasil!');
// };

// Child
// {loggedIn ? (
//   <li>
//     <Link
//       to='/'
//       className='text-7 text-primary-2'
//       onClick={onLogoutClick}
//     >
//       Log Out
//     </Link>
//   </li>
// ) : (
//   <li>
//     <Link to='/login' className='text-7 text-primary-2'>
//       Login
//     </Link>
//   </li>
// )}

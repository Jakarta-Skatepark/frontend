import React from 'react';
import ObstacleList from '../components/ObstacleList';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import MobileNav from '../components/MobileNav';

const Obstacle = ({ loggedIn, setLoggedIn }) => {
  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className='mobile'>
        <MobileNav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <MobileMenu />
      </div>
      <div className=' pb-15 container'>
        <h1 className='mb-15 mt-11'>Skatepark Obstacles</h1>
        <ObstacleList />
      </div>
    </div>
  );
};

export default Obstacle;

import React from 'react';
import Card from './Card';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className='flex flex-grow'>
      <Sidebar />
      <div className='flex flex-col gap-7'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;

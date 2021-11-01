import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';

// React Router Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Map from './pages/Map';
import Obstacle from './pages/Obstacle';
import InputData from './pages/InputData';
import About from './pages/About';
import DetailPage from './pages/DetailPage';
import ObstacleDetail from './pages/ObstacleDetail';

const App = () => {
  const [userLatitude, setUserLatitude] = useState(0);
  const [userLongitude, setUserLongitude] = useState(0);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLatitude(position.coords.latitude);
        setUserLongitude(position.coords.longitude);
      },
      (err) => setErrors(err.message)
    );
  }, []);

  console.log(errors);
  return (
    <Router>
      <div className='flex'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <div className='flex flex-col content pb-20'>
              <Home userLatitude={userLatitude} userLongitude={userLongitude} />
            </div>
          </Route>
          <Route exact path='/detail/:id'>
            <div className='content pb-20 px-15'>
              <DetailPage />
            </div>
          </Route>
          <Route path='/maps' className='content pb-20 px-15'>
            <Map />
          </Route>
          <Route path='/obstacles' className='content pb-20 '>
            <Obstacle />
          </Route>
          <Route exact path='/obstacle/detail/:id'>
            <div className='content pb-20 px-15'>
              <ObstacleDetail />
            </div>
          </Route>
          <Route path='/about' className='content pb-20 px-15'>
            <About />
          </Route>
          <Route path='/input' className='content pb-20 px-15'>
            <InputData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

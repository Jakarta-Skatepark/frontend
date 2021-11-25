import React, { useState, useEffect } from 'react';

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
import Login from './pages/Login';
import Navbar from './components/Navbar';

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
      <div className=''>
        <Navbar />

        <Switch>
          <div>
            <Route exact path='/'>
              <div className='pb-20'>
                <Home
                  userLatitude={userLatitude}
                  userLongitude={userLongitude}
                />
              </div>
            </Route>
            <div className='container'>
              <Route exact path='/detail/:id'>
                <div className=' pb-20'>
                  <DetailPage
                    userLatitude={userLatitude}
                    userLongitude={userLongitude}
                  />
                </div>
              </Route>

              <Route path='/maps'>
                <Map
                  userLatitude={userLatitude}
                  userLongitude={userLongitude}
                />
              </Route>

              <Route path='/obstacles'>
                <div className=' pb-20'>
                  <Obstacle />
                </div>
              </Route>

              <Route exact path='/obstacle/detail/:id'>
                <div className=' pb-20'>
                  <ObstacleDetail />
                </div>
              </Route>

              <Route exact path='/about'>
                <div className=''>
                  <About />
                </div>
              </Route>

              <Route exact path='/login'>
                <div className='pb-20 mt-15'>
                  <Login />
                </div>
              </Route>

              <Route path='/input'>
                <div className='pb-20 mt-15'>
                  <InputData />
                </div>
              </Route>
            </div>
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

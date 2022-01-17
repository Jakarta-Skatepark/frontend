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
import EditData from './pages/EditPage';
import Directions from './pages/Directions';

const App = () => {
  const [userLatitude, setUserLatitude] = useState(0);
  const [userLongitude, setUserLongitude] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState('');
  // -6.256524395465985, 106.8664913818842

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
        <Switch>
          <Route exact path='/'>
            <div className='pb-20'>
              <Home
                userLatitude={userLatitude}
                userLongitude={userLongitude}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            </div>
          </Route>

          <Route exact path='/detail/:id'>
            <div className=' pb-20'>
              <DetailPage
                loggedIn={loggedIn}
                userLatitude={userLatitude}
                userLongitude={userLongitude}
              />
            </div>
          </Route>

          <Route exact path='/detail/directions/:id'>
            <Directions
              userLatitude={userLatitude}
              userLongitude={userLongitude}
            />
          </Route>

          <Route path='/maps'>
            <Map userLatitude={userLatitude} userLongitude={userLongitude} />
          </Route>

          <Route path='/obstacles'>
            <div className=' pb-20'>
              <Obstacle loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            </div>
          </Route>

          <Route exact path='/obstacle/detail/:id'>
            <div className=' pb-20'>
              <ObstacleDetail />
            </div>
          </Route>

          <Route exact path='/about'>
            <div className=''>
              <About loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            </div>
          </Route>

          <Route exact path='/login'>
            <div className='pb-20'>
              <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            </div>
          </Route>

          <Route path='/input'>
            <div className='pb-20'>
              <InputData loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            </div>
          </Route>

          <Route path='/edit/:id'>
            <div className='pb-20'>
              <EditData loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            </div>
          </Route>

          <Route path='*'>
            <div className='notfound'>
              <h1>Halaman tidak ditemukan</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MapBox = ({ userLatitude, userLongitude }) => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const [viewport] = useState({
    latitude: userLatitude,
    longitude: userLongitude,
    zoom: 10,
  });
  return (
    <div className='map-container'>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle='mapbox://styles/gmllshrn/ckvj33j018nc515o2pcsxdbdj'
        width='100%'
        height='500px'
      ></ReactMapGL>
    </div>
  );
};

export default MapBox;

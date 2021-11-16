import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
// import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

const MapBox = ({
  userLatitude,
  userLongitude,
  parkLatitude,
  parkLongitude,
  parkName,
}) => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const [viewport, setViewport] = useState({
    latitude: userLatitude,
    longitude: userLongitude,
    zoom: 9,
  });

  const parkMarker = (
    <Marker latitude={parkLatitude} longitude={parkLongitude}>
      <button className='py-2 px-2 bg-primary-3 rounded-7 text-primary-2'>
        {parkName}
      </button>
    </Marker>
  );

  const userMarker = (
    <Marker latitude={userLatitude} longitude={userLongitude}>
      <button className='py-2 px-2 bg-primary-3 rounded-7 text-primary-2'>
        You
      </button>
    </Marker>
  );

  return (
    <div className='map-container'>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle='mapbox://styles/gmllshrn/ckvj33j018nc515o2pcsxdbdj'
        width='100%'
        height='500px'
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {parkMarker}
        {userMarker}
      </ReactMapGL>
    </div>
  );
};

export default MapBox;

import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useQuery } from '@apollo/client';
import { MAPS_DATA } from '../GraphQL/Queries';
import { Link } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; /* eslint import/no-webpack-loader-syntax: off */

const Map = ({ userLatitude, userLongitude }) => {
  const { data, loading, error } = useQuery(MAPS_DATA);

  const [selectedPark, setSelectedPark] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: userLatitude,
    longitude: userLongitude,
    zoom: 10,
  });

  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  if (error) return 'ERROR';
  if (loading)
    return (
      <h1 className='flex justify-center items-center loading'>Loading...</h1>
    );

  const renderMarker = data.skateparks.map((skatepark) => {
    return (
      <Marker
        key={skatepark.id}
        latitude={skatepark.latitude}
        longitude={skatepark.longitude}
        onClick={(e) => {
          e.preventDefault();
          setSelectedPark(skatepark);
        }}
      >
        <button className='py-2 px-2  '>
          <img src='/marker.svg' alt='Marker' />
        </button>
      </Marker>
    );
  });

  const userMarker = data.skateparks.map((skatepark) => {
    return (
      <Marker
        key={skatepark.id}
        latitude={userLatitude}
        longitude={userLongitude}
      >
        <button className='py-5 px-5 bg-primary-3 rounded-7 text-6 text-primary-2'>
          {!userLatitude && !userLongitude
            ? 'Allow The Location'
            : 'You Are Here'}
        </button>
      </Marker>
    );
  });

  return (
    <div id='map'>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle='mapbox://styles/gmllshrn/ckvj33j018nc515o2pcsxdbdj'
        width='940px'
        height='90vh'
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {userMarker}
        {renderMarker}
        {selectedPark ? (
          <Popup
            className='text-center'
            latitude={selectedPark.latitude}
            longitude={selectedPark.longitude}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <Link to={`/detail/${selectedPark.id}`}>
              <img
                width='253px'
                height='147px'
                src={selectedPark.park_image}
                alt={selectedPark.park_name}
                className='mb-5'
              />
              {selectedPark.park_name}
            </Link>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default Map;

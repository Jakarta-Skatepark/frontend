import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useQuery } from '@apollo/client';
import { MAPS_DATA } from '../GraphQL/Queries';
import { Link } from 'react-router-dom';

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
  if (loading) return 'Loading...';

  const renderMarker = data.skateparks.map((skatepark) => {
    return (
      <Marker
        key={skatepark.id}
        latitude={skatepark.park_geometry.latitude}
        longitude={skatepark.park_geometry.longitude}
        onClick={(e) => {
          e.preventDefault();
          setSelectedPark(skatepark);
        }}
      >
        <button className='py-2 px-2 bg-primary-3 rounded-7 text-primary-2'>
          Park
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
        <button className='py-2 px-2 bg-primary-3 rounded-7 text-4 text-primary-2'>
          {!userLatitude && !userLongitude
            ? 'Allow The Location'
            : 'You Are Here'}
        </button>
      </Marker>
    );
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle='mapbox://styles/gmllshrn/ckvj33j018nc515o2pcsxdbdj'
        width='100%'
        height='100vh'
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {userMarker}
        {renderMarker}
        {selectedPark ? (
          <Popup
            latitude={selectedPark.park_geometry.latitude}
            longitude={selectedPark.park_geometry.longitude}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <Link to={`/detail/${selectedPark.id}`}>
                {selectedPark.park_name}
              </Link>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default Map;

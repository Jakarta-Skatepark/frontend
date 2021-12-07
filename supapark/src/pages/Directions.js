import React from 'react';
import { useParams } from 'react-router-dom';
import { LOAD_SKATEPARK } from '../GraphQL/Queries';
import { useQuery } from '@apollo/client';
import MapBox from '../components/MapBox';

const Directions = ({ userLatitude, userLongitude }) => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(LOAD_SKATEPARK, {
    variables: { skateparkId: id },
  });

  if (loading)
    return (
      <h1 className='flex justify-center items-center loading'>Loading...</h1>
    );
  if (error) return <h1>{error.message}</h1>;
  return (
    <MapBox
      userLatitude={userLatitude}
      userLongitude={userLongitude}
      parkLatitude={data.skatepark.latitude}
      parkLongitude={data.skatepark.longitude}
      parkName={data.skatepark.park_name}
    />
  );
};

export default Directions;

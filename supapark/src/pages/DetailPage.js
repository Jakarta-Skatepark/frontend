import React from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_SKATEPARK } from '../GraphQL/Queries';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MapBox from '../components/MapBox';

export default function DetailPage({ userLatitude, userLongitude }) {
  const { id } = useParams();

  const { loading, error, data } = useQuery(LOAD_SKATEPARK, {
    variables: { skateparkId: id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className='mt-15'>
      <Link to='/' className='text-primary-3 text-8'>
        Kembali
      </Link>
      <h1 className='mt-15'>{data.skatepark.park_name}</h1>
      <p className='mt-7 text-11'>
        {data.skatepark.park_type} || {data.skatepark.park_area}
      </p>
      <div className='image-container'>
        <img
          className='mt-15'
          src={data.skatepark.park_image}
          alt={data.skatepark.park_name}
        />
      </div>
      <p
        className='mt-15 mb-15 text-11'
        dangerouslySetInnerHTML={{ __html: data.skatepark.park_description }}
      />

      <h1 className='my-15'>Petunjuk Arah</h1>
      <p className='text-11'>User Latitude: {userLatitude}</p>
      <p className='text-11'>User Longitude: {userLongitude}</p>
      <p className='text-11'>Skatepark Latitude: {data.skatepark.latitude}</p>
      <p className='text-11'>Skatepark Longitude: {data.skatepark.longitude}</p>
      <div className='map-container mt-15 mb-15'>
        <MapBox
          userLatitude={userLatitude}
          userLongitude={userLongitude}
          parkLatitude={data.skatepark.latitude}
          parkLongitude={data.skatepark.longitude}
          parkName={data.skatepark.park_name}
        />
      </div>
      <p className='text-11 mt-15'>{data.skatepark.park_address}</p>
    </div>
  );
}

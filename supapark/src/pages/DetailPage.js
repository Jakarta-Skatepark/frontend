import React from 'react';

import { useQuery } from '@apollo/client';
import { LOAD_SKATEPARK } from '../GraphQL/Queries';

import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

export default function DetailPage() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(LOAD_SKATEPARK, {
    variables: { skateparkId: id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div>
      <Link to='/'>Kembali</Link>
      <h1>{data.skatepark.park_name}</h1>
      <h4>
        {data.skatepark.park_type} || {data.skatepark.park_area}
      </h4>
      <img src={data.skatepark.park_image} alt={data.skatepark.park_name} />
      <p>{data.skatepark.park_description}</p>
      <h1>Rintangan</h1>
      {data.skatepark.park_obstacles.map((obstacle) => {
        return (
          <ul>
            <li key={obstacle.id}>
              <p>{obstacle.obstacle_name}</p>
            </li>
          </ul>
        );
      })}
      <h1>Petunjuk Arah</h1>
      <h5>Latitude: {data.skatepark.park_geometry.latitude}</h5>
      <h5>Longitude: {data.skatepark.park_geometry.longitude}</h5>
    </div>
  );
}

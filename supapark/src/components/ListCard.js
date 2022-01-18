import React from 'react';
import Card from './Card';

import { useQuery } from '@apollo/client';
import { LOAD_CARD } from '../GraphQL/Queries';

import HaversineFormula from './HaversineFormula';

export default function ListCard({ userLatitude, userLongitude, inputSearch }) {
  const { loading, error, data } = useQuery(LOAD_CARD);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  const sortedskateparks = data.skateparks
    .map((skatepark) => {
      return {
        ...skatepark,
        jarak: HaversineFormula(
          userLatitude,
          userLongitude,
          skatepark.latitude,
          skatepark.longitude
        ),
      };
    })
    .sort((a, b) => a.jarak - b.jarak);

  return (
    <div>
      {!userLatitude && !userLongitude ? (
        <div>Allow The Location</div>
      ) : (
        <div className='flex flex-col '>
          {sortedskateparks
            .filter((skatepark) => {
              if (inputSearch === '') {
                return skatepark;
              } else if (
                skatepark.park_name
                  .toLowerCase()
                  .includes(inputSearch.toLowerCase())
              ) {
                return skatepark;
              }
              return '';
            })
            .map((skatepark) => {
              return (
                <Card
                  key={skatepark.id}
                  name={skatepark.park_name}
                  area={skatepark.park_area}
                  image={skatepark.park_image}
                  jarak={skatepark.jarak}
                  linkId={skatepark.id}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}

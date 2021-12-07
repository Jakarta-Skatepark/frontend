import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  LOAD_SKATEPARK,
  DELETE_SKATEPARK,
  LOAD_CARD,
} from '../GraphQL/Queries';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import MapBox from '../components/MapBox';

export default function DetailPage({ loggedIn, userLatitude, userLongitude }) {
  const { id } = useParams();

  const { loading, error, data } = useQuery(LOAD_SKATEPARK, {
    variables: { skateparkId: id },
  });
  const [deleteSkatepark] = useMutation(DELETE_SKATEPARK);
  console.log(data);
  if (loading)
    return (
      <h1 className='flex justify-center items-center loading'>Loading...</h1>
    );
  if (error) return <h1>{error.message}</h1>;

  const onDeleteClick = () => {
    deleteSkatepark({
      variables: { deleteSkateparkId: id },
      refetchQueries: [{ query: LOAD_CARD }],
    });
  };

  return (
    <div className='' id='detailPage'>
      <div className='image-container'>
        <img
          className='park-img'
          src={data.skatepark.park_image}
          alt={data.skatepark.park_name}
        />
        <div className='imageMenu'>
          <div className='flex justify-between items-center'>
            <Link
              to='/'
              className='text-primary-3 bg-primary-2 px-6 py-6 text-8 radius-100'
            >
              <img src='/back.svg' alt='backbutton' />
            </Link>
          </div>
        </div>
        <div className='imageSeletion'>
          {loggedIn && (
            <div className='flex gap-6 imageSelection'>
              <Link to={`/edit/${id}`} className='btn-edit text-8'>
                <img src='/edit.svg' alt='editbutton' />
              </Link>
              <Link
                to='/'
                onClick={onDeleteClick}
                className='btn-delete text-8'
              >
                <img src='/delete.svg' alt='deletebutton' />
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className='container'>
        <h1 className='mt-11'>{data.skatepark.park_name}</h1>
        <p className='mt-3 text-7'>
          {data.skatepark.park_type} || {data.skatepark.park_area}
        </p>
        <hr />

        <p
          className='text-7'
          dangerouslySetInnerHTML={{ __html: data.skatepark.park_description }}
        />

        <hr />

        <h5>Rintangan yang ada pada {data.skatepark.park_name}</h5>

        <div className='obstacle-list mt-11'>
          <ul>
            {data.skatepark.park_obstacle.map((obs, i) => {
              return (
                <li key={i}>
                  <Link className='text-7 font-medium' to={obs.link}>
                    {obs.obstacle_name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <hr />

        <h5>Komunitas</h5>
        <div className='community-l mt-11 flex gap-2 items-center'>
          <img src='/instagram.svg' alt='instagram' />
          <Link className='text-7' to={data.skatepark.instagram}>
            {data.skatepark.park_name}
          </Link>
        </div>

        <hr />
        <h5 className=''>Petunjuk Arah</h5>

        <p className='text-7 mt-11'>User Latitude: {userLatitude}</p>

        <p className='text-7'>User Longitude: {userLongitude}</p>

        <p className='text-7'>Skatepark Latitude: {data.skatepark.latitude}</p>

        <p className='text-7'>
          Skatepark Longitude: {data.skatepark.longitude}
        </p>

        <div className='directions-box'>
          <Link className='directions-button' to={`/detail/directions/${id}`}>
            Go!
          </Link>
        </div>

        <p className='text-7 mt-11 paddingMobile'>
          {data.skatepark.park_address}
        </p>
      </div>
    </div>
  );
}

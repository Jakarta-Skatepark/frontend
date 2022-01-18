import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  LOAD_SKATEPARK,
  DELETE_SKATEPARK,
  LOAD_CARD,
  LOAD_ALL_DATA,
} from '../GraphQL/Queries';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import MapBox from '../components/MapBox';

export default function DetailPage({ loggedIn, userLatitude, userLongitude }) {
  const { id } = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(LOAD_SKATEPARK, {
    variables: { skateparkId: id },
  });
  const [deleteSkatepark] = useMutation(DELETE_SKATEPARK);

  if (loading)
    return (
      <h1 className='flex justify-center items-center loading'>Loading...</h1>
    );
  if (error) return <h1>{error.message}</h1>;

  const onDeleteClick = () => {
    deleteSkatepark({
      variables: { deleteSkateparkId: id.toString() },
      refetchQueries: [{ query: LOAD_CARD, LOAD_ALL_DATA }],
      onCompleted: history.push('/'),
    });
  };

  const latitudePengguna = userLatitude;
  const longitudePengguna = userLongitude;
  const latitudeSkatepark = data.skatepark.latitude;
  const longitudeSkatepark = data.skatepark.longitude;
  // Rumus mengubah radian
  const radian = Math.PI / 180;

  // Mengubah nilai latitude dan longitude menjadi radian
  const phi2 = latitudeSkatepark * radian; //phi 2 adalah latitude skatepark dalam radian
  const phi1 = latitudePengguna * radian; // phi 1 adalah latitude pengguna dalam radian
  const lambda1 = longitudePengguna * radian; // lambda 1 adalah longitude pengguna dalam radian
  const lambda2 = longitudeSkatepark * radian; // lambda 2 adalah longitude skatepark dalam radian

  // Menentukan sin phi
  const sinPhi = Math.sin((phi2 - phi1) / 2) * Math.sin((phi2 - phi1) / 2);

  // menentukan sin lambda
  const sinLambda =
    Math.sin((lambda2 - lambda1) / 2) * Math.sin((lambda2 - lambda1) / 2);

  // Menentukan cos phi 1
  const cosPhi1 = Math.cos(phi1);

  // Menentukan cos phi 2
  const cosPhi2 = Math.cos(phi2);

  // Menentukan nilai A
  const A = Math.sqrt(sinPhi + cosPhi1 * cosPhi2 * sinLambda);

  // Menentukan Nilai B
  const B = 2 * Math.asin(A);

  // Menentukan nilai d
  const d = 6317 * B;

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
            {data.skatepark.park_obstacle === null ? (
              <p>Data Belum Lengkap</p>
            ) : (
              data.skatepark.park_obstacle.map((obs, i) => {
                return (
                  <li key={i}>
                    <Link className='text-7 font-medium' to={obs.link}>
                      {obs.obstacle_name}
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </div>

        <hr />

        <h5>Komunitas</h5>
        <div className='community-l mt-11 flex gap-2 items-center'>
          <img src='/instagram.svg' alt='instagram' />
          <a
            className='text-7'
            href={
              data.skatepark.instagram === null ? '/' : data.skatepark.instagram
            }
          >
            {data.skatepark.park_name}
          </a>
        </div>

        <hr />
        <h5>Hasil Perhitungan Metode Haversine Formula</h5>
        <p className='text-7 mt-11'>Latitude Pengguna: {userLatitude}</p>

        <p className='text-7'>Longitude Pengguna: {userLongitude}</p>

        <p className='text-7'>Latitude Skatepark: {data.skatepark.latitude}</p>

        <p className='text-7'>
          Longitude Skatepark: {data.skatepark.longitude}
        </p>

        <br />
        <h5 className='text-7'>
          Menghitung radian dengan rumus radian = X * (pi / 180)
        </h5>

        <p className='text-7'>hasil radian latitude penggune = {phi1}</p>

        <p className='text-7'>hasil radian longitude penggune = {lambda2}</p>

        <p className='text-7'>hasil radian latitude penggune = {phi2}</p>

        <p className='text-7'>hasil radian latitude penggune = {lambda2}</p>

        <br />
        <h5 className='text-7'>Menghitung rumus sin(phi2 - phi1 / 2) ^ 2</h5>

        <p className='text-7'>hasil perhitungan sin phi = {sinPhi}</p>

        <br />
        <h5 className='text-7'>
          Menghitung rumus sin(lambda2 - lambda1 / 2) ^ 2
        </h5>
        <p className='text-7'>hasil perhitungan sin lambda = {sinLambda}</p>

        <br />
        <h5 className='text-7'>Hitung cos(phi 1)</h5>
        <p className='text-7'>hasil perhitungan cos phi 1 = {cosPhi1}</p>

        <br />
        <h5 className='text-7'>Hitung cos(phi 2)</h5>
        <p className='text-7'>hasil perhitungan cos phi 2 = {cosPhi2}</p>

        <br />
        <h5 className='text-7'>Hasil perhitungan rumus A</h5>
        <p className='text-7'>hasil perhitungan A = {A}</p>

        <br />
        <h5 className='text-7'>Hitung B = 2 x asin(A)</h5>
        <p className='text-7'>hasil perhitungan B = {B}</p>

        <br />
        <h5 className='text-7'>Hitung d = 6317 x B</h5>
        <p className='text-7'>hasil perhitungan d = {d}</p>

        <br />
        <p className='text-7'>
          Sehingga jarak dari lokasi user menuju lokasi{' '}
          <span className='font-bold text-7'>{data.skatepark.park_name}</span>{' '}
          adalah <span className='font-bold text-7'>{d.toFixed(1)} km</span>
        </p>

        <hr />
        <h5 className=''>Petunjuk Arah</h5>

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

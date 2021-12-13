import React, { useState } from 'react';
import {
  UPDATE_SKATEPARK,
  LOAD_SKATEPARK,
  LOAD_CARD,
} from '../GraphQL/Queries';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';
import MobileNav from '../components/MobileNav';
import Navbar from '../components/Navbar';

const EditData = ({ loggedIn, setLoggedIn }) => {
  const { id } = useParams();
  const { data } = useQuery(LOAD_SKATEPARK, {
    variables: { skateparkId: id },
  });
  console.log(id);

  const [nama, setNama] = useState(data.skatepark.park_name);
  const [alamat, setAlamat] = useState(data.skatepark.park_address);
  const [tipe, setTipe] = useState(data.skatepark.park_type);
  const [area, setArea] = useState(data.skatepark.park_area);
  const [latitude, setLatitude] = useState(data.skatepark.latitude);
  const [longitude, setLongitude] = useState(data.skatepark.longitude);
  const [gambar, setGambar] = useState(data.skatepark.park_image);
  const [deskripsi, setDeskripsi] = useState(data.skatepark.park_description);
  const [editSkatepark, { error, loading }] = useMutation(UPDATE_SKATEPARK);
  const direct = '/';

  const onFormSubmit = (e) => {
    e.preventDefault();
    editSkatepark({
      variables: {
        updateSkateparkId: id,
        parkName: nama,
        parkImage: gambar,
        parkType: tipe,
        parkArea: area,
        parkAddress: alamat,
        parkDescription: deskripsi,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
      refetchQueries: [{ query: LOAD_CARD }],
    });
    if (!error) {
      alert('Edit data sukses!');
    }
    <Redirect to={direct} />;
  };

  if (error) return <h1>error + {error.message}</h1>;
  if (loading) return 'Submitting...';

  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className='mobile'>
        <MobileNav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <MobileMenu />
      </div>
      <div className='flex flex-col justify-center items-center container'>
        <h1 className='mt-11'>Edit Data</h1>
        <form
          onSubmit={onFormSubmit}
          className='paddingMobile'
          id='mobileEditInput'
        >
          <div className='flex gap-8 mt-15 flex-wrap'>
            <div className='flex flex-col gap-3'>
              <label>Nama Skatepark</label>
              <input
                className='inputbox'
                type='text'
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label>Alamat Skatepark</label>
              <input
                className='inputbox'
                type='text'
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
          </div>
          <div className='flex gap-8 mt-15 flex-wrap'>
            <div className='flex flex-col gap-3'>
              <label>Type Skatepark</label>
              <input
                className='inputbox'
                type='text'
                value={tipe}
                onChange={(e) => setTipe(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label>Area Skatepark</label>
              <input
                className='inputbox'
                type='text'
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
          </div>
          <div className='flex gap-8 mt-15 flex-wrap'>
            <div className='flex flex-col gap-3'>
              <label>Latitude Skatepark</label>
              <input
                className='inputbox'
                type='text'
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <label>Longitude Skatepark</label>
              <input
                className='inputbox'
                type='text'
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <div className='flex gap-8 mt-15'>
            <div className='flex flex-col gap-3'>
              <label>Gambar Skatepark</label>
              <input
                className='input-file'
                type='text'
                value={gambar}
                onChange={(e) => setGambar(e.target.value)}
              />
            </div>
            x
          </div>
          <div className='flex flex-col gap-3 mt-15'>
            <label>Deskripsi Skatepark</label>
            <textarea
              className=''
              type='text'
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
            />
          </div>
          <button className='btn-submit mt-15'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditData;

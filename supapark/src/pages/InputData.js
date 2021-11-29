import React, { useState } from 'react';
import { CREATE_SKATEPARK, LOAD_CARD } from '../GraphQL/Queries';
import { useMutation } from '@apollo/client';

const InputData = () => {
  const [aidi] = useState('');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [tipe, setTipe] = useState('');
  const [area, setArea] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [gambar, setGambar] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [createSkatepark, { error, loading }] = useMutation(CREATE_SKATEPARK);

  const onFormSubmit = (e) => {
    e.preventDefault();
    createSkatepark({
      variables: {
        createSkateparkId: aidi,
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
      alert('input data sukses!');
    }
  };
  console.log(aidi);
  if (error) return <h1>error + {error.message}</h1>;
  if (loading) return 'Submitting...';

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Input Data</h1>
      <form onSubmit={onFormSubmit}>
        <div className='flex gap-8 mt-15'>
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
        <div className='flex gap-8 mt-15'>
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
        <div className='flex gap-8 mt-15'>
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
  );
};

export default InputData;

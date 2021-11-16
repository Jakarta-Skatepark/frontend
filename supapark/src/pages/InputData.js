import React from 'react';

const InputData = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Input Data</h1>
      <form>
        <div className='flex flex-col mt-10 gap-2'>
          <label>Nama Skatepark</label>
          <input className='inputbox' type='text' />
        </div>
        <div className='flex flex-col mt-10 gap-2'>
          <label>Alamat Skatepark</label>
          <input className='inputbox' type='text' />
        </div>
        <div className='flex flex-col mt-10 gap-2'>
          <label>Tipe Skatepark</label>
          <input className='inputbox' type='text' />
        </div>
        <div className='flex flex-col mt-10 gap-2'>
          <label>Area Skatepark</label>
          <input className='inputbox' type='text' />
        </div>
        <div className='flex flex-col mt-10 gap-2'>
          <label>Latitude Skatepark</label>
          <input className='inputbox' type='text' />
        </div>
        <div className='flex flex-col mt-10 gap-2'>
          <label>Longitude Skatepark</label>
          <input className='inputbox' type='text' />
        </div>
        <div className='flex flex-col mt-10 gap-2'>
          <label>Rintangan Skatepark</label>
          <input className='inputbox' type='text' />
        </div>
        <div className='flex flex-col mt-10 gap-2'>
          <label>Deskripsi Skatepark</label>
          <input className='inputbox' type='text' />
        </div>
        <button className='btn mt-10'>Submit</button>
      </form>
    </div>
  );
};

export default InputData;

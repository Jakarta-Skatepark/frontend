import React from 'react';

const InputData = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Input Data</h1>
      <form>
        <div className='flex gap-8 mt-15'>
          <div className='flex flex-col gap-3'>
            <label>Nama Skatepark</label>
            <input className='inputbox' type='text' />
          </div>
          <div className='flex flex-col gap-3'>
            <label>Alamat Skatepark</label>
            <input className='inputbox' type='text' />
          </div>
        </div>
        <div className='flex gap-8 mt-15'>
          <div className='flex flex-col gap-3'>
            <label>Type Skatepark</label>
            <input className='inputbox' type='text' />
          </div>
          <div className='flex flex-col gap-3'>
            <label>Area Skatepark</label>
            <input className='inputbox' type='text' />
          </div>
        </div>
        <div className='flex gap-8 mt-15'>
          <div className='flex flex-col gap-3'>
            <label>Latitude Skatepark</label>
            <input className='inputbox' type='text' />
          </div>
          <div className='flex flex-col gap-3'>
            <label>Longitude Skatepark</label>
            <input className='inputbox' type='text' />
          </div>
        </div>
        <div className='flex flex-col gap-3 mt-15'>
          <label>Deskripsi Skatepark</label>
          <textarea className='' type='text' />
        </div>
        <button className='btn-submit mt-15'>Submit</button>
      </form>
    </div>
  );
};

export default InputData;

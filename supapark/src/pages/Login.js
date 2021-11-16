import React from 'react';

export default function Login() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Silahkan Masuk Untuk Admin</h1>
      <form action=''>
        <div className='flex flex-col mt-10 gap-2'>
          <label>Email</label>
          <input className='inputbox' type='text' />
        </div>
        <div className='flex flex-col mt-10 gap-2'>
          <label>Password</label>
          <input className='inputbox' type='password' />
        </div>
        <button className='btn mt-14'>Submit</button>
      </form>
    </div>
  );
}

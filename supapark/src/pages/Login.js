import React, { useState } from 'react';

export default function Login({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
      alert('Login Berhasil!');
      setPassword('');
      setUsername('');
    } else {
      setLoggedIn(false);
      alert('Username & Password Salah');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Login</h1>
      <form onSubmit={onLoginFormSubmit}>
        <div className='flex flex-col mt-15 gap-3'>
          <label>Email</label>
          <input
            className='inputbox'
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            value={username}
          />
        </div>
        <div className='flex flex-col mt-15 gap-3'>
          <label>Password</label>
          <input
            className='inputbox'
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            value={password}
          />
        </div>
        <button className='btn mt-15'>Submit</button>
      </form>
    </div>
  );
}

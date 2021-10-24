import React from 'react';

export default function Card() {
  return (
    <div className='card flex bg-base-2 items-center gap-7 rounded-4'>
      <div>
        <img
          style={{
            width: '364px',
            height: '260px',
            borderRadius: '10px',
            objectFit: 'cover',
          }}
          src='https://fvoutlagmdlxfljpdbck.supabase.in/storage/v1/object/sign/images/skatepark/FOPR_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc2thdGVwYXJrL0ZPUFJfMS5qcGciLCJpYXQiOjE2MzUwNTQxNTgsImV4cCI6MTk1MDQxNDE1OH0.A9J2JAAJJAmaGd7tS3ET6nThxw7SHQtau5rHGW0Q2Pk'
          alt='FOPasarRebo'
        />
      </div>

      <div>
        <h3>Scratch Visible Store & Skate Park</h3>
        <p className='text-8 my-7'>Cipinang Melayu, Jakarta Timur</p>
        <h2>
          14.2
          <span className='ml-7'>KM</span>
        </h2>
      </div>
    </div>
  );
}

import React from 'react';
import LogForm from '../components/LogForm';
import Navbar from '../components/Navbar';

const Log = () => {
  return (
    <main className='log'>
      <Navbar />
      <div className="form">
        <h2>Log to your account</h2>
        <LogForm />
      </div>
    </main>
  );
};

export default Log;
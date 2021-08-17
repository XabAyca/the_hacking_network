import React from 'react';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <main className='register'>
      <Navbar />
      <div className='form'>
        <h2>Register</h2>
        <p>And win a gift... <small>our eternal gratitude !</small></p>
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
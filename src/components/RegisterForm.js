import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerFetch } from '../redux/api/fetch';

const RegisterForm = () => {
  const dispatch = useDispatch()
  const register = useSelector(state => state.register)

  const createData = (e) => {
    e.preventDefault();
    let username = document.querySelector('#register-name').value;
    let email = document.querySelector('#register-email').value;
    let password = document.querySelector('#register-password').value;
    dispatch(registerFetch(username, email, password));
  }

  return (
    <div className='register-form'>
      <form onSubmit={createData}>
        <input id='register-name' type='text' placeholder='Username...'></input>
        <input id='register-email' type='email' placeholder='Email...'></input>
        <input id='register-password' type='password' placeholder='Password...'></input>
        <p className='error'>{register.error}</p>
        <button className='submit-btn' type='submit'>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
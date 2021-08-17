import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginFetch } from '../redux/api/fetch';

const LogForm = () => {
  const log = useSelector((state) => state.login)
  const dispatch = useDispatch()
  
  const createData = (e) => {
    e.preventDefault();
    let username = document.querySelector('#login-name').value;
    let password = document.querySelector('#login-password').value;
    dispatch(loginFetch(username, password));
  };

  return (
    <div className='log-form'>
      <form onSubmit={createData}>
        <input id='login-name' type='text' placeholder='Username or email...'></input>
        <input id='login-password' type='password' placeholder='Password...'></input>
        <p className='error'>{log.error}</p>
        <button className='submit-btn' type='submit'>Register</button>
      </form>
      
    </div>
  );
};

export default LogForm;
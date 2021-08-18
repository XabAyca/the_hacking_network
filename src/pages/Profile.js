import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { profileFetch, updateProfileFetch } from '../redux/api/fetch';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';

const Profile = () => {
 
  const profile = useSelector((state) => state.profile.profile)
  const [username, setUsername] = useState(profile.username);
  const [description, setDescription] = useState(profile.description || "");
  const dispatch = useDispatch();
  let history = useHistory();



  const updateProfile = (e) => {
    e.preventDefault();
    dispatch(updateProfileFetch(username, description))
    setTimeout(() => {
      dispatch(profileFetch())
    },100)
    setTimeout(() => {
      history.push("/");
    }, 1000)
    setUsername("");
    setDescription("");
  };

  return (
    <main className='profile'>
      <Navbar />
      <div className='form'>
        <h1>Profile</h1>
        <p>Your E-mail : {profile.email}</p>
        <form className='profile-form'>
          <input type='text' placeholder='Username...' value={username} onChange={(e) => setUsername(e.target.value)}></input>
          <textarea className='description' type='text' placeholder='Description...' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <small>{}</small>
          <button onClick={(e)=>updateProfile(e)} type='submit' className='profile-btn'>Save Modification</button>
        </form>
      </div>
    </main>
  );
};

export default Profile;
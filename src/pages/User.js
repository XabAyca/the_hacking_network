import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PostsUser from '../components/PostsUser';
import { userProfileFetch } from '../redux/api/fetch';

const User = () => {
  const {userId} =useParams()
  const userProfile = useSelector((state)=>state.userProfile.userProfile)
  const dispatch = useDispatch()

  useEffect(() => {
    const getUserProfile = () => {
      dispatch(userProfileFetch(userId))
    }
    getUserProfile()
  }, []);
  
  
    
  return (
    <main className="user">
      <Navbar />
      {

      }
      <h2>{userProfile && userProfile.username}</h2>
      <h3>{userProfile && userProfile.email}</h3>
      <p>{userProfile.description ? userProfile.description: "No description ..."}</p>
      <PostsUser/>
      
    </main>
  );
};

export default User;
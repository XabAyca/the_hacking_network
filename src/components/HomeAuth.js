import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostFetch, postsFetch } from '../redux/api/fetch';
import PostsAuth from './PostsAuth';

const HomeAuth = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch()
  console.log(profile.profile.id);

  const createPost = (e) => {
    e.preventDefault();
    let text = document.querySelector('.input-home').value;
    document.querySelector('.input-home').value = '';
    let user = profile.profile.id
    dispatch(createPostFetch(text, user))
    setTimeout(() => {
      dispatch(postsFetch())
    },500)
  }

  return (
    <div className='home-auth'>
      <input className='input-home'type='text' placeholder='Write your post here...'></input>
      <button className='post-submit-btn'onClick={createPost}>Publish</button>
      <PostsAuth/>
    </div>
  );
};

export default HomeAuth;
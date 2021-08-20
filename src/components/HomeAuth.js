import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostFetch, postsFetch } from '../redux/api/fetch';
import { AppInstall } from './AppInstall';
import PostsAuth from './PostsAuth';

const HomeAuth = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch()
  const {count}= useContext(AppInstall)

  const createPost = (e) => {
    e.preventDefault();
    count();
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
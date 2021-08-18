import React from 'react';
import PostsVisit from './PostsVisit';

const HomeVisit = () => {
  return (
    <div className='home-visit'>
      <h2>Welcome to T.H.Network</h2>
      <p>Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.</p>
      <h3>Some posts ... register to see more</h3>
      <PostsVisit/>
    </div>
  );
};

export default HomeVisit;
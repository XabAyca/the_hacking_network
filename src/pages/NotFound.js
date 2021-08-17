import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='not-found'>
      <h1>OUPSS</h1>
      <h1>404</h1>
      <h2>Nothing to see here...</h2>
      <Link className='home-page-btn'to="/">Home page</Link>
    </main>
  );
};

export default NotFound;
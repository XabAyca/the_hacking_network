import Cookies from 'js-cookie';
import React from 'react';
import HomeAuth from '../components/HomeAuth';
import HomeVisit from '../components/HomeVisit';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <main className='home'>
      <Navbar />
      {
        Cookies.get('token') === undefined ? <HomeVisit /> : <HomeAuth />
      }
    </main>
  );
};

export default Home;
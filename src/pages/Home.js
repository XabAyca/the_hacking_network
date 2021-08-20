import Cookies from 'js-cookie';
import React from 'react';
import HomeAuth from '../components/HomeAuth';
import HomeVisit from '../components/HomeVisit';
import InstallApp from '../components/InstallApp';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <main className='home'>
      <Navbar />
      <InstallApp/>
      {
        Cookies.get('token') === undefined ? <HomeVisit /> : <HomeAuth />
      }
    </main>
  );
};

export default Home;
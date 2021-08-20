import React, { useContext } from 'react';
import { AppInstall } from './AppInstall';

const InstallApp = () => {
  const {install}= useContext(AppInstall)
  const exit = () => {
    document.querySelector('.install-app').style.opacity = '0';
  }
  return (
    <span className='install-app'>
      <p>Install the application and go faster</p>
        
      <i onClick={exit} class="fas fa-times"></i>
      <div className='install-logo'> 
        <i onClick={install} class="fas fa-download"></i>
        <p onClick={install}  >Install</p>
      </div>

    </span>
  );
};

export default InstallApp;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppInstall } from './components/AppInstall';
import Home from './pages/Home';
import Log from './pages/Log';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import User from './pages/User';
import { postsFetch, profileFetch } from './redux/api/fetch';
import './styles/index.scss'

const App = () => {
  const dispatch = useDispatch()
  const register = useSelector((state) => state.register.register);
  const login = useSelector((state) => state.login.user);
  const [postsCounter, setPostsCounter] = useState(0);
  const [deferredPrompt, setDeferredPrompt] = useState("")
  
  const isAuth = () => {
    return (
      (register === '' && login === '') ? false : true
    );
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      isAuth() ? (
        <Redirect to={{ pathname: '/login' }} />
      ) : (
        <Component {...props} />
      )
    )} />
  );

  const getPosts = () => {
    dispatch(postsFetch())
  }
  getPosts()

  const getUser = () => {
    return (
      isAuth() ? dispatch(profileFetch()) : null
    )
  };

  useEffect(() => {
    dispatch(profileFetch())
  }, [dispatch])

  getUser()


  
  const showInstallPromotion = () => {
    if (postsCounter === 3) {
      document.querySelector('.install-app').style.opacity = '1';
      setPostsCounter(0)
    } else {
      setPostsCounter(postsCounter + 1 )
    }
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    setDeferredPrompt(e);
    
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  });

  const installBtn = async () => {
    // Hide the app provided install promotion
    document.querySelector('.install-app').style.opacity = '0';
    // Show the install prompt
    console.log(deferredPrompt);
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    getPWADisplayMode()
  };

  function getPWADisplayMode() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (document.referrer.startsWith('android-app://')) {
      return 'twa';
    } else if (navigator.standalone || isStandalone) {
      return 'standalone'
    };
  return 'browser';
  };

  window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
    let displayMode = 'browser';
    if (evt.matches) {
      displayMode = 'standalone';
    }
    // Log display mode change to analytics
    console.log('DISPLAY_MODE_CHANGED', displayMode);
  });

  
  
  return (
    <AppInstall.Provider value={{
      count: showInstallPromotion,
      install:installBtn
    }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" >
          {isAuth() ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route exact path="/login">
          {isAuth() ? <Redirect to="/" /> : <Log />}
        </Route>
        <PrivateRoute path='/profile' >
          <Profile />
        </PrivateRoute>
        <Route path="/user/:userId" component={User} />
        <Route path="/" component={NotFound} />
      </Switch>

    </AppInstall.Provider>
  );
};

export default App;


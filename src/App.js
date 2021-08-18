import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
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
  },[])  

  getUser()

  
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" >
        {isAuth ()? <Redirect to="/"/> : <Register/>}
      </Route>
      <Route exact path="/login">
        {isAuth ()? <Redirect to="/"/> : <Log/>}
      </Route>
      <PrivateRoute path='/profile' >
        <Profile />
      </PrivateRoute>
      <Route path="/user/:userId" component={User}/>
      <Route path="/" component={NotFound}/>
    </Switch>
  );
};

export default App;
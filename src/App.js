import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Log from './pages/Log';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import './styles/index.scss'

const App = () => {
  const register = useSelector((state) => state.register.register)
  
  const isAuth = () => {
          console.log(register);
    return (

      register ? true : false
    )
  };

  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" >
        {isAuth()? <Redirect to="/"/> : <Register/>}
      </Route>
      <Route exact path="/login">
        {isAuth()? <Redirect to="/"/> : <Log/>}
      </Route>
      <Route path="/" component={NotFound}/>
    </Switch>
  );
};

export default App;
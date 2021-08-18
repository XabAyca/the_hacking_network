import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../redux/api/fetch';

const Navbar = () => {
  const dispatch = useDispatch()

	const isAuth = () => {
		return (
			Cookies.get('token') === undefined ? false : true
		);
  };
 

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <i className="fab fa-hackerrank"></i>
        <h1>T.H.Network &lt;/&gt;</h1>
      </div>
      <ul>
        <NavLink to="/" className='navbar-link' activeClassName='navber-link-active'>
          <li>Home</li>
        </NavLink>
        {isAuth() ?
          <>
            <NavLink to="/profile" className='navbar-link' activeClassName='navber-link-active'>
              <li>My Profile</li>
            </NavLink>
            <NavLink to="" className='navbar-link' activeClassName='navber-link-active'>
              <li onClick={() => dispatch(logout())}>Disconnect</li>
            </NavLink>
          </>
          :
          <>
            <NavLink to="/register" className='navbar-link' activeClassName='navber-link-active'>
              <li>Register</li>
            </NavLink>
            <NavLink to="/login" className='navbar-link' activeClassName='navber-link-active'>
              <li>login</li>
            </NavLink>
          </>
        }
      </ul>
    </div>
  );
};

export default Navbar;
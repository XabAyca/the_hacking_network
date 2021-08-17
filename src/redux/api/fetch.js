import Cookies from "js-cookie";
import { fetchLoginFailure, fetchLoginRequest, fetchLoginSuccess } from "../login/loginActions";
import { fetchRegisterFailure, fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterUnregister } from "../register/registerActions"

export const registerFetch = (username, email, password) => {
  const data = {
    username: username,
    email: email,
    password: password
  }
  return (dispatch) => {
    dispatch(fetchRegisterRequest());
    fetch('http://localhost:1337/auth/local/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchRegisterFailure(response.message[0].messages[0].message))
        } else {
          Cookies.set('token', response.jwt)
          dispatch(fetchRegisterSuccess(response.user))
        }
      })
  }
};

export const logout = () => {
  return (dispatch) => {
    dispatch(fetchRegisterUnregister())
  }
}

export const loginFetch = (username, password) => {
  const data = {
    identifier: username,
    password: password
  }
  return (dispatch) => {
    dispatch(fetchLoginRequest())
    fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((reponse) => reponse.json())
      .then((response) => {
        if (response.error) {
          dispatch(fetchLoginFailure(response.message[0].messages[0].message))
        } else {
          Cookies.set('token', response.jwt)
          dispatch(fetchLoginSuccess(response.user))
        }
      })
  }
}
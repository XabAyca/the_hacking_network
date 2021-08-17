import Cookies from "js-cookie"
import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_LOGOUT, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS } from "./loginTypes"

const initialState = {
  loading: false,
  error: "",
  user:Cookies.get('token')
}

export const loginReducer = (state = initialState, { type, error, user }) => {
  switch (type) {

    case FETCH_LOGIN_REQUEST:
      return { ...state, loading: true }
    case FETCH_LOGIN_SUCCESS:
      return { ...state, loading: false, user: user }
    case FETCH_LOGIN_FAILURE:
      return { ...state, loading: false, error: error }
    case FETCH_LOGIN_LOGOUT:
      Cookies.remove('token')
      return { ...state, loading: false , user:Cookies.get('token') }

    default:
      return state
  }
};

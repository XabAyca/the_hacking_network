import { FETCH_LOGIN_FAILURE, FETCH_LOGIN_LOGOUT, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS } from "./loginTypes"

const initialState = {
  loading: false,
  error: "",
  user:""
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
      return { ...state, loading: false , user:"" , error:""}

    default:
      return state
  }
};

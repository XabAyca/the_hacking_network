import Cookies from "js-cookie"
import { FETCH_REGISTER_FAILURE, FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_UNREGISTER } from "./registerTypes"

const initialState = {
  loading: false,
  error: '',
  register:Cookies.get('token')
}

export const registerReducer = (state = initialState, { type, error , register }) => {
  switch (type) {

  case FETCH_REGISTER_REQUEST:
      return { ...state, loading: true }
    
  case FETCH_REGISTER_SUCCESS:
      return { ...state, loading: false , register:register }
    
  case FETCH_REGISTER_FAILURE:
      return { ...state, loading: false, error:error }
    
    case FETCH_REGISTER_UNREGISTER:
      Cookies.remove('token')
      return { ...state, register:Cookies.get('token'),error:"" }

  default:
    return state
  }
}

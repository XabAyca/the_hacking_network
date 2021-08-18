import { FETCH_PROFILE_DELETE, FETCH_PROFILE_FAILURE, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS } from "./profileTypes";

const initialState = {
  loading: false,
  error: '',
  profile:''
}

export const profileReducer = (state = initialState, { type, error, profile }) => {
  switch (type) {

    case FETCH_PROFILE_REQUEST:
      return { ...state, loading: true }
    
    case FETCH_PROFILE_SUCCESS:
      return { ...state, loading: false, profile: profile }
    
    case FETCH_PROFILE_FAILURE:
      return { ...state, loading: false, error: error }
    
    case FETCH_PROFILE_DELETE:
      return { ...state, loading: false, profile:'' }
    
    default:
      return state
  }
};
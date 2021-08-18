import { FETCH_USER_PROFILE_FAILURE, FETCH_USER_PROFILE_REQUEST, FETCH_USER_PROFILE_SUCCESS } from "./userProfileTypes";

const initialState = {
  loading: false,
  error: '',
  userProfile:''
}

export const userProfileReducer = (state = initialState, { type, error, userProfile }) => {
  switch (type) {

    case FETCH_USER_PROFILE_REQUEST:
      return { ...state, loading: true }
    
    case FETCH_USER_PROFILE_SUCCESS:
      return { ...state, loading: false, userProfile: userProfile }
    
    case FETCH_USER_PROFILE_FAILURE:
      return { ...state, loading: false, error: error }
    
    default:
      return state
  }
};
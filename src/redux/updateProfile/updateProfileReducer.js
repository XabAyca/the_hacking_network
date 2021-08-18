import { FETCH_PROFILE_UPDATE_FAILURE, FETCH_PROFILE_UPDATE_REQUEST, FETCH_PROFILE_UPDATE_SUCCESS } from "./updateProfileTypes";

const initialState = {
  loading: false,
  error: '',
  profileUpdated:''
}

export const updateProfileReducer = (state = initialState, { type, error, profileUpdated }) => {
  switch (type) {

    case FETCH_PROFILE_UPDATE_REQUEST:
      return { ...state, loading: true }
    
    case FETCH_PROFILE_UPDATE_SUCCESS:
      return { ...state, loading: false, profileUpdated: profileUpdated }
    
    case FETCH_PROFILE_UPDATE_FAILURE:
      return { ...state, loading: false, error: error }
    
    default:
      return state
  }
};
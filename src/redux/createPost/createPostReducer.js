import { FETCH_CREATE_POST_FAILURE, FETCH_CREATE_POST_REQUEST, FETCH_CREATE_POST_SUCCESS } from "./createPostTypes";

const initialState = {
  loading: false,
  error: '',
  post:'undefined'
}

export const createPostReducer = (state = initialState, { type, error, post }) => {
  switch (type) {

    case FETCH_CREATE_POST_REQUEST:
      return { ...state, loading: true }
    
    case FETCH_CREATE_POST_SUCCESS:
      return { ...state, loading: false, post: post }
    
    case FETCH_CREATE_POST_FAILURE:
      return { ...state, loading: false, error: error }
    
    default:
      return state
  }
};
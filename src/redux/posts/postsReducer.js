import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./postsTypes";

const initialState = {
  loading: false,
  error: '',
  posts:undefined
}

export const postsReducer = (state = initialState, { type, error, posts }) => {
  switch (type) {

    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true }
    
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: posts }
    
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: error }
    
    default:
      return state
  }
};
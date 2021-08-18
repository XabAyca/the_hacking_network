import { FETCH_GET_USER_POSTS_FAILURE, FETCH_GET_USER_POSTS_REQUEST, FETCH_GET_USER_POSTS_SUCCESS } from "./getUserPostsTypes";

const initialState = {
  loading: false,
  error: "",
  userPosts:""
}

export const getUserPostsReducer = (state = initialState, { type, error, userPosts }) => {
  switch (type) {

    case FETCH_GET_USER_POSTS_REQUEST:
      return { ...state, loading: true }
    case FETCH_GET_USER_POSTS_SUCCESS:
      return { ...state, loading: false, userPosts: userPosts }
    case FETCH_GET_USER_POSTS_FAILURE:
      return { ...state, loading: false, error: error }
    default:
      return state
  }
};

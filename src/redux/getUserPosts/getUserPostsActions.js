import { FETCH_GET_USER_POSTS_FAILURE, FETCH_GET_USER_POSTS_REQUEST, FETCH_GET_USER_POSTS_SUCCESS } from "./getUserPostsTypes";

export const fetchGetUserPostsRequest = () => {
  return ({
    type: FETCH_GET_USER_POSTS_REQUEST
  })
};
export const fetchGetUserPostsSuccess = (userPosts) => {
  return ({
    type: FETCH_GET_USER_POSTS_SUCCESS,
    userPosts
  })
};
export const fetchGetUserPostsFailure = (error) => {
  return ({
    type: FETCH_GET_USER_POSTS_FAILURE,
    error
  })
};

import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./postsTypes"

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}
export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts
  }
}
export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    error
  }
}
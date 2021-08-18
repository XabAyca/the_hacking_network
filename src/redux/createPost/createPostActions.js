import { FETCH_CREATE_POST_FAILURE, FETCH_CREATE_POST_REQUEST, FETCH_CREATE_POST_SUCCESS } from "./createPostTypes"

export const fetchCreatePostRequest = () => {
  return {
    type: FETCH_CREATE_POST_REQUEST
  }
}
export const fetchCreatePostSuccess = (post) => {
  return {
    type: FETCH_CREATE_POST_SUCCESS,
    post
  }
}
export const fetchCreatePostFailure = (error) => {
  return {
    type: FETCH_CREATE_POST_FAILURE,
    error
  }
}
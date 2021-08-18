import { FETCH_DELETE_POST_FAILURE, FETCH_DELETE_POST_REQUEST, FETCH_DELETE_POST_SUCCESS } from "./deletePostTypes"

export const fetchDeletePostRequest = () => {
  return {
    type: FETCH_DELETE_POST_REQUEST
  }
}
export const fetchDeletePostSuccess = (post) => {
  return {
    type: FETCH_DELETE_POST_SUCCESS,
    post
  }
}
export const fetchDeletePostFailure = (error) => {
  return {
    type: FETCH_DELETE_POST_FAILURE,
    error
  }
}
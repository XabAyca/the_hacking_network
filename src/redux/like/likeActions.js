import { FETCH_LIKE_FAILURE, FETCH_LIKE_REQUEST, FETCH_LIKE_SUCCESS } from "./likeTypes";

export const fetchLikeRequest = () => {
  return ({
    type: FETCH_LIKE_REQUEST
  })
};
export const fetchLikeSuccess = (likedPost) => {
  return ({
    type: FETCH_LIKE_SUCCESS,
    likedPost
  })
};
export const fetchLikeFailure = (error) => {
  return ({
    type: FETCH_LIKE_FAILURE,
    error
  })
};
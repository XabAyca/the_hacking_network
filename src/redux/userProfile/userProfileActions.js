import { FETCH_USER_PROFILE_FAILURE, FETCH_USER_PROFILE_REQUEST, FETCH_USER_PROFILE_SUCCESS } from "./userProfileTypes"

export const fetchUserProfileRequest = () => {
  return {
    type: FETCH_USER_PROFILE_REQUEST
  }
}
export const fetchUserProfileSuccess = (userProfile) => {
  return {
    type: FETCH_USER_PROFILE_SUCCESS,
    userProfile
  }
}
export const fetchUserProfileFailure = (error) => {
  return {
    type: FETCH_USER_PROFILE_FAILURE,
    error
  }
}
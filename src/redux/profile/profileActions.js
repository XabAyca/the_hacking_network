import { FETCH_PROFILE_DELETE, FETCH_PROFILE_FAILURE, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS } from "./profileTypes"

export const fetchProfileRequest = () => {
  return {
    type: FETCH_PROFILE_REQUEST
  }
}
export const fetchProfileSuccess = (profile) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    profile
  }
}
export const fetchProfileFailure = (error) => {
  return {
    type: FETCH_PROFILE_FAILURE,
    error
  }
}
export const fetchProfileDelete = () => {
  return {
    type: FETCH_PROFILE_DELETE,
  }
}
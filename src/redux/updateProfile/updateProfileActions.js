import { FETCH_PROFILE_UPDATE_FAILURE, FETCH_PROFILE_UPDATE_REQUEST, FETCH_PROFILE_UPDATE_SUCCESS } from "./updateProfileTypes"

export const fetchProfileUpdateRequest = () => {
  return {
    type: FETCH_PROFILE_UPDATE_REQUEST
  }
}
export const fetchProfileUpdateSuccess = (profile) => {
  return {
    type: FETCH_PROFILE_UPDATE_SUCCESS,
    profile
  }
}
export const fetchProfileUpdateFailure = (error) => {
  return {
    type: FETCH_PROFILE_UPDATE_FAILURE,
    error
  }
}
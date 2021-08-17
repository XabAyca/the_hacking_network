import { FETCH_REGISTER_FAILURE, FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_UNREGISTER } from "./registerTypes"

export const fetchRegisterRequest = () => {
  return {
    type: FETCH_REGISTER_REQUEST
  }
}
export const fetchRegisterSuccess = (register) => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    register
  }
}
export const fetchRegisterFailure = (error) => {
  return {
    type: FETCH_REGISTER_FAILURE,
    error
  }
}
export const fetchRegisterUnregister = () => {
  return {
    type: FETCH_REGISTER_UNREGISTER
  }
}
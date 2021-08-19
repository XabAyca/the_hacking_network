import { FETCH_LIKE_FAILURE, FETCH_LIKE_REQUEST, FETCH_LIKE_SUCCESS } from "./likeTypes";

const initialState = {
  loading: false,
  error: "",
  likedPost:""
}

export const likeReducer = (state = initialState, { type, error, likedPost }) => {
  switch (type) {

    case FETCH_LIKE_REQUEST:
      return { ...state, loading: true }
    case FETCH_LIKE_SUCCESS:
      return { ...state, loading: false, likedPost: likedPost }
    case FETCH_LIKE_FAILURE:
      return { ...state, loading: false, error: error }

    default:
      return state
  }
};

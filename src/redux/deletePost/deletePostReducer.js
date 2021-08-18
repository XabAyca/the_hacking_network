import { FETCH_DELETE_POST_FAILURE, FETCH_DELETE_POST_REQUEST, FETCH_DELETE_POST_SUCCESS } from "./deletePostTypes";

const initialState = {
  loading: false,
  error: '',
  deletedPost:'undefined'
}

export const deletePostReducer = (state = initialState, { type, error, deletedPost }) => {
  switch (type) {

    case FETCH_DELETE_POST_REQUEST:
      return { ...state, loading: true }
    
    case FETCH_DELETE_POST_SUCCESS:
      return { ...state, loading: false, deletedPost: deletedPost }
    
    case FETCH_DELETE_POST_FAILURE:
      return { ...state, loading: false, deletedPost: deletedPost }
    
    default:
      return state
  }
};
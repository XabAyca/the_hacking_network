import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { registerReducer } from "./register/registerReducer";
import thunkMiddleware from 'redux-thunk';
import { loginReducer } from "./login/loginReducer";
import { profileReducer } from "./profile/profileReducer";
import { updateProfileReducer } from "./updateProfile/updateProfileReducer";
import { postsReducer } from "./posts/postsReducer";
import { createPostReducer } from "./createPost/createPostReducer";
import { deletePostReducer } from "./deletePost/deletePostReducer";
import { userProfileReducer } from "./userProfile/userprofileReducer";
import { getUserPostsReducer } from "./getUserPosts/getUserPostsReducer";

const rootReducers = combineReducers({
  register: registerReducer,
  login: loginReducer,
  profile: profileReducer,
  profileUpdated: updateProfileReducer,
  posts: postsReducer,
  createPost: createPostReducer,
  deletedPost: deletePostReducer,
  userProfile: userProfileReducer,
  userPosts:getUserPostsReducer
});

export  const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { registerReducer } from "./register/registerReducer";
import thunkMiddleware from 'redux-thunk';
import { loginReducer } from "./login/loginReducer";

const rootReducers = combineReducers({
  register: registerReducer,
  login:loginReducer
})

export  const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


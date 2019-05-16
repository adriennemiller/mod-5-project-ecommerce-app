import { createStore, combineReducers } from 'redux';
import signUp from '../features/signup/reducer';
import logIn from '../features/login/reducer';

const rootReducer = combineReducers({ signUp, logIn });

const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;

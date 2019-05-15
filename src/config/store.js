import { createStore, combineReducers } from "redux";


const rootReducer = combineReducers({});

const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;

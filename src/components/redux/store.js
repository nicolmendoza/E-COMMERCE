import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import {handleCart } from "./reducer/handleCart.js";

const rootReducer = combineReducers({
  cart: handleCart,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const generarStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

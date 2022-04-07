import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import {handleCart,handleProducts } from "./reducer/handleCart.js";

const rootReducer = combineReducers({
  data: handleCart,
  products:handleProducts
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const generarStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

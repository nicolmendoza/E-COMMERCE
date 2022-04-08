import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'


//importamos los reducer
import {handleCart } from "./reducer/handleCart.js";
import {handleProducts} from './reducer/handleProduct.js'



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

//el store retorna todo lo que estamos conbinando en rootReducer
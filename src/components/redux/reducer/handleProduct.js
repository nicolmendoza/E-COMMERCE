import axios from "axios";

const products = {
    allProducts: [],
    oneProduct: [],
  };


//Types

const GETALLPRODUCTS="GETALLPRODUCTS"
const GETONEPRODUCT="GETONEPRODUCT"


  //Reducer
  export const handleProducts = (state = products, action) => {
    const products = action.payload;
    switch (action.type) {
      case GETALLPRODUCTS:
        return { ...state, allProducts: products };
        case GETONEPRODUCT:
          return { ...state, oneProduct: products };
      default:
        return state;
    }
  };


//action
  export const getAllProducts = () => async (dispatch, getState) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({
        type: GETALLPRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getOneProduct = () => async (dispatch, getState) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch({
        type: GETALLPRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
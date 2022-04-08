import axios from "axios";

const cart = [];

const products = {
  allProducts: [],
  oneProduct: [],
};

//reducer
export const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM": {
      const exits = state.find((x) => x.id === product.id);
      console.log(exits);
      if (exits) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    }
    case "DELETEITEM": {
      const exits = state.find((x) => x.id === product.id);
      if (exits.qty === 1) {
        return state.filter((x) => x.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    }

    case "DELETEALL": {
      return state.filter((x) => x.id !== product.id);
    }
    case "DELETE": {
      return [];
    }
    default:
      return state;
  }
};

export const handleProducts = (state = products, action) => {
  const products = action.payload;
  switch (action.type) {
    case "GETALLPRODUCTS":
      return { ...state, allProducts: products };
      case "GETONEPRODUCT":
        return { ...state, oneProduct: products };
    default:
      return state;
  }
};

// acciones
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const deleteCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};

export const deleteCartAll = () => {
  return {
    type: "DELETE",
    payload: []
  };
};

export const deleteAllCart = (product) => {
  return {
    type: "DELETEALL",
    payload: product,
  };
};

export const getAllProducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: "GETALLPRODUCTS",
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
      type: "GETALLPRODUCTS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
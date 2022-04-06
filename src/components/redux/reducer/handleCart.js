const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM": {
      const exits = cart.find((x) => x.id === product.id);
      if (exits)
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );

      const product = action.payload;
      return [
        ...state,
        {
          ...product,
          qty: 1,
        },
      ];
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
    default:
      break;
  }
};

export default handleCart;

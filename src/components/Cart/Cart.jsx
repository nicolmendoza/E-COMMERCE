import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartColumns from "./CartColumns.jsx";
import {
  addCart,
  deleteCart,
  deleteAllCart,
} from "../redux/reducer/handleCart.js";
import EmptyCart from "./EmptyCart.jsx";
import CartItem from "./CartItem.jsx";
import CartTotal from "./CartTotal.jsx";

const Cart = () => {
  useEffect(() => {}, []);

  const products = useSelector((products) => products.data);
  console.log(products);

  const total = () => {
    let total = 0;
    const totalArray = products.map((item) => item.price * item.qty);
    for (let i of totalArray) total += i;
    return total;
  };
  console.log(total());
  return (
    <>
      {products.length > 0 ? (
        <>
          <CartColumns />
          <CartItem products={products} />
          <CartTotal total={total()} />
        </>
      ) : (
        <EmptyCart />
        
      )}
    </>
  );
};

export default Cart;

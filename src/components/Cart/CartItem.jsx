import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CartColumns from "./CartColumns.jsx";
import {
  addCart,
  deleteCart,
  deleteAllCart,
} from "../redux/reducer/handleCart.js";

const CartItem = ({ products }) => {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const deleteProduct = (product) => {
    dispatch(deleteCart(product));
  };

  const deleteAll = (product) => {
    dispatch(deleteAllCart(product));
  };

  // const products=products
  return (
    <>
      {products.map((item) => (
        <DivProductCart>
          <div className="row my-2 text-capitalize text-center div-principal-cart">
            <div className="col-10 mx-auto col-lg-2 mt-4">
              <img
                src={item.image}
                alt="product"
                className="img-fluid"
                style={{ height: "5rem", width: "5rem" }}
              />
            </div>
            <div className="col-10 mx-auto col-lg-2 my-0">
              <span className="d-lg-none">product : </span> <strong>{item.title}</strong>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-0">
              <span className="d-lg-none">price : $</span>
              <strong>S/. {item.price}</strong>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 my-0">
              <div className="d-flex justify-content-center">
                <span
                  className="btn btn-black mx-1"
                  onClick={() => deleteProduct(item)}
                >
                  {" "}
                  -
                </span>
                <span className="btn btn-black mx-1">{item.qty}</span>
                <span
                  className="btn btn-black mx-1"
                  onClick={() => addProduct(item)}
                >
                  +
                </span>
              </div>
            </div>
            {/*  */}
            <div className="col-10 mx-auto col-lg-2 my-0">
              <div className="cart-icon" onClick={() => deleteAll(item)}>
                <i className="fas fa-trash"></i>
              </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-0">
              <strong> $ {item.price * item.qty}</strong>
            </div>
          </div>
        </DivProductCart>
      ))}
    </>
  );
};

export default CartItem;

const DivProductCart = styled.div`
.div-principal-cart{
  display:flex ;
  align-items:center;
 
}


.btn-black {
  background: transparent;
  text-transform: capitalize;
  font-size: 1rem !important;
  color: var(--mainOrange);
  font-weight:bold;
  border-radius: 0 !important;
  border: 0.1rem solid var(--mainDark) !important;
}

.btn-black:hover {
  background: var(--mainDark) !important;
  color: white !important;
}
  }
  @media (max-width: 992px) {
 
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
  }
`;

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DivTotal } from "../../style-components/elements/CartStyle";
import { deleteAllCart } from "../redux/reducer/handleCart";
const CartTotal = ({ total }) => {
  const dispatch = useDispatch();

  const deleteAllCart = () => {
    console.log('hi')
    dispatch(deleteAllCart());
  };

  return (
    <>
      <DivTotal className=" container mx-auto">
        <div className="row justify-content-center mx-auto">
          <div className="col-10 mt-2 ml-sm-5 ml-md  col-sm-8 text capitalize text-right mx-auto">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => deleteAllCart()}
            >
              clear cart
            </button>
            <h5>
              <span className="text-title">Total:</span>

              <strong>${total}</strong>
            </h5>
          </div>
        </div>
      </DivTotal>
    </>
  );
};

export default CartTotal;

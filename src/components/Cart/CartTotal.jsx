import React from "react";
import { Link } from "react-router-dom";

const CartTotal = ({ total }) => {
  return (
    <>
      <div className=" container mx-auto">
        <div className="row justify-content-center mx-auto">
          <div className="col-10 mt-2 ml-sm-5 ml-md  col-sm-8 text capitalize text-right mx-auto">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
              >
                clear cart
              </button>
            </Link>

            <h5>
              <span className="text-title"> Total:</span>
              <strong>${total}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;

import React, { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Link } from "react-router-dom";
const Navbar = () => {

useEffect(()=>{

  console.log(state)
},[])

  const state = useSelector((state) => state.cart.length);
  console.log(state)
  return (
    <>

<div>
      <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm w-100">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-4" to={"/"}>
           E-COMMERCE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">

            </ul>
            <div className="buttons">

              <a className="btn btn-outline-dark">
                <i className="fa fa-user-plus me-1"></i>
                Log Out
              </a>
              <Link to={"/cart"} className="btn btn-outline-dark">
                <i className="fa fa-cart me-1"></i>
                Cart {state}
              </Link>
            </div>
          </div>
        </div>
      </NavWrapper>
    </div>




        


    </>
  );
};

const NavWrapper = styled.nav`
  font-family: "Spartan", sans-serif !important;
  color: "var(--mainOrange)" !important;
  background: #ff6e00 !important;
  .navbar-brand {
    color: white !important;
    font-size: 1.7rem;
    text-transform: capitalize;
  }
`;

export default Navbar;

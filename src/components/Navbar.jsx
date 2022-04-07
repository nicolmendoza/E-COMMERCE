import React, { useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { useSelector } from "react-redux";
import { NavWrapper } from "../style-components/elements/NavBar";

import { Link, Redirect } from "react-router-dom";
const Navbar = () => {
  const state = useSelector((state) => state.data.length);
  console.log(state);
  const token = localStorage.getItem("token");
  const logOut = () => {
    localStorage.clear()
    window.reload()
    window.location.href='/login'
  };

  return (
    <>
      <div>
        <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm w-100">
          <div className="container-fluid">
 

            {token ? (
              <>           <Link className="navbar-brand fw-bold fs-4" to={"/"}>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0 "></ul>
                  <div className="buttons">
                    <Link
                      to={"/login"}
                      className="btn btn-outline-dark"
                      onClick={() => logOut()}
                    >
                      <i className="fa fa-user-plus me-1"></i>
                      Log Out
                    </Link>
                    <Link to={"/cart"} className="btn btn-outline-dark">
                      <i className="fa fa-cart me-1"></i>
                      Cart {state}
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <h2 className="navbar-brand fw-bold fs-4" >
              E-COMMERCE
            </h2>
            )}
          </div>
        </NavWrapper>
      </div>
    </>
  );
};

export default Navbar;

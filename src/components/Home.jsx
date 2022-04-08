import React from "react";

import { DivHome } from "../style-components/elements/Home";
import Products from "./Products";
import img from '../img/gifShop.gif'

const Home = () => {
  return (
    <DivHome className="container mt-20">
      <div class="card bg-dark text-white">
        <img src={img} class="card-img" height="400px" />
        <div class="card-img-overlay">
          <div className="container-text">
            <h5 class="card-title display-3">TU E-COMMERCE<i className="fa fa-cart me-1"></i></h5>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <Products></Products>
    </DivHome>
  );
};

export default Home;


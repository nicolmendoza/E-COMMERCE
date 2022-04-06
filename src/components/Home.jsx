import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white">
        <img src="/hot_sale_freepik-1.jpg" class="card-img" height="500px" />
        <div class="card-img-overlay">
          <div className="container">
            <h5 class="card-title display-3">New Seaseon</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <Products></Products>
    </div>
  );
};

export default Home;

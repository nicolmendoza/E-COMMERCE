import React from "react";
import { Link } from "react-router-dom";
import {
  ProductWrapper,
  DivButton,
} from "../style-components/elements/Product";

const ListProducts = ({ setFilter, setFilterProduct, data, filter }) => {
  return (
    <>
      <DivButton className="buttons d-flex justify-content-center mb-1 divButton">
        <button
          className="btn btn-outline-dark"
          onClick={() => setFilter(data)}
        >
          ALL
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => setFilterProduct("men's clothing")}
        >
          <span></span>
          <i className="fa-solid fa-shirt"></i>
          Mens
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => setFilterProduct("women's clothing")}
        >
          Woman
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => setFilterProduct("jewelery")}
        >
          Jewerly
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => setFilterProduct("electronics")}
        >
          Electronic
        </button>
      </DivButton>
      {filter.map((product) => {
        return (
          <ProductWrapper
            className="col-9 mx-auto col-md-6 col-lg-3 my-3"
            key={product.id}
          >
            <div className="card ">
              <div className="img-container p-5">
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="200px"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <strong className="card-text">
                  {" "}
                  Price: $/.{product.price}
                </strong>
              </div>

              <div className="card-body btn-show">
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-outline-dark"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </ProductWrapper>
        );
      })}
    </>
  );
};

export default ListProducts;

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { ProductWrapper } from "../style-components/elements/Product";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.data);
        setFilter(await response.data);
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div>
        <p>Loading ..</p>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>{" "}
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>{" "}
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </div>
    );
  };

  const setFilterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    console.log(updateList);
    setFilter(updateList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-2">
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
            <i class="fa-solid fa-shirt"></i>
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
        </div>
        {filter.map((product) => {
          return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
              <div class="card ">
                <div className="img-container p-5">
                  <img
                    className="card-img-top"
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    height="200px"
                    width="200px"
                  />
                </div>

                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <strong className="card-text"> Price: $/.{product.price}</strong>
                </div>

                <div class="card-body btn-show">
                  <Link
                    to={`/products/${product.id}`}
                    class="btn btn-outline-dark"
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
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;



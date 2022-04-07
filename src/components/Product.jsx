import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { addCart, deleteCart } from "./redux/reducer/handleCart.js";

import ShowProduct from "./ShowProduct.jsx";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const axiosFunction = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response);
      setProduct(await response.data);
      setLoading(false);
    };

    axiosFunction();
  }, []);

  const Loading = () => {
    return <div>Loading</div>;
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? (
            <Loading />
          ) : (
            <ShowProduct product={product} addProduct={addProduct} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

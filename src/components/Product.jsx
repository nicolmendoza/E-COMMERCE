import axios from "axios";
import {useSelector , useDispatch}from 'react-redux'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { addCart } from "./redux/action";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const ProductShow = () => {
    return (
      <div>
        <img src={product.image} alt={product.title} width='200px'></img>
        <div className="col-md-6">{product.title}</div>
        <div className="col-md-6">{product.price}</div>
        <div className="col-md-6">{product.rating && product.rating.rate}</div>
        <button  >Add to Cart</button>
        <Link to="/cart"> Go to Cart</Link>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ProductShow />}</div>
      </div>
    </div>
  );
};

export default Product;

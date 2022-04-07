import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addCart, deleteCart } from "./redux/reducer/handleCart.js";
import { Button } from "../style-components/elements/Product.js";
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

  const ProductShow = () => {
    return (
      <DivProduct className="container py-5">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto my-3 text-center text-slanted text-yellow">
            <h1><strong>{product.title}</strong></h1>
          </div>
        </div>
        {/* end title */}

        {/* product info */}
        <div className="row">
          <div className="col-10 col-md-6 mx-auto my-3 div-image">
            <img
              src={product.image}
              alt="product"
              width="300px"
              height="300px"
            />
          </div>
          {/* product text */}
          <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
            <h2>model : {product.title}</h2>

            <h4 className="text-yellow">
              <strong>
                <span>$</span>
                {product.price}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              Description :
            </p>
            <h5 className="text-muted lead text-lowercase">
              {" "}
              {product.description}
            </h5>
            {/* buttons */}
            <div className="div-btn">
              <Button
                class="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DivProduct>
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

const DivProduct = styled.div`
  h1,
  h2 {
    font-size: 1.3rem;
  }
  .div-image {
    display: flex;
    justify-content: center;
  }
  h5 {
    font-size: 1rem;
    text-align: justify
  }
  .btn-btn {
    display: flex;
    justify-content: center;
    margin-left: auto;
  }
  @media (max-width: 992px) {
    h1,
    h2 {
      font-size: 1rem;
    }
    img {
      width: 200px;
      height: 200px;
    }
    h5 {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
  }
`;

export default Product;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
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
    setFilter(updateList)
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
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4">
                <img
                  src={product.image}
                  class="card-img-top"
                  alt={product.title}
                  height="250px"
                  width="300px"
                />
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p className="card-text"> {product.price}</p>
                </div>

                <div class="card-body">
                  <Link to={`/products/${product.id}`} class="btn btn-outline-dark">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-5">LAST PRODUCT</div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;

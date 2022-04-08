import React, { useEffect, useState } from "react";
import { getAllProducts } from "./API";
import Loading from "./Loading";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { useDispatch, useSelector } from "react-redux";
import ListProducts from "./ListProducts";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {

    getAllProducts().then((response) => {
      setData(response.data);
      setFilter(response.data);
      setLoading(false);
      console.log(filter);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const setFilterProduct = (category) => {
    const updateList = data.filter((x) => x.category === category);
    console.log(updateList);
    setFilter(updateList);
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            {loading ? (
              <Loading />
            ) : (
              <ListProducts
                data={data}
                filter={filter}
                setFilter={setFilter}
                setFilterProduct={setFilterProduct}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

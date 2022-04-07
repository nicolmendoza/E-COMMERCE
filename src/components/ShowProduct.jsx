import React from 'react'
import { Button } from "../style-components/elements/Product.js";
import { DivProduct } from "../style-components/elements/Product.js";
const ShowProduct = ({product,addProduct}) => {
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
                  className="btn btn-outline-dark"
                  onClick={() => addProduct(product)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </DivProduct>
      );
}

export default ShowProduct
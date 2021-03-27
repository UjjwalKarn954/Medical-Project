import React from "react";
import data from "../data";
import {A} from 'hookrouter';

export default (props) => {
  console.log("homescreen");
  return (
    <ul className="products">
      {data.products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <A href={"/product/" + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </A>
            <div className="product-name">
              <A href={`/product/${product._id}`}>{product.name}</A>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars {product.numReviews}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

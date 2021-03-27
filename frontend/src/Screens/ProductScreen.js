import React from "react";
import data from "../data";
import {withRouter} from 'react-router';
const ProductScreen =  ({ prodId}) => {
  console.log("Opened This Page");

  const product = data.products.find((prod) => {
    return prod._id == prodId;
  });
  return (
    <div>
{product.image}
      <h1>{product.name}</h1>
    </div>
  );
};
export default withRouter(ProductScreen);

import React from "react";

const Product = ({ product, increasePrice }) => {
  return (
    <div>
      <h3>Product</h3>
      <p>{product.product}</p>
      <p>{product.price}</p>
      <button id={product.id} onClick={increasePrice}>
        Increase
      </button>
    </div>
  );
};

export default Product;

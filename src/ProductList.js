import React from "react";
import Product from './Product';

const ProductList = props => {
  const ProductItems = props.products.map((product, index) => (
    <Product {...product} key={index} />
  ));

  return <ul>{ProductItems}</ul>;
};

export default ProductList;

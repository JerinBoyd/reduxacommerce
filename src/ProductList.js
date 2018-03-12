import React from "react";
import Product from "./Product";

const ProductList = props => {
  const ProductItems = Object.keys(props.products).map(id => {
    return (
      <Product {...props.products[id]} key={id} id={id} />
    );

  });
 
  

  return <ul>{ProductItems}</ul>;
};


export default ProductList;

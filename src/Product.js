import React from 'react';

import { connect } from 'react-redux';
import { productActions } from './products'; 

const Product = props => {
    return (
      <li>
        <img src={props.imgSrc} alt={props.name} />
        <p>{props.name}</p>
        <p>${props.price}</p>
        <button onClick={() => props.addItem(props.id)}>+</button>
        <p>{props.count}</p>
        <button onClick={() => props.removeItem(props.id)}>-</button>
      </li> 
    );
  };

  const mapStateToProps = null;
 const mapDispatchToProps = dispatch => {
    return {
      addItem: id => dispatch(productActions.addItem(id)),
      removeItem: id => dispatch(productActions.removeItem(id)),
    };
};



  export default connect(mapStateToProps, mapDispatchToProps)(Product);
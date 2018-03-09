import React from 'react';

import { connect } from 'react-redux';
import { productActions } from './products'; 

const Product = props => {
    return (
      <li>
        <img src={props.imgSrc} alt={props.name} />
        <p>{props.name}</p>
        <p>${props.price}</p>
        <button onClick={() => props.addItem(props.position)}>+</button>
        <p>{props.count}</p>
        <button onClick={() => props.removeItem(props.position)}>-</button>
      </li> 
    );
  };

  const mapStateToProps = null;
 const mapDispatchToProps = dispatch => {
    return {
      addItem: position => dispatch(productActions.addItem(position)),
      removeItem: position => dispatch(productActions.removeItem(position)),
    };
};



  export default connect(mapStateToProps, mapDispatchToProps)(Product);
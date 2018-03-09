import React from 'react';

import { connect } from 'react-redux';


const Product = props => {
    return (
      <li>
        <img src={props.imgSrc} alt={props.name} />
        <p>{props.name}</p>
        <p>${props.price}</p>
        <button onClick={() => props.dispatch({type: 'ADD_ITEM', 
                                                payload: { value: props.position}})}>+</button>
        <p>{props.count}</p>
        <button onClick={() => props.dispatch({type: 'REMOVE_ITEM', 
                                                payload: { value: props.position}})}>-</button>
      </li> 
    );
  };

  const mapStateToProps = null;
 const mapDispatchToProps = null;



  export default connect(mapStateToProps, mapDispatchToProps)(Product);
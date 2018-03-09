import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ProductList from './ProductList';


class App extends Component {
  render() {
    return (
      <div>
          <ProductList products={this.props.products} />
    
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state; 
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);

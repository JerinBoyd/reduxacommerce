import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';



class App extends Component {
  render() {
    return (
      <div>
        Hello!
    
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

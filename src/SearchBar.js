import React from "react";

import { connect } from "react-redux";
import { searchActions } from './search';

const SearchBar = props => {
  return (
    <div>
      <input
        type="text"
        value={props.searchTerm}
        onChange={e => props.updateSearch(e.target.value)}
      />
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    searchTerm: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearch: term => dispatch(searchActions.updateSearch(term))
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(SearchBar);

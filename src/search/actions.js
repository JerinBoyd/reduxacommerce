import * as types from "./types";
import * as searchActions from './actions';

export const updateSearch = term => ({
  type: types.UPDATE_SEARCH,
  payload: {
    value: term
  }
});



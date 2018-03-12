import * as types from "./types";
import * as productActions from "./actions";



const initialState = {
  'ff6fdc7a-3fa1-45da-803c-b1eeedf44a05':
  {
    imgSrc: "https://via.placeholder.com/100x100",
    name: "Javelin (caution)",
    price: 500.0,
    count: 0
  },
  'ff6fdc7a-3fa1-45da-803c-b1eeedf44a06':
  {
    imgSrc: "https://via.placeholder.com/100x100",
    name: "Snail",
    price: 3.99,
    count: 0
  },
  'ff6fdc7a-3fa1-45da-803c-b1eeedf44a07':
  {
    imgSrc: "https://via.placeholder.com/100x100",
    name: "Rug",
    price: 93.47,
    count: 0
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM: {
      const position = action.payload.value;
      const selectedItem = state[position];
      const before = state.slice(0, position);
      const after = state.slice(position + 1);
      const newProduct = {
        ...selectedItem,
        count: selectedItem.count + 1
      };
      return [...before, newProduct, ...after];
    }
    case types.REMOVE_ITEM: {
      const position = action.payload.value;
      const selectedItem = state[position];
      const before = state.slice(0, position);
      const after = state.slice(position + 1);
      const newProduct = {
        ...selectedItem,
        count: selectedItem.count === 0 ? 0 : selectedItem.count - 1
      };
      return [...before, newProduct, ...after];
    }
    default:
      return state;
  }
};
export { productActions };

export default reducer;

import { createStore, combineReducers } from 'redux';
import productReducer from './product';
import cartReducer from './cart';
import searchReducer from './search'



const rootReducer = combineReducers({
    product: productReducer,
    search: searchReducer,
    cart: cartReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;

import { createStore, combineReducers } from 'redux';
import cartReducer from './Reducer/CartReducer';
import productReducer from './Reducer/foodMenuReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer
});

const store = createStore(rootReducer);

export default store;

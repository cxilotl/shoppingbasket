import { createStore } from "redux";
import reducer from './reducers';
import products from '../products';

const store = createStore(
  reducer,
  {
    products: products,
    cart: []
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

export { store };
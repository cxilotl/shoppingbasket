import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const addProduct = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product: product
    }
  }
};

const removeProduct = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      product: product
    }
  }
};

export {
  addProduct,
  removeProduct
};
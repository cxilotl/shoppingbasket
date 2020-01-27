import reducer from "./reducers";
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import products from "../products";

describe('Selectors', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      products: [],
      cart: []
    };
  });

  test('No product added to an empty cart', () => {
    const state = {
      products: [].concat(products),
      cart: []
    };
    const action = {
      type: ADD_TO_CART,
      payload: {
        product: undefined
      }
    };
    expect(reducer(state, action)).toStrictEqual(state);
  });

  test('Adding a product to an empty cart', () => {
    const state = {
      products: [].concat(products),
      cart: []
    };
    const action = {
      type: ADD_TO_CART,
      payload: {
        product: 'Beans'
      }
    };

    expect(reducer(state, action)).toStrictEqual(Object.assign({}, state, {
      cart: ['Beans']
    }));
  });

  test('Adding a product to a cart already containing a different product', () => {
    const state = {
      products: [].concat(products),
      cart: ['Beans']
    };
    const action = {
      type: ADD_TO_CART,
      payload: {
        product: 'Coke'
      }
    };
    expect(reducer(state, action)).toStrictEqual(Object.assign({}, state, {
      cart: [
        'Beans',
        'Coke'
      ]
    }));
  });
});
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

  describe('When adding a product to the cart, it', () => {
    test('Should not add an undefined product to an empty cart', () => {
      const state = {
        products: [].concat(products),
        cart: []
      };
      const action = {
        type: ADD_TO_CART,
        payload: { product: undefined }
      };
      expect(reducer(state, action)).toStrictEqual(state);
    });

    test('Should add a product to an empty cart', () => {
      const state = {
        products: [].concat(products),
        cart: []
      };
      const action = {
        type: ADD_TO_CART,
        payload: { product: 'Beans' }
      };
      expect(reducer(state, action)).toStrictEqual(Object.assign({}, state, {
        cart: [
          { name: 'Beans', quantity: 1 }
        ]
      }));
    });

    test('Should add a product to a cart containing a different product', () => {
      const state = {
        products: [].concat(products),
        cart: [
          { name: 'Beans', quantity: 1 }
        ]
      };
      const action = {
        type: ADD_TO_CART,
        payload: { product: 'Coke' }
      };
      expect(reducer(state, action)).toStrictEqual(Object.assign({}, state, {
        cart: [
          { name: 'Beans', quantity: 1 },
          { name: 'Coke', quantity: 1 }
        ]
      }));
    });

    test('Should increase the quantity of a product that is already in the a cart', () => {
      const state = {
        products: [].concat(products),
        cart: [
          { name: 'Beans', quantity: 1 },
          { name: 'Coke', quantity: 1 }
        ]
      };
      const action = {
        type: ADD_TO_CART,
        payload: { product: 'Coke' }
      };
      expect(reducer(state, action)).toStrictEqual(Object.assign({}, state, {
        cart: [
          { name: 'Beans', quantity: 1 },
          { name: 'Coke', quantity: 2 }
        ]
      }));
    });
  });

  describe('When removing a product from the cart, it', () => {
    test('Should not remove anything from an empty cart', () => {
      const state = {
        products: [].concat(products),
        cart: []
      };
      const action = {
        type: REMOVE_FROM_CART,
        payload: { product: 'Coke' }
      };
      expect(reducer(state, action)).toStrictEqual(state);
    });

    test('Should not remove anything from a cart when no product is provided', () => {
      const state = {
        products: [].concat(products),
        cart: [
          { name: 'Beans', quantity: 1 }
        ]
      };
      const action = {
        type: REMOVE_FROM_CART,
        payload: { product: undefined }
      };
      expect(reducer(state, action)).toStrictEqual(state);
    });

    test('Should not remove any product from a cart when the product does not exists in the cart', () => {
      const state = {
        products: [].concat(products),
        cart: [
          { name: 'Beans', quantity: 1 }
        ]
      };
      const action = {
        type: REMOVE_FROM_CART,
        payload: { product: 'Coke' }
      };
      expect(reducer(state, action)).toStrictEqual(state);
    });

    test('Should remove a product from the cart if it contains only one unit', () => {
      const state = {
        products: [].concat(products),
        cart: [
          { name: 'Beans', quantity: 1 },
          { name: 'Coke', quantity: 1 }
        ]
      };
      const action = {
        type: REMOVE_FROM_CART,
        payload: { product: 'Coke' }
      };
      expect(reducer(state, action)).toStrictEqual(Object.assign({}, state, {
        cart: [
          { name: 'Beans', quantity: 1 }
        ]
      }));
    });

    test('Should decrease the number of units a product from if the cart contains more than one unit', () => {
      const state = {
        products: [].concat(products),
        cart: [
          { name: 'Beans', quantity: 1 },
          { name: 'Coke', quantity: 2 }
        ]
      };
      const action = {
        type: REMOVE_FROM_CART,
        payload: { product: 'Coke' }
      };
      expect(reducer(state, action)).toStrictEqual(Object.assign({}, state, {
        cart: [
          { name: 'Beans', quantity: 1 },
          { name: 'Coke', quantity: 1 }
        ]
      }));
    });
  });

});
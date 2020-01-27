import { getProducts, getProduct, isCartEmpty, getProductFromCart, getTotalToPay, getCartItems } from "./selectors";
import products from "../products";

describe('Selectors', () => {

  let initialState;

  beforeEach(() => {
    initialState = {
      products: [].concat(products),
      cart: []
    };
  });

  describe('When accessing the list of products from the state', () => {
    test('Retrieving the list of product', () => {
      const state = Object.assign({}, initialState);
      expect(getProducts(state)).toEqual(products);
    });

    test('Retrieving a specific product from the product list', () => {
      const state = Object.assign({}, initialState);
      const productName = 'Coke';
      expect(getProduct(state, productName)).toEqual({
        name: 'Coke',
        price: 0.7,
        isPricePerUnit: true,
        isPricePerKg: false
      });
    });
  });

  describe('When accessing the cart from the state', () => {
    let state;

    beforeEach(() => {
      state = Object.assign({}, initialState);
    });

    test('Should indicate the cart is empty', () => {
      expect(isCartEmpty(state)).toBeTruthy();
    });

    test('Should indicate the cart is not empty', () => {
      state.cart=[
        { name: 'Beans', quantity: 1 }
      ];
      expect(isCartEmpty(state)).toBeFalsy();
    });

    test('Should retrieve a specific product from the cart', () => {
      state.cart=[
        { name: 'Beans', quantity: 1 },
        { name: 'Coke', quantity: 1 },
        { name: 'Oranges', quantity: 1 }
      ];
      const productName = 'Coke';
      expect(getProductFromCart(state, productName)).toEqual({ name: 'Coke', quantity: 1 });
    });

    test('Should return nothing if a specific product is not available in the cart', () => {
      state.cart=[
        { name: 'Beans', quantity: 1 },
        { name: 'Oranges', quantity: 1 }
      ];
      const productName = 'Coke';
      expect(getProductFromCart(state, productName)).toBeUndefined();
    });

    test('Should return the total price for the products in the cart', () => {
      state.cart=[
        { name: 'Beans', quantity: 2 },
        { name: 'Coke', quantity: 1 }
      ];
      expect(getTotalToPay(state)).toEqual(1.7);
    });

    test('Should return a generated list of all the items  with name, price, and quantity from the cart', () => {
      state.cart=[
        { name: 'Beans', quantity: 3 },
        { name: 'Coke', quantity: 1 }
      ];
      expect(getCartItems(state)).toEqual([
        { name: 'Beans', price: 0.5, quantity: 3 },
        { name: 'Coke', price: 0.7, quantity: 1 }
      ]);
    });
  });
});
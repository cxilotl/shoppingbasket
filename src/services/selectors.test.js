import { getProducts } from "./selectors";
import products from "../products";

describe('Selectors', () => {

  const initialState = {
    products: [],
    cart: []
  };

  test('Retrieving the product list from the state', () => {
    initialState.products = [].concat(products);
    expect(getProducts(initialState)).toEqual(products);
  });

});
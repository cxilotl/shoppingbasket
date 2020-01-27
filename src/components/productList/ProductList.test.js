import React from 'react';
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import ProductList from "./ProductList";

import { store as appStore } from '../../services/store';
import products from "../../products";

describe('Product List', () => {
  it('Snapshot', () => {
    const component = renderer.create(
      <Provider store={ appStore }>
        <ProductList products={ products }/>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
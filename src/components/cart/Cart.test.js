import React from 'react';
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import Cart from './Cart';

import { store as appStore } from "../../services/store";

describe('Cart', () => {
  it('Snapshot', () => {
    const items = [
      { name: 'Beans', price: 0.5, quantity: 3 },
      { name: 'Coke', price: 0.7, quantity: 1 }
    ];
    const subTotal = 2.2;
    const total = 2.2;
    const component = renderer.create(
      <Provider store={ appStore }>
        <Cart
          items={ items }
          subTotal={ subTotal }
          total={ total }
        />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
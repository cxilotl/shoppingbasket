import React from 'react';
import { createStore } from 'redux'
import { Provider } from'react-redux';
import { render, within, fireEvent } from '@testing-library/react';
import { store as appStore } from './services/store';
import reducer from './services/reducers';
import App from './App';

import products from './products';

describe('Given a shopping page, it', () => {

  const renderApp = (initStore) => {
    return render(
      <Provider store={ initStore }>
        <App />
      </Provider>
    );
  };

  describe('When rendering the product list section, it', () => {
    test('should render a product section title', () => {
      const { getByText } = renderApp(appStore);
      const productSectionElement = getByText(/Our Products/i);
      expect(productSectionElement).toBeInTheDocument();
    });

    test('should render a list of products', () => {
      const { getByTestId } = renderApp(appStore);
      const productListSection = getByTestId('product-list');
      const { getByText } = within(productListSection);
      products.forEach((product) => {
        expect(getByText(product.name)).toBeInTheDocument();
      });
    });
  });

  describe('When rendering the product list section, it', () => {
    test('should render a shopping cart section title', () => {
      const { getByText } = renderApp(appStore);
      const shoppingListTitleElement = getByText(/Shopping Cart/i);
      expect(shoppingListTitleElement).toBeInTheDocument();
    });

    test('should include a sub-total list of products', () => {
      const { getByTestId } = renderApp(appStore);
      const cartSubTotalSection = getByTestId('cart-sub-total');
      expect(cartSubTotalSection).toBeInTheDocument();
    });

    describe('And adding a product three times, it', () => {

      test('should render a sub-total of the products added', () => {
        const store = createStore(reducer, {
          products: products,
          cart: [
            { name: 'Beans', quantity: 3 },
            { name: 'Coke', quantity: 1 }
          ]
        });
        const { getByTestId } = renderApp(store);
        const cartSubTotalSection = getByTestId('cart-sub-total');
        const { getAllByText } = within(cartSubTotalSection);
        const beans = getAllByText(/Beans/i);
        expect(beans.length).toBe(3);
        const coke = getAllByText(/Coke/i);
        expect(coke.length).toBe(1);
      });

      test('should render a sub-total of the products added', () => {
        const { getByTestId  } = render(
          <Provider store={ appStore }>
            <App />
          </Provider>
        );

        const productItem = getByTestId('Beans-0');
        const { getByText } = within(productItem);
        const productItemAddToCart = getByText('+');
        fireEvent.click(productItemAddToCart);
        fireEvent.click(productItemAddToCart);

        const cartSubTotalSection = getByTestId('cart-sub-total');
        const { getAllByText } = within(cartSubTotalSection);
        const beans = getAllByText(/Beans/i);
        expect(beans.length).toBe(2);
      });
    });
  });

});

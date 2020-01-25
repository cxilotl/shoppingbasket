import React from 'react';
import cssStyles from './App.module.scss';
import Product from './components/product/Product';

import products from './products';

const generateProductList = (productList) => {
  const addItem = () => {
    console.log('Adding item to cart');
  };
  const removeItem = () => {
    console.log('Removing item from cart');
  };
  return (
    <ul className={ cssStyles.productList }>
      {
        productList.map((name) => {
          return (
            <li key={ name } className={ cssStyles.productListItem }>
              <Product name={ name } onIncrementing={ addItem } onDecrementing={ removeItem } />
            </li>
          );
        })
      }
    </ul>
  );
};

const CartSubTotalItem = ({ id, name, price }) => {
  return (
    <p data-id={id} className={ cssStyles.cartSubTotalProduct }><span>{ name }</span><span>{ price }</span></p>
  );
};

function App() {
  const productList = generateProductList(products);
  return (
    <>
      <h1 className={ cssStyles.title }>Supermarket shopping</h1>
      <main role="main" className={ cssStyles.main }>
        <section data-testid="product-list" className={ cssStyles.section }>
          <h2 className={ cssStyles.sectionTitle }>Our Products</h2>
          { productList }
        </section>
        <section data-testid="cart" className={ cssStyles.section }>
          <h2 className={ cssStyles.sectionTitle }>Shopping Cart</h2>
          <div data-testid="cart-sub-total" className={ cssStyles.cartSubTotal }>
            <CartSubTotalItem data-id="beans" name="Beans" price="0.50" />
            <CartSubTotalItem data-id="beans" name="Beans" price="0.50" />
            <CartSubTotalItem data-id="beans" name="Beans" price="0.50" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
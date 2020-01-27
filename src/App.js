import React from 'react';
import PropTypes from 'prop-types';
import cssStyles from './App.module.scss';
import ProductList from "./containers/ProductList";

const CartSubTotalItem = ({ id, name, price }) => {
  return (
    <p data-id={id} className={ cssStyles.cartSubTotalProduct }><span>{ name }</span><span>{ price }</span></p>
  );
};

CartSubTotalItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string
};

function App() {
  return (
    <>
      <h1 className={ cssStyles.title }>Supermarket shopping</h1>
      <main role="main" className={ cssStyles.main }>
        <section data-testid="product-list" className={ cssStyles.section }>
          <h2 className={ cssStyles.sectionTitle }>Our Products</h2>
          <ProductList />
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
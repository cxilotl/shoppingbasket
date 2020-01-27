import React from 'react';
import cssStyles from './App.module.scss';
import ProductList from "./containers/ProductList";
import Cart from "./containers/Cart";

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
          <Cart />
        </section>
      </main>
    </>
  );
}

export default App;
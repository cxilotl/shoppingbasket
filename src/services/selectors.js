const getProducts = (state) => {
  return state.products;
};

const getProduct = (state, name) => {
  return state.products.find((product) => {
    return product.name === name;
  });
};

const isCartEmpty = (state) => {
  return (state.cart && state.cart.length === 0);
};

const getProductFromCart = (state, name) => {
  return state.cart.find((product) => {
    return product.name === name;
  });
};

const getTotalToPay = (state) => {
  return state.cart.reduce((total, productInCart) => {
    const productPricePerUnit = getProduct(state, productInCart.name);
    const totalPriceOfProduct = productPricePerUnit.price * productInCart.quantity;
    return total + totalPriceOfProduct;
  }, 0);
};

const getCartItems = (state) => {
  return state.cart.map((productInCart) => {
    return Object.assign({}, productInCart, {
      price: getProduct(state, productInCart.name).price
    });
  });
};

export {
  getProducts,
  getProduct,
  isCartEmpty,
  getProductFromCart,
  getTotalToPay,
  getCartItems
};
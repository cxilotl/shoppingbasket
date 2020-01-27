import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const handleAddProductToCart = (state, payload) => {
  if (typeof payload.product !== 'undefined') {
    if (state.cart && state.cart.length > 0) {
      return {
        ...state,
        cart: [ ...state.cart, payload.product ]
      };
    } else {
      return {
        ...state,
        cart: [ payload.product ]
      };
    }
  }
  return state;
};

const handleRemoveProductFromCart = (state, payload) => {
  return {
    ...state,
    cart: state.cart.filter((product) => {
      return product !== payload.product;
    })
  };
};

const initialState = {
  products: [],
  cart: []
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      return handleAddProductToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return handleRemoveProductFromCart(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
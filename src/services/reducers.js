import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import { isCartEmpty, getProductFromCart } from "./selectors";

const handleAddProductToCart = (state, payload) => {
  if (typeof payload.product !== 'undefined') {
    if (!isCartEmpty(state)) {
      if (getProductFromCart(state, payload.product)) {
        return {
          ...state,
          cart: state.cart.map((productItem) => {
            if (productItem.name === payload.product) {
              return {
                name: productItem.name,
                quantity: productItem.quantity + 1
              }
            } else {
              return productItem;
            }
          })
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              name: payload.product,
              quantity: 1
            }
          ]
        };
      }
    } else {
      return {
        ...state,
        cart: [{
          name: payload.product,
          quantity: 1
        }]
      };
    }
  }
  return state;
};

const handleRemoveProductFromCart = (state, payload) => {
  if (typeof payload.product !== 'undefined' && !isCartEmpty(state) && getProductFromCart(state, payload.product)) {
    const existingProduct = getProductFromCart(state, payload.product);
    if (existingProduct.quantity > 1) {
      return {
        ...state,
        cart: state.cart.map((productItem) => {
          if (productItem.name === payload.product) {
            return {
              name: productItem.name,
              quantity: productItem.quantity - 1
            }
          } else {
            return productItem;
          }
        })
      }
    } else {
      return {
        ...state,
        cart: state.cart.filter((product) => {
          return product.name !== payload.product;
        })
      };
    }
  }
  return state;
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
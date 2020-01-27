import React from 'react';
import PropTypes from 'prop-types';
import cssStyles from "./Product.module.scss";

const Product = ({ name, price, isPerUnit, isPerKg, addProduct, removeProduct }) => {
  const addItem = () => {
    addProduct(name);
  };
  const removeItem = () => {
    removeProduct(name);
  };
  return (
    <div className={ cssStyles.product }>
      <h4 className={ cssStyles.title }>{ name }</h4>
      <p className={ cssStyles.price }>{ isPerUnit? `£${price}` : `£${price}/kg` }</p>
      <div className={ cssStyles.controls }>
        <button type="button" name="product-increment-btn" onClick={ addItem }>+</button>
        <button type="button" name="product-decrement-btn" onClick={ removeItem }>-</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isPerUnit: PropTypes.bool.isRequired,
  isPerKg: PropTypes.bool.isRequired,
  addProduct: PropTypes.func,
  removeProduct: PropTypes.func
};

export default Product;
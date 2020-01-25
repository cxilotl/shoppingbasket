import React from 'react';
import PropTypes from 'prop-types';
import cssStyles from "./Product.module.scss";

const Product = ({ name, onIncrementing, onDecrementing }) => {
  return (
    <div className={ cssStyles.product }>
      <h4>{ name }</h4>
      <div className={ cssStyles.controls }>
        <button type="button" name="product-increment-btn" onClick={ onIncrementing }>+</button>
        <button type="button" name="product-decrement-btn" onClick={ onDecrementing }>-</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  onIncrementing: PropTypes.func,
  onDecrementing: PropTypes.func
};

export default Product;
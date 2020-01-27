import React from 'react';
import PropTypes from 'prop-types';
import cssStyles from "./Cart.module.scss";

const CartSubTotalItem = ({ id, name, price }) => {
  return (
    <li data-id={id} className={ cssStyles.subTotalListItem }><span>{ name }</span><span>{ `£${price}` }</span></li>
  );
};

CartSubTotalItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number
};

const generateSubTotalItems = (items) => {
  let subTotalItems;
  if (items && Array.isArray(items) && items.length > 0) {
    subTotalItems = (
      <ul className={ cssStyles.subTotalList }>
        {
          items.map((item, index) => {
            let subTotalItemsPerProduct = [];
            if (item.quantity > 0) {
              for (let i = 0; i < item.quantity; i++) {
                subTotalItemsPerProduct.push(
                  <CartSubTotalItem
                    key={ `${item.name}-${index}-${i}` }
                    id={ `${item.name}-${i}` }
                    name={ item.name }
                    price={ item.price }
                  />
                );
              }
            }
            return subTotalItemsPerProduct;
          })
        }
      </ul>
    );
  }
  return subTotalItems;
};

const Cart = ({ items, subTotal, total }) => {
  const cartItems = generateSubTotalItems(items);
  return (
    <div>
      <section data-testid="cart-sub-total" className={ cssStyles.subTotal }>
        { cartItems }
        <hr className={ cssStyles.subTotalSeparator } />
        <p className={ cssStyles.subTotalPrice }>
          <span>Sub-Total</span><span>{ `£${subTotal}` }</span>
        </p>
      </section>
      <hr className={ cssStyles.totalSeparator } />
      <div data-testid="cart-total" className={ cssStyles.total }>
        <span>Total</span><span>{ `£${total}` }</span>
      </div>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.array,
  subTotal: PropTypes.number,
  total: PropTypes.number
};

export default Cart;
import React from 'react';
import PropTypes from 'prop-types';
import cssStyles from "./ProductList.module.scss";
// import Product from "../product/Product";
import Product from "../../containers/Product";

const generateProductList = (products) => {
  let productListContent;
  if (products && Array.isArray(products) && products.length > 0) {
    productListContent = (
      <>
        {
          products.map((name, index) => {
            return (
              <li key={ name } className={ cssStyles.productListItem } data-testid={ `${name}-${index}` }>
                <Product name={ name } />
              </li>
            );
          })
        }
      </>
    );
  }
  return productListContent;
};

const ProductList = ({ products }) => {
  const productList = generateProductList(products);
  return (
    <ul className={ cssStyles.productList }>
      { productList }
    </ul>
  );
};

ProductList.propTypes = {
  products:PropTypes.array
};

export default ProductList;
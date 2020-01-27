import React from 'react';
import PropTypes from 'prop-types';
import cssStyles from "./ProductList.module.scss";
import Product from "../../containers/Product";

const generateProductList = (products) => {
  let productListContent;
  if (products && Array.isArray(products) && products.length > 0) {
    productListContent = (
      <>
        {
          products.map((product, index) => {
            return (
              <li key={ product.name } className={ cssStyles.productListItem } data-testid={ `${product.name}-${index}` }>
                <Product
                  name={ product.name }
                  price={ product.price }
                  isPerUnit={ product.isPricePerUnit }
                  isPerKg={ product.isPricePerKg }
                />
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
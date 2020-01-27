import { connect } from 'react-redux';
import Product from "../components/product/Product";
import { addProduct, removeProduct } from '../services/cartActions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
    removeProduct: (product) => dispatch(removeProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
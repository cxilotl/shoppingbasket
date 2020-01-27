import { connect } from 'react-redux';
import ProductList from "../components/productList/ProductList";
import { getProducts } from "../services/selectors";

const mapStateToProps = (state) => {
  return {
    products: getProducts(state)
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
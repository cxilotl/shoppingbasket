import { connect } from 'react-redux';
import Cart from "../components/cart/Cart";
import { getTotalToPay, getCartItems } from "../services/selectors";

const mapStateToProps = (state) => {
  return {
    items: getCartItems(state),
    subTotal: getTotalToPay(state),
    total: getTotalToPay(state)
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
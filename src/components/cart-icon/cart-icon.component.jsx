import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector.js';
import { selectCartHidden } from '../../redux/cart/cart.selector.js';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHiddenOnProps, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHiddenOnProps}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenOnProps: () => dispatch(toggleCartHidden()),
});
const mapToStateProps = (state) => ({
  itemCount: selectCartItemsCount(state),
  toggleCartHiddenOnProps: selectCartHidden(state),
});
export default connect(mapToStateProps, mapDispatchToProps)(CartIcon);

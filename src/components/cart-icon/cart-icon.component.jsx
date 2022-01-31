import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHiddenOnProps }) => {
  //console.log(toggleCartHiddenOnProps);
  return (
    <div className='cart-icon' onClick={toggleCartHiddenOnProps}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenOnProps: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);

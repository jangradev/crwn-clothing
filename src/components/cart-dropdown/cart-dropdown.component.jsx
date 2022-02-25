import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartItemsLength,
} from '../../redux/cart/cart.selector.js';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

const CartDropdown = ({ cartItems, arrayLength, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {arrayLength ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
        ) : (
          <span className='empty-message'>Your Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};
const mapToStateProps = createStructuredSelector({
  cartItems: selectCartItems,
  arrayLength: selectCartItemsLength,
});
export default withRouter(connect(mapToStateProps)(CartDropdown));

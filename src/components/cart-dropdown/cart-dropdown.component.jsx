import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <CustomButton> Go To Checkout </CustomButton>
    </div>
  );
};

const mapToStateProps = ({ cart: { cartItems } }) => {
  return {
    cartItems,
  };
};
export default connect(mapToStateProps)(CartDropdown);

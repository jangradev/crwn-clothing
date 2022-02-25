import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItems from '../../components/checkout-items/checkout-items.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

import './checkout.styles.scss';
const Checkout = ({ cartItems, total, ...otherProps }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product Description</span>
        </div>

        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItems key={item.id} cartItems={item} />
      ))}
      <div className='total'> total-{total}</div>
    </div>
  );
};
const mapStateToProp = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProp)(Checkout);

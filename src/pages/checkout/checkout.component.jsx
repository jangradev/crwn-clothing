import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkout.styles.scss';

import CheckoutItems from '../../components/checkout-items/checkout-items.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
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
      <div className='total'> Total-{total}</div>
      <div className='dummy-text'>
        * Please use this Dummy card details to use Pay now option *
        <br />
        .........4242 4242 4242 4242 -Exp: 01/22 - CVV:123 .........
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};
const mapStateToProp = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProp)(Checkout);

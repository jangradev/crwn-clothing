import React from 'react';
import './checkout-items.styles.scss';

import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

const CheckoutItems = ({ cartItems, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItems;

  console.log(quantity);
  return (
    <div className='checkout-item'>
      <div className='image-container '>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItems)}>
          &#10094;
        </div>
        <div className='value'>{quantity}</div>
        <div className='arrow' onClick={() => addItem(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItems)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProp = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProp)(CheckoutItems);

import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ cartItem: { imageUrl, name, price, quantity } }) => {
  //console.log(imageUrl, name, price, quantity);
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className="'item-details">
        <div className='name'>{name}</div>
        <div className='price'>
          ${price} x {quantity}
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ cartItem: { imageUrl, name, price, quantity } }) => {
  console.log(imageUrl, name, price, quantity);
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className="'item-details">
        <span className='name'>{name}</span>
        <span className='price'>
          ${price} * {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

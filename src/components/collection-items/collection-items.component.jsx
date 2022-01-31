import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import './collection-items.styles.scss';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

// data received from collection preview
const CollectionItem = ({ item, addItemToProp }) => {
  const { name, imageUrl, price } = item;
  //console.log(addItemToProp);
  return (
    <div className='collection-item'>
      <div className='image' style={{ background: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItemToProp(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToProp: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);

import React from 'react';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-items/collection-items.component';

const CollectionPage = ({ collections }) => {
  console.log(collections);
  const { title, items } = collections;
  return (
    <div className='collection-page'>
      <h2 className='collection-page'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProp = (state, ownProps) => {
  return {
    collections: selectCollection(ownProps.match.params.collectionID)(state),
  };
};
export default connect(mapStateToProp)(CollectionPage);

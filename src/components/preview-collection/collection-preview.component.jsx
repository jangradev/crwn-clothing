import React from 'react';
import CollectionItem from '../collection-items/collection-items.component';
import './collection-preview.style.scss';

// Data received from shop.component
const CollectionPreview = ({ item }) => {
  const { title, items } = item;
  //console.log(title, items);
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

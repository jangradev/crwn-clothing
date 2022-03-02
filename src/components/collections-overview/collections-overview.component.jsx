import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles.scss';
import CollectionPreview from '../preview-collection/collection-preview.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map((item) => (
      <CollectionPreview key={item.id} item={item} />
    ))}
  </div>
);
const mapStateToProp = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mapStateToProp)(CollectionsOverview);

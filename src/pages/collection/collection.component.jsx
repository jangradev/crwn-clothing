import React from 'react';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className='collection-page'>
      <h2> COLLECTION PAGE</h2>
    </div>
  );
};
const mapStateToProp = (props) => {
  const { state, ownProps } = props;
  console.log(props);
  return {
    collection: selectCollection(ownProps.match.params.collectionID)(state),
  };
};
export default connect(mapStateToProp)(CollectionPage);

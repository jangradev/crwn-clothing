import React from "react";
import CollectionPreview from "../../components/preview-collection/collection-preview.component.jsx";
import SHOP_DATA from "./shop.data.js";

class ShopPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className='shop-page'>
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;

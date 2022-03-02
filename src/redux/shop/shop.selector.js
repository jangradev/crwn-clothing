import { createSelector } from 'reselect';
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};
const shopSelector = (state) => state.shop;
export const selectShopItems = createSelector([shopSelector], (shop) => shop);
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopItems], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );

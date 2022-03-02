import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;

export const selectShopItems = createSelector([shopSelector], (shop) => shop.collections);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopItems], (collection) => collection[collectionUrlParam]);

export const selectCollectionForPreview = createSelector(
  [selectShopItems],
  (collection) => Object.keys(collection).map((key) => collection[key])
);

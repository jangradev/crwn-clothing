import CartActionType from './cart-action.types';

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => {
  console.log(item);
  return {
    type: CartActionType.ADD_ITEM,
    payload: item,
  };
};

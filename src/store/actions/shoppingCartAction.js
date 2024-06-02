import { shoppingCartActions } from "../reducers/shoppingCartReducer";

export const AddCart = (cart) => ({
  type: shoppingCartActions.setAddCart,
  payload: cart,
});
export const AddPayment = (payment) => ({
  type: shoppingCartActions.setAddPayment,
  payload: payment,
});
export const AddAddress = (address) => ({
  type: shoppingCartActions.setAddAddress,
  payload: address,
});
export const IsChecked = (checked) => ({
  type: shoppingCartActions.setCheck,
  payload: checked,
});
export const removeFromCart = (id) => ({
  type: shoppingCartActions.setRemoveFromCart,
  payload: id,
});
export const clearCart = () => ({
  type: shoppingCartActions.setClearCart,
});
export const updateCart = (id, newCount) => ({
  type: shoppingCartActions.setUpdateCart,
  payload: { id, newCount },
});

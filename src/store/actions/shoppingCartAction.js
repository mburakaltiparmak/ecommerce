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

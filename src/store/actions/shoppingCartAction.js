import { actions } from "../reducers/shoppingCartReducer";

export const setAddCart = (cart) => ({
  type: actions.SET_ADD_CART,
  payload: cart,
});
export const setAddPayment = (payment) => ({
  type: actions.SET_ADD_PAYMENT,
  payload: payment,
});
export const setAddAddress = (address) => ({
  type: actions.SET_ADD_ADDRESS,
  payload: address,
});

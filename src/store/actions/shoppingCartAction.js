import axios from "axios";
import { shoppingCartActions } from "../reducers/shoppingCartReducer";
const baseURL = "https://workintech-fe-ecommerce.onrender.com";
const token = localStorage.getItem("token");
const instance = axios.create({ baseURL });
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
export const selectShipment = (shipment) => ({
  type: shoppingCartActions.setShipment,
  payload: shipment,
});



import axios from "axios";
import { shoppingCartActions } from "../reducers/shoppingCartReducer";
import { fetchStateSetter } from "./productAction";
import { loadingSetter } from "./globalAction";
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
export const getCurrentPayment = (currentPayment) => ({
  type: shoppingCartActions.setCurrentPayment,
  payload : currentPayment,
});
export const removePayment = (id) => {
  return {
    type: "SET_REMOVE_PAYMENT",
    payload: id,
  };
};
export const getPaymentMethod = () => async(dispatch) => {
  dispatch(loadingSetter(true));
  if (token) {
    try {
      const res = await instance.get("/user/card",{
        headers: {
          Authorization: token,
        }
      });
      dispatch(getCurrentPayment(res.data));
      dispatch(loadingSetter(false));
    }
    catch {
      toast.error("An error occured when fetching payment methods");
      dispatch(loadingSetter(false));
    }
  }
};


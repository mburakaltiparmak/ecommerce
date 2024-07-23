import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { orderActions } from "../reducers/orderReducer";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const token = localStorage.getItem("token");
export const createOrder = (orderData) => (dispatch) => {
  instance
    .post("/order", orderData, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log("order gelen data", res.data);
    })
    .catch((err) => {
      console.error("order post hata", err);
    });

  console.log("order data", orderData);
};

export const setAddressId = (address_id) => ({
  type: orderActions.setAddressId,
  payload: address_id,
});

export const setCardNo = (card_no) => ({
  type: orderActions.setCardNo,
  payload: card_no,
});

export const setCardName = (card_name) => ({
  type: orderActions.setCardName,
  payload: card_name,
});

export const setCardExpireMonth = (card_expire_month) => ({
  type: orderActions.setCardExpireMonth,
  payload: card_expire_month,
});

export const setCardExpireYear = (card_expire_year) => ({
  type: orderActions.setCardExpireYear,
  payload: card_expire_year,
});

export const setCardCCV = (card_ccv) => ({
  type: orderActions.setCardCCV,
  payload: card_ccv,
});

export const setPrice = (price) => ({
  type: orderActions.setPrice,
  payload: price,
});

export const setProducts = (products) => ({
  type: orderActions.setProducts,
  payload: products,
});

export const getOrders = () => async (dispatch) => {
  try {
    const res = await instance.get("/order", {
      headers: {
        Authorization: token,
      },
    });
    console.log("get orders response", res.data);
    const orders = res.data;
  } catch {
    console.log("get orders hata");
  }
};

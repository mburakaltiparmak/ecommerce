import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { orderActions } from "../reducers/orderReducer";
import { useSelector } from "react-redux";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});



export const createOrder = () => (dispatch) => {
  const address_id = useSelector((store)=>store.order.address_id);
//const order_date = useSelector((store)=>store.order.order_date);
const card_no = useSelector((store)=>store.order.card_no);
const card_name = useSelector((store)=>store.order.card_name);
const card_expire_month = useSelector((store)=>store.order.card_expire_month);
const card_expire_year = useSelector((store)=>store.order.card_expire_year);
const card_ccv = useSelector((store)=>store.order.card_ccv);
const price = useSelector((store)=>store.order.price);
const products = useSelector((store)=>store.order.products);
const orderData = {
  address_id : address_id,
  order_date: new Date().toISOString(),
  card_no : card_no,
  card_name : card_name,
  card_expire_month : card_expire_month,
  card_expire_year : card_expire_year,
  card_ccv : card_ccv,
  price : price,
  products : products,
};
  /*
  instance
    .post("/order", orderData)
    .then((res) => {
      console.log("order gelen data", res.data);
    })
    .catch((err) => {
      console.error("order post hata", err);
    });
    */
   console.log("order data",orderData);
};


export const setAddressId = (address_id) => ({
  type: orderActions.setAddressId,
  payload: address_id,
});
/*
export const setOrderDate = (order_date) => ({
  type: orderActions.setOrderDate,
  payload: order_date,
});
*/
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
  type: orderActions.products,
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
  } catch {
    console.log("get orders hata");
  }
};

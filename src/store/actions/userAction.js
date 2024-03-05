import axios from "axios";

import { userActions } from "../reducers/userReducer";

export const userNameSetter = (name) => ({
  type: userActions.setUserName,
  payload: name,
});

export const userEmailSetter = (email) => ({
  type: userActions.setUserEmail,
  payload: email,
});

export const userIdSetter = (role_id) => ({
  type: userActions.setUserId,
  payload: role_id,
});

//THUNK ACTIONS EKLENECEK
const baseURL = "https://workintech-fe-ecommerce.onrender.com";
const instance = axios.create({ baseURL });
export const getRoles = () => (dispatch, getState) => {
  instance
    .get("/roles")
    .then((res) => {
      console.log("gelen data", res.data);
      dispatch(userIdSetter(res.data));
    })
    .catch((err) => {
      console.log("hata", err);
    });
};

import axios from "axios";
import { loginActions } from "../reducers/loginReducer";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userEmailSetter, userIdSetter, userNameSetter } from "./userAction";
import { loadingSetter } from "./globalAction";

export const emailPoster = (email) => ({
  type: loginActions.postEmail,
  payload: email,
});
export const rememberMePoster = (rememberMe) => ({
  type: loginActions.postRememberMe,
  payload: rememberMe,
});
export const isLogin = (isLogged) => ({
  type: loginActions.setIsLogin,
  payload: isLogged,
});

//THUNK
const baseURL = "https://workintech-fe-ecommerce.onrender.com";

const instance = axios.create({ baseURL });
export const postLoginData = (formData, history) => (dispatch, getState) => {
  dispatch(loadingSetter(true));
  instance
    .post("/login", formData)
    .then((res) => {
      console.log("gelen data", res.data);

      if (formData.rememberMe) {
        localStorage.setItem("token", res.data.token);
        dispatch(isLogin(true));
        // localStorage.setItem("email", res.data.email);
      }
      dispatch(emailPoster(res.data.email));
      dispatch(rememberMePoster(res.data.rememberMe));
      dispatch(userNameSetter(res.data.name));
      dispatch(userEmailSetter(res.data.email));
      dispatch(userIdSetter(res.data.role_id));
      dispatch(loadingSetter(false));
      dispatch(isLogin(true));
      history.push("/home");
      toast.success(`${res.data.name} you have been successfully logged in!`);
    })
    .catch((err) => {
      console.log("hata", err);
      dispatch(loadingSetter(false));
      dispatch(isLogin(false));
      toast.error("Login process has been failed!");
    });
};

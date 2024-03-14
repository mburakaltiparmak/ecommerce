import axios from "axios";
import { loginActions } from "../reducers/loginReducer";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userEmailSetter, userIdSetter, userNameSetter } from "./userAction";

export const emailPoster = (email) => ({
  type: loginActions.postEmail,
  payload: email,
});
export const rememberMePoster = (rememberMe) => ({
  type: loginActions.postRememberMe,
  payload: rememberMe,
});
export const autoLogin = (instance, dispatch) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    if (userName) {
      toast.success(`${userName} Welcome!`);
    }
    if (token) {
      instance
        .get("/verify", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("Auto login", res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userName", res.data.name);
          dispatch(userNameSetter(res.data.name));
        })
        .catch((err) => {
          console.error("login hata", err);
          localStorage.removeItem("token");
        });
    }
  }, []);
};

//THUNK
const baseURL = "https://workintech-fe-ecommerce.onrender.com";
const instance = axios.create({ baseURL });
export const postLoginData =
  (formData, history, setLoading) => (dispatch, getState) => {
    setLoading(true);
    instance
      .post("/login", formData)
      .then((res) => {
        console.log("gelen data", res.data);

        if (formData.rememberMe) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", res.data.email);
        }
        dispatch(emailPoster(res.data.email));
        dispatch(rememberMePoster(res.data.rememberMe));
        dispatch(userNameSetter(res.data.name));
        dispatch(userEmailSetter(res.data.email));
        dispatch(userIdSetter(res.data.role_id));
        setLoading(false);
        history.push("/home");
        toast.success(`${res.data.name} you have been successfully logged in!`);
      })
      .catch((err) => {
        console.log("hata", err);
        setLoading(false);
        toast.error("Login process has been failed!");
      });
  };

import axios from "axios";
import { loginActions } from "../reducers/loginReducer";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const emailPoster = (email) => ({
  type: loginActions.postEmail,
  payload: email,
});
export const rememberMePoster = (rememberMe) => ({
  type: loginActions.postRememberMe,
  payload: rememberMe,
});

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
        setLoading(false);
        history.push("/home");
        toast.success(`You have been successfully logged in!`);
      })
      .catch((err) => {
        console.log("hata", err);
        setLoading(false);
        toast.error("Login process has been failed!");
      });
  };

/*setEmail(res.data.email);*/

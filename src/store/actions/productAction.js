import axios from "axios";
import { useEffect } from "react";
import { actions } from "../reducers/productReducer";
const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

//THUNK KULLANILACAK
/*
useEffect(() => {
    const timeout = setTimeout(() => {
      instance
        .get("/ürün fetch endpointi")
        .then((res) => {
            res.data'dan gelen ürünler buraya setProductList(res.data);
          // loading action ve reducer'ı oluşturulacak
          setLoading(false);
        })
        .catch((err) => {
          console.error("hata", err);
          setLoading(false);
        });
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  */

export const setProductList = (products) => ({
  type: actions.SET_PRODUCT_LIST,
  payload: products,
});

export const setFetchState = (fetchState) => ({
  type: actions.SET_FETCH_STATE,
  payload: fetchState,
});

export const setProductCount = (productCount) => ({
  type: actions.SET_PRODUCT_COUNT,
  payload: productCount,
});

export const setPageCount = (pageCount) => ({
  type: actions.SET_PAGE_COUNT,
  payload: pageCount,
});

export const setActivePage = (activePage) => ({
  type: actions.SET_ACTIVE_PAGE,
  payload: activePage,
});

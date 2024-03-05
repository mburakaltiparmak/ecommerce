import axios from "axios";
import { useEffect } from "react";
import { productActions } from "../reducers/productReducer";
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

export const productListSetter = (products) => ({
  type: productActions.setProductList,
  payload: products,
});

export const fetchStateSetter = (fetchState) => ({
  type: productActions.setFetchState,
  payload: fetchState,
});

export const productCountSetter = (productCount) => ({
  type: productActions.setProductCount,
  payload: productCount,
});

export const pageCountSetter = (pageCount) => ({
  type: productActions.setPageCount,
  payload: pageCount,
});

export const activePageSetter = (activePage) => ({
  type: productActions.setActivePage,
  payload: activePage,
});

import axios from "axios";
import { useEffect } from "react";
import { fetchStates, productActions } from "../reducers/productReducer";
import { useDispatch } from "react-redux";
const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

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

//THUNK
export const getProducts =
  (page = 0, limit) =>
  (dispatch, getState) => {
    const offset = page * limit;
    dispatch(fetchStateSetter(fetchStates.FETCHING));
    return instance
      .get("/products?page=" + page)
      .then((res) => {
        console.log("gelen product", res.data);
        dispatch(productListSetter(res.data.products));
        dispatch(fetchStateSetter(fetchStates.FETCHED));
        dispatch(productCountSetter(res.data.total));
        /*dispatch(pageCountSetter())*/

        //PAGE COUNT VE ACTIVE PAGE COUNT EKLENECEK
      })
      .catch((err) => {
        console.error("hata", err);

        dispatch(fetchStateSetter(fetchStates.FAILED));
      });
  };

import axios from "axios";
import { useEffect } from "react";
import { fetchStates, productActions } from "../reducers/productReducer";
import { useDispatch } from "react-redux";
const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

//THUNK KULLANILACAK
export const getProducts = () => (dispatch, getState) => {
  dispatch(fetchStateSetter(fetchStates.FETCHING));
  instance
    .get("/products")
    .then((res) => {
      console.log("gelen product", res.data);

      dispatch(productListSetter(res.data.products));
      dispatch(fetchStateSetter(fetchStates.FETCHED));
      dispatch(productCountSetter(res.data.total));

      //PAGE COUNT VE ACTIVE PAGE COUNT EKLENECEK
    })
    .catch((err) => {
      console.error("hata", err);

      dispatch(fetchStateSetter(fetchStates.FAILED));
    });
};
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
export const productPerPageSetter = (productPerPage) => ({
  type: productActions.setProductPerPage,
  payload: productPerPage,
});
export const onNavigateNext = () => ({
  type: productActions.onNavigateNext,
});

export const onNavigatePrevious = () => ({
  type: productActions.onNavigatePrevious,
});

export const onChangeProductPerPage = (perPage) => ({
  type: productActions.onChangeProductPerPage,
  payload: perPage,
});

export const onClickCurrentPage = (pageNumber) => ({
  type: productActions.onClickCurrentPage,
  payload: pageNumber,
});

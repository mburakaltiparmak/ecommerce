import axios from "axios";
import { useEffect } from "react";
import { fetchStates, productActions } from "../reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});
export const getProducts =
  (category = "", filter = "", sort = "") =>
  async (dispatch) => {
    dispatch(fetchStateSetter(fetchStates.FETCHING));
    try {
      const res = await instance.get("/products", {
        params: { category, filter, sort },
      });
      console.log("FETCHED PRODUCTS", res.data);
      dispatch(productListSetter(res.data.products));
      dispatch(fetchStateSetter(fetchStates.FETCHED));
      dispatch(productCountSetter(res.data.total));
      // Sayfa sayısını hesapla
      dispatch(productPerPageSetter(20));
      const productPerPage = 20;
      dispatch(pageCountSetter(Math.ceil(res.data.total / productPerPage)));
      dispatch(activePageSetter(1)); // Aktif sayfayı 1 olarak ayarla
    } catch (err) {
      toast.error("An error occured when fetching products!");
      console.error("AN ERROR OCCURED WHEN FETCHING PRODUCTS", err);
      dispatch(fetchStateSetter(fetchStates.FAILED));
    }
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

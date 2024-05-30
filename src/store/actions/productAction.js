import axios from "axios";
import { useEffect } from "react";
import { fetchStates, productActions } from "../reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

//const location = useLocation();
/* export const getProductsToQuery =
  (categoryId, filterParam, sortParam) => async (dispatch) => {
    dispatch(fetchStateSetter(fetchStates.FETCHING));
    let getURL = "/products";

    const queryParams = [];
    if (categoryId != null) {
      queryParams.push(`category=${categoryId}`);
    }
    if (sortParam != null) {
      queryParams.push(`sort=${sortParam}`);
    }
    if (filterParam != null) {
      queryParams.push(`filter=${filterParam}`);
    }
    if (queryParams.length > 0) {
      getURL = getURL + `?${queryParams.join("&")}`;
    }
    try {
      const res = await instance.get(getURL);
      console.log("query ile gelen product", res.data);

      dispatch(productListSetter(res.data.products));
      dispatch(fetchStateSetter(fetchStates.FETCHED));
      dispatch(productCountSetter(res.data.total));

      // Sayfa sayısını hesapla

      dispatch(productPerPageSetter(10));
      const productPerPage = 10;
      dispatch(pageCountSetter(Math.ceil(res.data.total / productPerPage)));

      dispatch(activePageSetter(1)); // Aktif sayfayı 1 olarak ayarla
    } catch (err) {
      console.error("hata", err);
      dispatch(fetchStateSetter(fetchStates.FAILED));
    }
  };
  */
export const getProductsToCategory = (categoryId) => async (dispatch) => {
  dispatch(fetchStateSetter(fetchStates.FETCHING));
  dispatch({ type: "SET_SELECTED_CATEGORY", payload: categoryId });

  try {
    const res = await instance.get(`/products?category=${categoryId}`);
    console.log("category query ile gelen product", res.data);

    dispatch(productListSetter(res.data.products));
    dispatch(fetchStateSetter(fetchStates.FETCHED));
    dispatch(productCountSetter(res.data.total));

    // Sayfa sayısını hesapla

    dispatch(productPerPageSetter(10));
    const productPerPage = 10;
    dispatch(pageCountSetter(Math.ceil(res.data.total / productPerPage)));

    dispatch(activePageSetter(1)); // Aktif sayfayı 1 olarak ayarla
  } catch (err) {
    console.error("hata", err);
    dispatch(fetchStateSetter(fetchStates.FAILED));
  }
};
export const getProductsToSort = (sortParam) => async (dispatch) => {
  dispatch(fetchStateSetter(fetchStates.FETCHING));

  try {
    const res = await instance.get(`/products?sort=${sortParam}`);
    console.log("sort query ile gelen product", res.data);

    dispatch(productListSetter(res.data.products));
    dispatch(fetchStateSetter(fetchStates.FETCHED));
    dispatch(productCountSetter(res.data.total));

    // Sayfa sayısını hesapla

    dispatch(productPerPageSetter(10));
    const productPerPage = 10;
    dispatch(pageCountSetter(Math.ceil(res.data.total / productPerPage)));

    dispatch(activePageSetter(1)); // Aktif sayfayı 1 olarak ayarla
  } catch (err) {
    console.error("hata", err);
    dispatch(fetchStateSetter(fetchStates.FAILED));
  }
};
export const getProductsToFilter = (filterParam) => async (dispatch) => {
  dispatch(fetchStateSetter(fetchStates.FETCHING));

  try {
    const res = await instance.get(`/products?filter=${filterParam}`);
    console.log("filter query ile gelen product", res.data);

    dispatch(productListSetter(res.data.products));
    dispatch(fetchStateSetter(fetchStates.FETCHED));
    dispatch(productCountSetter(res.data.total));

    // Sayfa sayısını hesapla

    dispatch(productPerPageSetter(10));
    const productPerPage = 10;
    dispatch(pageCountSetter(Math.ceil(res.data.total / productPerPage)));

    dispatch(activePageSetter(1)); // Aktif sayfayı 1 olarak ayarla
  } catch (err) {
    console.error("hata", err);
    dispatch(fetchStateSetter(fetchStates.FAILED));
  }
};
export const getProducts = () => async (dispatch) => {
  dispatch(fetchStateSetter(fetchStates.FETCHING));

  try {
    const res = await instance.get("/products");
    console.log("gelen product", res.data);

    dispatch(productListSetter(res.data.products));
    dispatch(fetchStateSetter(fetchStates.FETCHED));
    dispatch(productCountSetter(res.data.total));

    // Sayfa sayısını hesapla

    dispatch(productPerPageSetter(10));
    const productPerPage = 10;
    dispatch(pageCountSetter(Math.ceil(res.data.total / productPerPage)));

    dispatch(activePageSetter(1)); // Aktif sayfayı 1 olarak ayarla
  } catch (err) {
    console.error("hata", err);
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

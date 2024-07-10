import axios from "axios";
import { globalActions } from "../reducers/globalReducer";
import { fetchStateSetter } from "./productAction";
import { fetchStates } from "../reducers/productReducer";

export const rolesSetter = (roles) => ({
  type: globalActions.setRoles,
  payload: roles,
});
export const categoriesSetter = (categories) => ({
  type: globalActions.setCategories,
  payload: categories,
});
export const themeSetter = (theme) => ({
  type: globalActions.setTheme,
  payload: theme,
});
export const languageSetter = (language) => ({
  type: globalActions.setLanguage,
  payload: language,
});
export const loadingSetter = (loading) => ({
  type: globalActions.setLoading,
  payload: loading,
});

//THUNKS

//ROLES
const baseURL = "https://workintech-fe-ecommerce.onrender.com";
const instance = axios.create({ baseURL });
export const getRoles = () => (dispatch, getState) => {
  instance
    .get("/roles")
    .then((res) => {
      console.log("gelen data", res.data);
      dispatch(rolesSetter(res.data));
    })
    .catch((err) => {
      console.log("hata", err);
    });
};

//CATEGORIES
export const getCategories = () => (dispatch) => {
  dispatch(fetchStateSetter(fetchStates.FETCHING));
  instance
    .get("/categories")
    .then((res) => {
      dispatch(categoriesSetter(res.data));
      dispatch(fetchStateSetter(fetchStates.FETCHED));
    })
    .catch((err) => {
      console.log("categories hata", err);
    });
};

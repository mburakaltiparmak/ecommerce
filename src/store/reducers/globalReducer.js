import { act } from "react";

const initialState = {
  roles: [""],
  categories: [],
  theme: "",
  language: "",
  loading: true,
};
export const globalActions = {
  setRoles: "SET_ROLES",
  setCategories: "SET_CATEGORIES",
  setTheme: "SET_THEME",
  setLanguage: "SET_LANGUAGE",
  setLoading: "SET_LOADING",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case globalActions.setRoles:
      return {
        ...state,
        roles: action.payload,
      };
    case globalActions.setCategories:
      return {
        ...state,
        categories: action.payload,
      };
    case globalActions.setTheme:
      return {
        ...state,
        theme: action.payload,
      };
    case globalActions.setLanguage:
      return {
        ...state,
        language: action.payload,
      };
    case globalActions.setLoading:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
export default globalReducer;

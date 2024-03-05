import { globalActions } from "../reducers/globalReducer";

export const setRoles = (roles) => ({
  type: globalActions.SET_ROLES,
  payload: roles,
});
export const setCategories = (categories) => ({
  type: globalActions.SET_CATEGORIES,
  payload: categories,
});
export const setTheme = (theme) => ({
  type: globalActions.SET_THEME,
  payload: theme,
});
export const setLanguage = (language) => ({
  type: globalActions.SET_LANGUAGE,
  payload: language,
});

import { globalActions } from "../reducers/globalReducer";

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

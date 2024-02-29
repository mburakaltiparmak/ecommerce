const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};
const globalActions = {
  setRoles: "SET_ROLES",
  setCategories: "SET_CATEGORIES",
  setTheme: "SET_THEME",
  setLanguage: "SET_LANGUAGE",
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
    default:
      return state;
  }
};
export default globalReducer;

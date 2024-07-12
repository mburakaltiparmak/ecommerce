const initialState = {
  email: "",
  password: "",
  rememberMe: false,
  isLogged: false,
};

export const loginActions = {
  postEmail: "POST_EMAIL",
  postRememberMe: "POST_REMEMBER_ME",
  setIsLogin: "SET_IS_LOGIN",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActions.postEmail:
      return {
        ...state,
        email: action.payload,
      };
    case loginActions.postRememberMe:
      return {
        ...state,
        rememberMe: action.payload,
      };
    case loginActions.setIsLogin:
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
};

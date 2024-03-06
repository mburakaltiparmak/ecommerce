const initialState = {
  email: "",
  password: "",
  rememberMe: false,
};

export const loginActions = {
  postEmail: "POST_EMAIL",
  postRememberMe: "POST_REMEMBER_ME",
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
    default:
      return state;
  }
};

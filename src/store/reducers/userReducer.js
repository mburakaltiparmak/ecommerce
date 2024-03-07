const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
    role_id: "",
  },
};

export const userActions = {
  setUserName: "SET_USER_NAME",
  setUserEmail: "SET_USER_EMAIL",
  setUserId: "SET_USER_ID",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.setUserName:
      return {
        ...state,
        name: action.payload,
      };
    case userActions.setUserEmail:
      return {
        ...state,
        email: action.payload,
      };
    case userActions.setUserId:
      return {
        ...state,
        role_id: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
    role_id: "",
  },
};

export const actions = {
  setUserName: "SET_USER_NAME",
  setUserEmail: "SET_USER_EMAIL",
  setUserId: "SET_USER_ID",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAction.setUserName:
      return {
        ...state,
        name: action.payload,
      };
    case userAction.setUserEmail:
      return {
        ...state,
        email: action.payload,
      };
    case userAction.setUserId:
      return {
        ...state,
        role_id: action.payload,
      };
    default:
      return state;
  }
};

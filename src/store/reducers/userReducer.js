const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
    role_id: "",
  },
};

export const userAction = {
  setUser: "SET_USER",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userAction.setUser:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

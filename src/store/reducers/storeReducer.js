const initialState = {
  store: {
    name: "",
    phone: "",
    tax_no: "",
    bank_account: "",
  },
};

export const storeActions = {
  setStore: "SET_STORE",
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case storeActions.setStore:
      return {
        ...state,
        store: action.payload,
      };
    default:
      return state;
  }
};

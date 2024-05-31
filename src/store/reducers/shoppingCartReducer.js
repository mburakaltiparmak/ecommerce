const initialState = {
  cart: [],
  payment: {},
  address: {},
};

export const shoppingCartActions = {
  setAddCart: "SET_ADD_CART",
  setAddPayment: "SET_ADD_PAYMENT",
  setAddAddress: "SET_ADD_ADDRESS",
  setCheck: "SET_CHECK",
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case shoppingCartActions.setAddCart:
      const isThatAddedCart = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      if (isThatAddedCart) {
        const newCart = state.cart.map((item) =>
          item.product.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
        return {
          ...state,
          cart: newCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { count: 1, product: action.payload }],
        };
      }
    case shoppingCartActions.setAddPayment:
      return {
        ...state,
        payment: action.payload,
      };
    case shoppingCartActions.setAddAddress:
      return {
        ...state,
        address: action.payload,
      };
    case shoppingCartActions.setCheck:
      return {
        ...state,
        checked: action.payload,
      };
    default:
      return state;
  }
};

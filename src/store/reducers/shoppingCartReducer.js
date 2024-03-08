const initialState = {
  cart: [
    {
      count: 0,

      product: {
        id: null,
      },
    },
  ],
  payment: {},
  address: {},
};
export const shoppingCartActions = {
  setAddCart: "SET_ADD_CART",
  setAddPayment: "SET_ADD_PAYMENT",
  setAddAddress: "SET_ADD_ADDRESS",
};
export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case shoppingCartActions.setAddCart:
      const isThatAddedCart = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      if (isThatAddedCart !== -1) {
        const newCart = [...state.cart];
        newCart[isThatAddedCart] = {
          ...newCart[isThatAddedCart],
          count: newCart[isThatAddedCart].count + 1,
        };
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
    default:
      return state;
  }
};

const initialState = {
  cart: [],
  payment: {},
  address: {},
  shipment:null,
  currentPayment: {},
};

export const shoppingCartActions = {
  setAddCart: "SET_ADD_CART",
  setAddPayment: "SET_ADD_PAYMENT",
  setAddAddress: "SET_ADD_ADDRESS",
  setCheck: "SET_CHECK",
  setRemoveFromCart: "SET_REMOVE_FROM_CART",
  setClearCart: "SET_CLEAR_CART",
  setUpdateCart: "SET_UPDATE_CART",
  setShipment: "SET_SHIPMENT",
  setCurrentPayment: "SET_CURRENT_PAYMENT",
  setRemovePayment : "SET_REMOVE_PAYMENT",
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
    case shoppingCartActions.setRemoveFromCart:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case shoppingCartActions.setClearCart:
      return {
        ...state,
        cart: [],
      };
    case shoppingCartActions.setUpdateCart: {
      const updatedCart = state.cart.map((item) =>
        item.product.id === action.payload.id
          ? { ...item, count: action.payload.newCount }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case shoppingCartActions.setShipment: 
    return {
      ...state,
      shipment : action.payload,
    }
    case shoppingCartActions.setCurrentPayment:
      return {
        ...state,
        currentPayment : action.payload,
      };
    case shoppingCartActions.setRemovePayment:
      return {
        ...state,
        currentPayment: state.currentPayment.filter(
          (card) => card.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

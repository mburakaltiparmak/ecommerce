const initialState = {
  address_id: null,
  order_date: "",
  card_no: null,
  card_name: "",
  card_expire_month: null,
  card_expire_year: null,
  card_ccv: null,
  price: null,
  products: [],
};
export const orderActions = {
  setAddressId: "SET_ADDRESS_ID",
  setOrderDate: "SET_ORDER_DATE",
  setCardNo: "SET_CARD_NO",
  setCardName: "SET_CARD_NAME",
  setCardExpireMonth: "SET_CARD_EXPIRE_MONTH",
  setCardExpireYear: "SET_CARD_EXPIRE_YEAR",
  setCardCCV: "SET_CARD_CCV",
  setPrice: "SET_PRICE",
  setProducts: "SET_PRODUCTS",
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderActions.setAddressId:
      return {
        ...state,
        address_id: action.payload,
      };
    case orderActions.setOrderDate:
      return {
        ...state,
        order_date: action.payload,
      };
    case orderActions.setCardNo:
      return {
        ...state,
        card_no: action.payload,
      };
    case orderActions.setCardName:
      return {
        ...state,
        card_name: action.payload,
      };
    case orderActions.setCardExpireMonth:
      return {
        ...state,
        card_expire_month: action.payload,
      };
    case orderActions.setCardExpireYear:
      return {
        ...state,
        card_expire_year: action.payload,
      };
    case orderActions.setCardCCV:
      return {
        ...state,
        card_ccv: action.payload,
      };
    case orderActions.setPrice:
      return {
        ...state,
        price: action.payload,
      };
    case orderActions.setProducts:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  product: {
    productList: {},
    totalProductCount: 0,
    pageCount: 1,
    activePage: 1,
    fetchState: fetchState.NOT_FETCHED,
  },
};
export const fetchStates = {
  NOT_FETCHED: "NOT_FETCHED",
  FETCHING: "FETCHING",
  FETCHED: "FETCHED",
  FAILED: "FAILED",
};

export const actions = {
  SET_PRODUCT_LIST: "SET_PRODUCT_LIST",
  SET_PRODUCT_COUNT: "SET_PRODUCT_COUNT",
  SET_PAGE_COUNT: "SET_PAGE_COUNT",
  SET_ACTIVE_PAGE: "SET_ACTIVE_PAGE",
  SET_FETCH_STATE: "SET_FETCH_STATE",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case actions.SET_PRODUCT_COUNT:
      return {
        ...state,
        totalProductCount: action.payload,
      };
    case actions.SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: action.payload,
      };
    case actions.SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    case actions.SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload,
      };
    default:
      return state;
  }
};

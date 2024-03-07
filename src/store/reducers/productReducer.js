export const fetchStates = {
  NOT_FETCHED: "NOT_FETCHED",
  FETCHING: "FETCHING",
  FETCHED: "FETCHED",
  FAILED: "FAILED",
};
const initialState = {
  product: {
    productList: {},
    totalProductCount: 0,
    pageCount: 1,
    activePage: 1,
    fetchState: fetchStates.NOT_FETCHED,
  },
};

export const productActions = {
  setProductList: "SET_PRODUCT_LIST",
  setProductCount: "SET_PRODUCT_COUNT",
  setPageCount: "SET_PAGE_COUNT",
  setActivePage: "SET_ACTIVE_PAGE",
  setFetchState: "SET_FETCH_STATE",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActions.setProductList:
      return {
        ...state,
        productList: action.payload,
      };
    case productActions.setProductCount:
      return {
        ...state,
        totalProductCount: action.payload,
      };
    case productActions.setPageCount:
      return {
        ...state,
        pageCount: action.payload,
      };
    case productActions.setActivePage:
      return {
        ...state,
        activePage: action.payload,
      };
    case productActions.setFetchState:
      return {
        ...state,
        fetchState: action.payload,
      };
    default:
      return state;
  }
};

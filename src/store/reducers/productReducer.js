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

export const productActions = {
  setProductList: "SET_PRODUCT_LIST",
  setProductCount: "SET_PRODUCT_COUNT",
  setPageCount: "SET_PAGE_COUNT",
  setActivePage: "SET_ACTIVE_PAGE",
  setFetchState: "SET_FETCH_STATE",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.setProductList:
      return {
        ...state,
        productList: action.payload,
      };
    case actions.setProductCount:
      return {
        ...state,
        totalProductCount: action.payload,
      };
    case actions.setPageCount:
      return {
        ...state,
        pageCount: action.payload,
      };
    case actions.setActivePage:
      return {
        ...state,
        activePage: action.payload,
      };
    case actions.setFetchState:
      return {
        ...state,
        fetchState: action.payload,
      };
    default:
      return state;
  }
};

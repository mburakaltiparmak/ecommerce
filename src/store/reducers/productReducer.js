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
    productPerPage: 10,
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
  setProductPerPage: "SET_PRODUCT_PER_PAGE",
  onNavigateNext: "ON_NAVIGATE_NEXT",
  onNavigatePrevious: "ON_NAVIGATE_PREVIOUS",
  onChangeProductPerPage: "ON_CHANGE_PRODUCT_PER_PAGE",
  onClickCurrentPage: "ON_CLICK_CURRENT_PAGE",
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
    case productActions.setProductPerPage:
      return {
        ...state,
        productPerPage: action.payload,
      };
    case productActions.onNavigateNext:
      return {
        ...state,
        activePage: activePage + 1,
      };
    case productActions.onNavigatePrevious:
      if (state.activePage === 1) {
        return {
          ...state,
          activePage: 1,
        };
      } else {
        return {
          ...state,
          activePage: state.activePage - 1,
        };
      }
    case productActions.onChangeProductPerPage:
      return {
        ...state,
        productPerPage: action.payload,
      };
    case productActions.onClickCurrentPage:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};

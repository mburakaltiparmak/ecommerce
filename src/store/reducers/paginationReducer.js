import { createSlice, configureStore } from "@reduxjs/toolkit";

export const fetchProducts = () => {
  return async (dispatch) => {
    const fetchProductsFromApi = async () => {
      const response = await fetch(
        "https://workintech-fe-ecommerce.onrender.com/products"
      );
      return response;
    };
    try {
      const product = await fetchProductsFromApi();
      dispatch(productSlice.action.fetchProduct(product));
    } catch (error) {
      console.log(error);
    }
  };
};
export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    productPerPage: 10,
    currentPage: 1,
  },
  reducers: {
    fetchProduct: (state, action) => {
      state.product = [...action.payload];
    },
    onNavigateNext: (state) => {
      state.currentPage++;
    },
    onNavigatePrevious: (state) => {
      if (state.currentPage == 1) {
        state.currentPage = 1;
      } else {
        state.currentPage++;
      }
    },
    onChangeProductPerPage: (state, action) => {
      state.productPerPage = action.payload;
    },
    onClickCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});
export const productFetchAction = productSlice.action;

const loadingInitial = {
  loading: false,
};
export const loadingAction = {
  setLoading: "SET_LOADING",
};
export const loadingReducer = (state = loadingInitial, action) => {
  switch (action.type) {
    case loadingAction.setLoading:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

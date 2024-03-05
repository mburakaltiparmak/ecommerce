import { loadingAction } from "../reducers/loadingReducer";

export const loadingSetter = (loading) => ({
  type: loadingAction.setLoading,
  payload: loading,
});

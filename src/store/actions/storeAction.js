import { storeActions } from "../reducers/storeReducer";

export const setStoreCreator = (store) => ({
  type: storeActions.setStore,
  payload: store,
});

import axios from "axios";

import { actions } from "../reducers/userReducer";

export const setUserName = (name) => ({
  type: actions.SET_USER_NAME,
  payload: name,
});

export const setUserEmail = (email) => ({
  type: actions.SET_USER_EMAIL,
  payload: email,
});

export const setUserId = (role_id) => ({
  type: actions.SET_USER_ID,
  payload: role_id,
});

//THUNK ACTIONS EKLENECEK

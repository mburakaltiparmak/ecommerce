import axios from "axios";

import { userActions } from "../reducers/userReducer";

export const userName = (name) => ({
  type: userActions.setUserName,
  payload: name,
});

export const userEmail = (email) => ({
  type: userActions.setUserEmail,
  payload: email,
});

export const userId = (role_id) => ({
  type: userActions.setUserId,
  payload: role_id,
});

//THUNK ACTIONS EKLENECEK

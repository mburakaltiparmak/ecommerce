import axios from "axios";

import { userActions } from "../reducers/userReducer";

export const userNameSetter = (name) => ({
  type: userActions.setUserName,
  payload: name,
});

export const userEmailSetter = (email) => ({
  type: userActions.setUserEmail,
  payload: email,
});

export const userIdSetter = (role_id) => ({
  type: userActions.setUserId,
  payload: role_id,
});

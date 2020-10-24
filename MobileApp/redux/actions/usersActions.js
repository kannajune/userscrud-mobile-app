import * as types from "./actionTypes";
import ApiService from "../../APIService";

const applicationAPI = new ApiService();
export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
  return function (dispatch) {
    return applicationAPI
      .getAllUsers()
      .then((users) => {
        dispatch(loadUsersSuccess(users));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveUserSuccess(user) {
  return { type: types.SAVE_USER, user };
}

export function updateUserSuccess(user) {
  return { type: types.UPDATE_USER, user };
}

export function deleteUserSuccess(user) {
  return { type: types.DELETE_USER, user };
}

export function saveUser(user) {
  return function (dispatch) {
    return applicationAPI
      .createUser(user)
      .then(() => {
        dispatch(saveUserSuccess(user));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updateUser(user) {
  return function (dispatch) {
    return applicationAPI
      .putUser(user)
      .then(() => {
        dispatch(updateUserSuccess(user));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deleteUser(user) {
  return function (dispatch) {
    return applicationAPI
      .deleteUserById(user.id)
      .then(() => {
        dispatch(deleteUserSuccess(user));
      })
      .catch((error) => {
        throw error;
      });
  };
}

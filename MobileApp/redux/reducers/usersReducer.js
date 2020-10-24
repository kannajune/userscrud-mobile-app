import * as types from "../actions/actionTypes";

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.users;

    case types.SAVE_USER:
      return [{ ...action.user }, ...state];

    case types.UPDATE_USER:
      return state.map((user) =>
        user.id === action.user.id ? action.user : user
      );
    case types.DELETE_USER:
      return state.filter((item) => item.id != action.user.id);

    default:
      return state;
  }
}

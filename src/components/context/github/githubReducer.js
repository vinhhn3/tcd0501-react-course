import { CLEAR_USERS, GET_USER, SEARCH_USERS } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        usersData: action.payload,
      };
    case CLEAR_USERS:
      return {};
    case GET_USER:
      return {};
    default:
      return state;
  }
};

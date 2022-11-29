import axios from "axios";
import { useReducer } from "react";
import { CLEAR_USERS, GET_USER, SEARCH_USERS } from "../types";
import GitHubContext from "./githubContext";
import GithubReducer from "./githubReducer";

const GithubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  const getUser = async (loginId) => {
    const response = await axios.get(`https://api.github.com/users/${loginId}`);
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        usersData: state.usersData,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GithubState;

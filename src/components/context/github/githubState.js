import axios from "axios";
import { useReducer } from "react";
import { CLEAR_USERS, SEARCH_USERS } from "../types";
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

  return (
    <GitHubContext.Provider
      value={{
        usersData: state.usersData,
        user: state.user,
        searchUsers,
        clearUsers,
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GithubState;

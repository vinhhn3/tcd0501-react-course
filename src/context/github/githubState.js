import { useReducer } from "react";
import { getGithubUser, getGithubUsers } from "../../api/GithubApi";
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
    const response = await getGithubUsers(text);
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
    const response = await getGithubUser(loginId);
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

import { useReducer } from "react";
import GitHubContext from "./githubContext";
import GithubReducer from "./githubReducer";

const GithubState = (props) => {
  const initialState = {
    usersData: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GitHubContext.Provider
      value={{
        usersData: state.usersData,
        user: state.user,
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GithubState;

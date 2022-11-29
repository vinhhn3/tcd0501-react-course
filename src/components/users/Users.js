import React, { useContext } from "react";
import GitHubContext from "../../context/github/githubContext";
import UserItem from "./UserItem";
const Users = () => {
  const githubContext = useContext(GitHubContext);

  const { usersData } = githubContext;
  return (
    <div style={userStyle}>
      {usersData.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;

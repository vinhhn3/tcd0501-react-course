import React, { useContext } from "react";
import GithubContext from "../context/github/githubContext";
import UserItem from "./UserItem";
const Users = () => {
  const githubContext = useContext(GithubContext);

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

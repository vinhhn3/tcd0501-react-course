import React from "react";
import { Link } from "react-router-dom";
const UserItem = (props) => {
  const { avatar_url, login } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
        alt="avatar"
      />
      <h3>{login}</h3>
      <Link className="btn btn-primary btn-sm" to={`/user/${login}`}>
        More
      </Link>
    </div>
  );
};

export default UserItem;

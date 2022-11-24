import React from "react";

const UserItem = (props) => {
  const { avatar_url, login, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
        alt="avatar"
      />
      <h3>{login}</h3>
      <a className="btn btn-primary btn-sm" href={html_url}>
        More
      </a>
    </div>
  );
};

export default UserItem;

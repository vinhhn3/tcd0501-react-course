import axios from "axios";
import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  state = {
    usersData: [],
  };

  componentDidMount() {
    console.log("Users item mounted ...");
    axios.get("https://api.github.com/users").then((response) => {
      console.log(response.data);
      this.setState({
        usersData: response.data,
      });
    });
  }
  render() {
    return (
      <div style={userStyle}>
        {this.state.usersData.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;

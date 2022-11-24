import axios from "axios";
import { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    usersData: [],
    searchText: "",
  };

  searchUsers = (text) => {
    axios
      .get(`https://api.github.com/search/users?q=${text}`)
      .then((response) => {
        console.log(response);
        this.setState({
          usersData: response.data.items,
        });
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;

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
    this.setState({ searchText: text });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users usersData={this.state.usersData} />
          {this.state.searchText}
        </div>
      </div>
    );
  }
}

export default App;

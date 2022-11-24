import axios from "axios";
import { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    usersData: [],
  };

  componentDidMount() {
    axios.get("https://api.github.com/users").then((response) => {
      this.setState({
        usersData: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search />
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;

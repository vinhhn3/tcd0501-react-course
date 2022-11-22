import { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;

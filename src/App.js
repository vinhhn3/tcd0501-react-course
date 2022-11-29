import axios from "axios";
import { Component, Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    usersData: [],
    searchText: "",
    user: {},
  };

  searchUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ usersData: response.data.items });
  };

  clearUsers = () => {
    this.setState({ usersData: [] });
    this.setState({ user: {} });
  };

  getUser = async (loginId) => {
    const response = await axios.get(`https://api.github.com/users/${loginId}`);
    this.setState({
      user: response.data,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                  />
                  <Users usersData={this.state.usersData} />
                </Fragment>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/user/:loginId">
                <User user={this.state.user} getUser={this.getUser} />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

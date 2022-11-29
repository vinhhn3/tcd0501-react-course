import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Search from "../users/Search";
import User from "../users/User";
import Users from "../users/Users";
import About from "./About";
import NotFound from "./NotFound";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Fragment>
              <Search />
              <Users />
            </Fragment>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/user/:loginId">
            <User />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Home;

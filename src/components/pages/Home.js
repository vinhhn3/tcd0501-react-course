import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../layout/Navbar";
import SearchBody from "../layout/SearchBody";
import User from "../users/User";
import About from "./About";
import NotFound from "./NotFound";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <SearchBody />
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

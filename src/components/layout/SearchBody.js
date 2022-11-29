import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";

function SearchBody() {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
}

export default SearchBody;

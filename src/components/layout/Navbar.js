import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-primary">
        <h1>GitHub Finder</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

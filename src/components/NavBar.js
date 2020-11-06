/* Import Dependencies */

import React from "react";
import { Link, NavLink } from "react-router-dom";

// Create the NavBar component
const Navbar = () => {
  // Return the NavBar
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">
          Ay Times
        </Link>
        <ul className="right">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Export router
export default Navbar;
// you can access props from the Browser Router to set up programmatic redirects ot use HOC withRouter

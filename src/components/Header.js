import React, { Component } from "react";
import { Link } from "@reach/router";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <Link className="link" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="link" to="/about">
            <h3>About</h3>
          </Link>
          <Link className="link" to="gifts">
            <h3>Gifts</h3>
          </Link>
          <Link className="link" to="/antiques">
            <h3>Antiques</h3>
          </Link>
          <Link className="link" to="/books">
            <h3>Books</h3>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;

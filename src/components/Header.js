import React, { Component } from "react";
import { Link } from "@reach/router";

class Header extends Component {
  state = {
    showMenu: false,
  };

  toggleMenu = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  };

  componentDidUpdate() {
    const { showMenu } = this.state;

    setTimeout(() => {
      if (showMenu) {
        window.addEventListener("click", this.close);
      } else {
        window.removeEventListener("click", this.close);
      }
    }, 0);
  }

  render() {
    return (
      <header className="header">
        <nav className="nav">
          <div className="navLinks">
          <Link className="link" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="link" to="/about">
            <h3>About</h3>
          </Link>
          </div>
          <div className="menuLink link">
            <h3 onClick={this.toggleMenu}>Departments</h3>
          </div>
        </nav>
        {this.state.showMenu ? (
          <div className="menu">
            <Link className="link" to="/books">
              <h3> Christian Books </h3>
            </Link>
            <h3> Antiques </h3>
            <h3> Collectables </h3>
          </div>
        ) : null}
      </header>
    );
  }
}

export default Header;

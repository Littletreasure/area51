import React, { Component } from "react";
import { Link } from "@reach/router";
import area51 from "../images/area51small.jpeg";


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
        <img className="area51" src={area51} alt="area51" />

        <nav className="nav">
          <Link className="link" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="link" to="/about">
            <h3>About</h3>
          </Link>
          <Link className="link" to="/departments">
            <h3>Departments</h3>
          </Link>
        </nav>
        {/* {this.state.showMenu ? (
          <div className="menu">
            <Link className="link" to="/books" onClick={this.toggleMenu}>
              <h3> Christian Books </h3>
            </Link>
            <h3> Antiques </h3>
            <h3> Collectables </h3>
          </div>
        ) : null} */}
      </header>
    );
  }
}

export default Header;

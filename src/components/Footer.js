import React, { Component } from "react";
import { Link } from "@reach/router";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Link className="link" to="/contact">
          <h3>Contact</h3>
        </Link>
      </footer>
    );
  }
}

export default Footer;

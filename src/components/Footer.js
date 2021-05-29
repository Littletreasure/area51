import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="address">
          <p>17 Cambridge Walks</p>
          <p>Southport PR8 1EN</p>
        </div>
        <div className="links">
          <a className="link" href="mailto:area51southport@aol.com">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
          </a>
          <a className="link" href="https://www.facebook.com/Area51Southport">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;

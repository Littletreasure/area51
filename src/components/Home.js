import React, { Component } from "react";
import area51Sign from "../images/Area51Signsmall.jpeg";


class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Welcome to Area 51</h2>
        <img src={area51Sign} alt="area 51 sign" />
      </div>
    );
  }
}

export default Home;

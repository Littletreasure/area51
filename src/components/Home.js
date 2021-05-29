import React, { Component } from "react";
import area51Sign from "../images/Area51Signsmall.jpeg";


class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Welcome to Area 51</h2>
        <img src={area51Sign} alt="area 51 sign" />
        <p>
          We sell - Art Deco, Collectables, Comics, Retro, Sci-Fi, Toys/Games, Vinyl, Football Memorabilia, Christian Books and Cards.
        </p>
      </div>
    );
  }
}

export default Home;

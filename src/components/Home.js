import React, { Component } from "react";
import area51Sign from "../images/Area51Signsmall.jpeg";
import { Link } from "@reach/router";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Welcome to Area 51</h2>
        <img src={area51Sign} alt="area 51 sign" />
        <p>
          We sell - Christian books and cards, Vinyl, Jewellery, Sci-Fi, Football memorabilia, Vintage school items, Ceramics/porcelain/glassware, Toys/Games.
        </p>
        <Link to="/departments"><p>See more ...</p></Link>
      </div>
    );
  }
}

export default Home;

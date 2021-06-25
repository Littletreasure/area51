import React, { Component } from "react";
import { Link } from "@reach/router";


class Departments extends Component {
  render() {
    return (
      <div className="departments">
        <h2>Departments</h2>
        <p>Area 51 has a very eclectic collection of items for sale</p>
        <ul>
          <Link to="/departments/books">
          <li>Christian books and cards</li>
          </Link>
          <li>Vinyl</li>
          <li>Jewellery</li>
          <li>
            Sci-fi:
            <ul>
              <li>comics</li>
              <li>collectables</li>
              <li>Star Wars</li>
              <li>Eagle</li>
            </ul>
          </li>
          <li>Football memorabilia:
            <ul>
              <li>vintage kits</li>
              <li>programmes</li>
              <li>autobiographies</li>
              <li>collectables</li>
            </ul>
          </li>
          <li>Vintage school items:
            <ul>
              <li>vintage school equipment</li>
              <li>vintage badges & uniform</li>
            </ul>
          </li>
          <li>Ceramics/porcelain/glassware:
            <ul>
              <li>art deco</li>
              <li>Clarice Cliff, Shelley, Susie Cooper</li>
              <li>Coalport, Royal Doulton</li>
              <li>Swarovski</li>
            </ul>
          </li>
          <li>Caron's cute creations</li>
        </ul>
      </div>
    );
  }
}

export default Departments;

import React, { Component } from "react";
import area51Sign from "../images/Area51Signsmall.jpeg";


class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Welcome to Area 51</h2>
        <img src={area51Sign} alt="area 51 sign" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
          ornare velit, in porta metus. Curabitur vel facilisis diam. Ut
          tincidunt sodales nunc, rutrum vestibulum dolor finibus id.
          Pellentesque viverra justo eget lectus bibendum volutpat. Nam ac
          mauris eu felis consectetur vestibulum. Donec ultricies cursus nisl a
          volutpat. In lacinia egestas dui, et lacinia mauris. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Morbi bibendum ipsum id purus malesuada fermentum. Aliquam
          viverra dolor lacus, non ornare nulla suscipit sed. Suspendisse et
          lacus a orci rutrum varius a ac odio.
        </p>
        <p>
          Donec sed augue accumsan leo vehicula vulputate at egestas justo.
          Pellentesque facilisis aliquam dapibus. Donec quis sem risus. Morbi
          magna ex, sodales at libero quis, aliquet feugiat odio. Vivamus
          euismod tristique orci vel sagittis. Quisque nibh libero, volutpat at
          neque ac, mattis auctor dolor. Nulla non ante justo. Aenean odio
          ligula, posuere tempor tempor vel, tempor nec tellus. Vestibulum
          congue risus id libero dapibus, non auctor metus rhoncus. Integer et
          sem sed leo sollicitudin consectetur eu non magna. Aliquam elit eros,
          dictum non mauris ut, dictum vehicula mauris. Quisque in nulla
          venenatis, faucibus arcu ac, molestie sem.
        </p>
      </div>
    );
  }
}

export default Home;

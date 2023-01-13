import React from "react";
import Header from "./Header";
import Musicpage from "./Music_page";
import Poster from "./Poster";

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Header cartHandle={props} />
      <Poster />
      <Musicpage />
    </div>
  );
};

export default Home;

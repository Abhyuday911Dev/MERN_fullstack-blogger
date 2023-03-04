import React from "react";
import Hero from "./Hero";
import Homeblogs from "./Homeblogs";
import Nav from "./Nav";

const Homepagecommon = () => {
  return (
    <>
      <Nav />
      <Hero />
      <div className="d-flex home-bottom">
        <Homeblogs />
      </div>
    </>
  );
};

export default Homepagecommon;

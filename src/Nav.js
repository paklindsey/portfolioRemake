import React from "react";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="home">
        <button type="button">home</button>
      </div>
      <div className="about">
        <button type="button">about</button>
      </div>
      <div className="projects">
        <button type="button">projects</button>
      </div>
      <div className="contact">
        <button type="button">contact</button>
      </div>
    </div>
  );
};

export default Nav;

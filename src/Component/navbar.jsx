//import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" hred="#">
        NavBar
        <span className="badge bg-secondary m-2">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;

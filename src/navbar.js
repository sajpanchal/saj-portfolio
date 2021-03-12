import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AboutMe from "./aboutme";
import Portfolio from "./portfolio";
function Navbar() {
  return (
    <React.StrictMode>
      <nav className="bg-light" style={{ height: "3vw" }}>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <NavLink
            className="nav-link"
            id="nav-home-tab"
            data-toggle="tab"
            to="/aboutme"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            style={{
              fontSize: "1.5vw",
              height: "3.0vw",
              padding: "0.3vw 1vw 1vw 1vw",
              fontWeight: "normal",
              lineHeight: "2vw",
              border: "0.2vw solid transparent",
              borderTopLeftRadius: "0.5vw",
              borderTopRightRadius: "0.5vw",
            }}
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            to="/portfolio"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
            style={{
              fontSize: "1.5vw",
              height: "3.0vw",
              padding: "0.3vw 1vw 1vw 1vw",
              fontWeight: "normal",
              lineHeight: "2vw",
            }}
          >
            Portfolio
          </NavLink>
          <NavLink
            className="nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            to="/projectlinks"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
            style={{
              fontSize: "1.5vw",
              height: "3.0vw",
              padding: "0.3vw 1vw 1vw 1vw",
              fontWeight: "normal",
              lineHeight: "2vw",
            }}
          >
            Project Links
          </NavLink>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        ></div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        ></div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        ></div>
      </div>
    </React.StrictMode>
  );
}

export default Navbar;

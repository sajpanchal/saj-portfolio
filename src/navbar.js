import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <React.StrictMode>
      <nav className="bg-light" style={{ height: "3vw" }}>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <NavLink
            className="nav-link"
            id="nav-home-tab"
            data-toggle="tab"
            to="/projectlinks"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
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
          >
            Portfolio
          </NavLink>
          <NavLink
            className="nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            to="/aboutme"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            About Me
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

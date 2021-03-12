import React, { Component } from "react";
import logo from "./assets/logo.png";
import "./aboutme.css";
function Header() {
  return (
    <div className="card mb-0 bg-dark text-white">
      <div className="row no-gutters" style={{ height: "20%" }}>
        <div className="col-md-2 d-flex justify-content-center">
          <img
            className="rounded-circle"
            src={logo}
            alt="..."
            style={{ width: "160px", height: "160px" }}
            id="profile"
          />
        </div>
        <div className="col-md-8 d-flex justify-content-center">
          <div className="card-body text-center">
            <h1 className="card-title font-weight-bold">Saj Panchal</h1>
            <h6 className="card-title text-white font-weight-bold">
              iOS Developer
            </h6>
            <p className="card-text">
              <small className="text-muted">Waterloo, Ontario</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;

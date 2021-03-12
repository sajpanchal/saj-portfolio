import React, { Component } from "react";
import eCommerce from "./assets/eCommerce.png";
import Myforcast from "./assets/Myforcast.png";
import COVID19 from "./assets/COVID-19.png";
import "./aboutme.css";
function ProjectLinks() {
  return (
    <React.StrictMode>
      <p
        className=" text-primary font-weight-bold p-2 text-center"
        id="heading"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
        }}
      >
        "Take a look into my awesome projects!"
      </p>

      <div className="bg-light border" id="divContent">
        <h3 className="font-weight-bold"></h3>
        <div className="d-flex flex-wrap justify-content-around ">
          <div className="card " style={{ width: "40%", height: "40%" }}>
            <img className="card-img-top" src={eCommerce} alt="Card image" />
            <div
              className="card-body text-center"
              style={{ width: "100%", margin: "auto" }}
            >
              <h4 className="card-title" style={{ fontSize: "1vw" }}>
                e-Commerce Website
              </h4>
              <p className="card-text" style={{ fontSize: "0.8vw" }}>
                Presentation Video
              </p>

              <button
                className="btns"
                style={{
                  margin: "auto",
                  fontSize: "1vw",
                  padding: "0.5vw",
                  color: "white",
                  borderRadius: "0.5vw",
                }}
              >
                <a
                  href="https://github.com/sajpanchal/eCommerce/blob/master/Presentation%20Video.mp4"
                  style={{ color: "white" }}
                  target="_blank"
                >
                  GitHub&nbsp;&nbsp; <i className="fab fa-github"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="card" style={{ width: "40%", height: "40%" }}>
            <img className="card-img-top" src={Myforcast} alt="Card image" />
            <div
              className="card-body text-center"
              style={{ width: "100%", margin: "auto" }}
            >
              <h4 className="card-title" style={{ fontSize: "1vw" }}>
                MyForecast iOS App
              </h4>
              <p className="card-text" style={{ fontSize: "1vw" }}>
                Powerpoint Presentation
              </p>

              <button
                className="btns"
                style={{
                  margin: "auto",
                  fontSize: "1vw",
                  padding: "0.5vw",
                  color: "white",
                  borderRadius: "0.5vw",
                }}
              >
                <a
                  href="https://github.com/sajpanchal/MyForecast/blob/master/MyForecast.pptx"
                  style={{ color: "white" }}
                  target="_blank"
                >
                  GitHub&nbsp;&nbsp; <i className="fab fa-github"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="card mt-4" style={{ width: "40%", height: "40%" }}>
            <img className="card-img-top" src={COVID19} alt="Card image" />
            <div
              className="card-body text-center"
              style={{ width: "100%", margin: "auto" }}
            >
              <h4 className="card-title" style={{ fontSize: "1vw" }}>
                COVID-19 iOS App
              </h4>
              <p className="card-text" style={{ fontSize: "1vw" }}>
                Powerpoint Presentation
              </p>

              <button
                className="btns"
                style={{
                  margin: "auto",
                  fontSize: "1vw",
                  padding: "0.5vw",
                  color: "white",
                  borderRadius: "0.5vw",
                }}
              >
                <a
                  href="https://github.com/sajpanchal/COVID-19-2/blob/master/COVID-19%20Project.pptx"
                  style={{ color: "white" }}
                  target="_blank"
                >
                  GitHub&nbsp;&nbsp; <i className="fab fa-github"></i>
                </a>
              </button>
            </div>
          </div>
        </div>

        <p className="subtitle2" style={{ color: "red" }}>
          <b>Note:</b> Please go this link. It will take you to my git
          repository. click download to access a file.
        </p>
      </div>
    </React.StrictMode>
  );
}
export default ProjectLinks;

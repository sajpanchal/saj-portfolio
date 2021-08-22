import React from "react";
import eCommerce from "./assets/eCommerce.png";
import Myforcast from "./assets/Myforcast.png";
import COVID19 from "./assets/COVID-19.png";
import SlideScore from "./assets/SlideScore.PNG";
import Capstone from "./assets/Capstone.png";
import MyExpense from "./assets/PersonalAccountingApp.png";
import "./aboutme.css";
function ProjectLinks() {
  return (
    <React.StrictMode>
      <p
        className=" text-primary font-weight-bold p-2 text-center"
        id="heading"
      >
        "Take a look into my awesome projects!"
      </p>
      <div className="bg-light border" id="divContent">
        <div className="d-flex flex-wrap justify-content-around ">
          <div className="card mt-4" style={{ width: "40%", height: "40%" }}>
            <img className="card-img-top" src={MyExpense} alt="Card" />
            <div>
              <p
                className="card-subtitle"
                style={{
                  fontSize: "1vw",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                  width: "30%",
                  float: "right",
                }}
              >
                July 2021
              </p>
            </div>
            <div
              className="card-body text-center"
              style={{ width: "100%", margin: "auto" }}
            >
              <h4 className="card-title" style={{ fontSize: "1vw" }}>
                MyExpense iOS App
              </h4>
              <p className="card-text" style={{ fontSize: "1vw" }}>
                Video Demo
              </p>

              <button className="gitbtn">
                <a
                  href="https://github.com/sajpanchal/PersonalAccountingApp/blob/master/My%20Expense%20App%20Demo.avi"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub&nbsp;&nbsp; <i className="fab fa-github"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="card mt-4" style={{ width: "40%", height: "40%" }}>
            <img className="card-img-top" src={Myforcast} alt="Card" />
            <div>
              <p
                className="card-subtitle"
                style={{
                  fontSize: "1vw",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                  width: "30%",
                  float: "right",
                }}
              >
                March 2020
              </p>
            </div>
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

              <button className="gitbtn">
                <a
                  href="https://github.com/sajpanchal/MyForecast/blob/master/MyForecast.pptx"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub&nbsp;&nbsp; <i className="fab fa-github"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="card mt-4" style={{ width: "40%", height: "40%" }}>
            <img className="card-img-top" src={COVID19} alt="Card" />
            <div>
              <p
                className="card-subtitle"
                style={{
                  fontSize: "1vw",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                  width: "30%",
                  float: "right",
                }}
              >
                April 2020
              </p>
            </div>
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

              <button className="gitbtn">
                <a
                  href="https://github.com/sajpanchal/COVID-19-2/blob/master/COVID-19%20Project.pptx"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub&nbsp;&nbsp; <i className="fab fa-github"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="card mt-4" style={{ width: "40%", height: "40%" }}>
            <img className="card-img-top" src={SlideScore} alt="Card" />
            <div>
              <p
                className="card-subtitle"
                style={{
                  fontSize: "1vw",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                  width: "30%",
                  float: "right",
                }}
              >
                Febuary 2020
              </p>
            </div>
            <div
              className="card-body text-center"
              style={{ width: "100%", margin: "auto" }}
            >
              <h4 className="card-title" style={{ fontSize: "1vw" }}>
                Slide-Score iOS Game App
              </h4>
              <p className="card-text" style={{ fontSize: "1vw" }}>
                Powerpoint Presentation
              </p>

              <button className="gitbtn">
                <a
                  href="https://github.com/sajpanchal/Slide-Score/blob/master/iOS_Assignment_1_PPT%5B9046%5D.pptx"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub&nbsp;&nbsp; <i className="fab fa-github"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="card mt-4" style={{ width: "40%", height: "40%" }}>
            <img className="card-img-top" src={Capstone} alt="Card" />
            <div>
              <p
                className="card-subtitle"
                style={{
                  fontSize: "1vw",
                  textAlign: "center",
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                  width: "30%",
                  float: "right",
                }}
              >
                April 2021
              </p>
            </div>
            <div
              className="card-body text-center"
              style={{ width: "100%", margin: "auto" }}
            >
              <h4 className="card-title" style={{ fontSize: "1vw" }}>
                Capstone Project - Full-Stack React.js + Node.js Web App
              </h4>
              <p className="card-text" style={{ fontSize: "1vw" }}>
                Powerpoint Presentation + Demo
              </p>

              <button className="gitbtn">
                <a
                  href="https://github.com/sajpanchal/Capstone-Project-Front-End/blob/master/Capstone%20Project%20Video.mp4"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
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

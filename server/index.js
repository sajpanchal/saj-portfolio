const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("morgan");
const app = express();
var nodemailer = require("nodemailer");
require("dotenv").config();

const {
  SEND_GRID_KEY,
  USER_PASSWORD,
  USER_EMAIL,
  RECEIVER_EMAIL,
} = process.env;
console.log(SEND_GRID_KEY);
//React build app setup
app.use(express.static(path.join(__dirname, "build"))); // serve all static files from build

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html")); // this will keep our client side routing functional.
});

app.use(bodyParser.json());
// // allows your app to interact with the apps running on different servers.

//this will set the http server response header.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Acess-Control-Allow-Headers", "Content-Type , Authorization");
  next();
});
//get request
app.get("/api", (req, res, next) => {
  res.send("API status: OK");
});

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: USER_EMAIL,
    pass: USER_PASSWORD,
  },
});

app.post("/api/email", (req, res, next) => {
  var mailOptions = {
    from: req.body.email,
    to: RECEIVER_EMAIL,
    subject: req.body.subject,
    html: `<strong>sender: ${req.body.email}</strong><br>Message: <strong>${req.body.message}</strong>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(400).json({
        error: error,
      });
    } else {
      res.status(200).json({
        success: true,
      });
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0");
console.log("connected to port: ", port);

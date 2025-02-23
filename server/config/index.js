const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors")


const FRONTEND_URL = process.env.ORIGIN || "http://localhost:8000";

// Middleware configuration
module.exports = (app) => {

    app.set("trust proxy", 1);

// Frontend connection
app.use(
    cors({
        ORIGIN: [FRONTEND_URL]
    })
);

  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  
}

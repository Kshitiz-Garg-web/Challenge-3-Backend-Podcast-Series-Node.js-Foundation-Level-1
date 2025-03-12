// Core Module
const path = require("path");

// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
  res.render("addHome");
});

const homeRegistered = [];

hostRouter.post("/add-home", (req, res, next) => {
  homeRegistered.push(req.body);
  console.log(homeRegistered);
  // res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
  res.render("homeAdded");
});

exports.hostRouter = hostRouter;
exports.homeRegistered = homeRegistered;

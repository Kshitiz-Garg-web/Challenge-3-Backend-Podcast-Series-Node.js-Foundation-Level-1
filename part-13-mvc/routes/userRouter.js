// Core Modules
const path = require("path");

// External Module
const express = require("express");
const userRouter = express.Router();

// Local Module
// const rootDir = require("../utils/pathUtil");
// due to ejs now we change res.sendfile to res.render so needs for this rootDir

//local variable
const { homeRegistered } = require("./hostRouter");
const homesController = require("../controllers/homes");

userRouter.get("/", homesController.getHome);

module.exports = userRouter;

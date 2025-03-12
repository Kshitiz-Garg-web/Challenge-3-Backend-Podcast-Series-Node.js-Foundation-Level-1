// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

// Local Module
// const rootDir = require("../utils/pathUtil");
// due to ejs now we change res.sendfile to res.render so needs for this rootDir

//local variable
const {homeRegistered} = require("./hostRouter");


userRouter.get("/", (req, res, next) => {
  console.log("yes from here ---------------")
  console.log("dvfvfvf",homeRegistered)

  // res.sendFile(path.join(rootDir, 'views', 'home.html'));
  res.render('home',{homeRegistered:homeRegistered});
});


module.exports = userRouter;

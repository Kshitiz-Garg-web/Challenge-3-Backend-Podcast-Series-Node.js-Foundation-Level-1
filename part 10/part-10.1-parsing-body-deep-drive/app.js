//importing modules
const express = require("express");
const bodyParser = require("body-parser");

//basic setup
const app = express();
const PORT = 8999;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

//middleware wiring
//1
app.use((req, res, next) => {
  console.log("1st dummy middleware", req.url, req.method);
  next();
});
//2
app.use((req, res, next) => {
  console.log("2nd dummy middleware", req.url, req.method);
  next();
});
//3
app.get("/", (req, res, next) => {
  console.log(
    "3rd dummy middleware",
    "---/ handling + get",
    req.url,
    req.method
  );
  res.send("<h1>hello everyone, we all are there...");
});
//4
app.get("/contact-us", (req, res, next) => {
  console.log("---/contact-us handling + get", req.url, req.method);
  res.send(`<form action="/contact-us" method="post">
    <input type="text" placeholder="Name" name="user-name">
    <input type="email" placeholder="Email" name="email-address">
    <button>Submit</button>
  </form>`);
});
//5 + //bodyParser
app.post("/contact-us", (req, res, next) => {
  console.log("before body comes ok")
  console.log(req.url, req.method, req.body);
  next();
});
app.use(bodyParser.urlencoded());
//6
app.post("/contact-us", (req, res, next) => {
  console.log("after body comes ok")
  console.log(req.url, req.method, req.body);
  res.send("<h1>yes your response is added successfully");
});

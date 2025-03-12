const express = require("express");
const app = express();
const PORT = 8999;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.use((req, res, next) => {
  console.log("1st dummy middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("2nd dummy middleware", req.url, req.method);
  next();
});
app.get("/", (req, res, next) => {
  console.log(
    "3rd dummy middleware",
    "---/ handling + get",
    req.url,
    req.method
  );
  res.send("<h1>hello everyone, we all are there...");
});
app.get("/contact-us", (req, res, next) => {
  console.log("---/contact-us handling + get", req.url, req.method);
  res.send(`<form action="/contact-us" method="post">
    <input type="text" placeholder="Name" name="user-name">
    <input type="email" placeholder="Email" name="email-address">
    <button>Submit</button>
  </form>`);
});
app.post("/contact-us", (req, res, next) => {
  console.log(req.url, req.method);
  res.send("<h1>yes your response is added successfully");
});

//external module
const express = require("express");
//core module
const path = require("path");
//internal module
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");
const rootDir = require("./utils/pathUtil");

//setup
const app = express();

//routing
app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactRouter);
// routing for public file
app.use(express.static(path.join(rootDir, "public")));
//404 routing
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

//setup
const PORT = 8999;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

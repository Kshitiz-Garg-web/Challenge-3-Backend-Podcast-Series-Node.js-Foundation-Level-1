const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public"), { dotfiles: "ignore" })); // dotfiles - ignore default hota h 

app.get("/.f2", (req, res) =>
  res.status(403).send("403 Forbidden: Access Denied")
);

app.get(["/.f3", "/f4"], (req, res) => res.status(404).send("404 Not Found"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

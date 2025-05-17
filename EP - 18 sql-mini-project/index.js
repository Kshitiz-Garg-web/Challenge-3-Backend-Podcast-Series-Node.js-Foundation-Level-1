const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

let app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

//create connection, connection build
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Ksgarg@456",
});

function getRandomUser() {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
// let q = "insert into user (id,username,email,password)value ?";

// let data = [];
// for (let i = 1; i <= 400; i++) {
//   data.push(getRandomUser());
// }

// route 1, default route
app.get("/", (req, res) => {
  let q = `select count(*) from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
      let count = result[0][["count(*)"]];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
});

// route 2, users route
app.get("/user", (req, res) => {
  let q = `select * from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
      let users = result;
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
});

// route 3, users edit get route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id = '${id}' `;
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
      // console.log(result);
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
});

// route 4, users edit PATCH route , changes reflect in database
app.patch("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let { username: newusername } = req.body;
  let q = `update user set username='${newusername}' where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
      // console.dir(result);
      res.redirect("/user");
      // res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
});

// route 5, users delete route , changes reflect in database
app.delete("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `delete from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }

      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
});

// last route for 404 page - not founded
app.use((req, res) => {
  res.render("404.ejs");
});

let PORT = 5400;
app.listen(PORT, (req, res) => {
  console.log(`server is going on http://localhost:${PORT}`);
});

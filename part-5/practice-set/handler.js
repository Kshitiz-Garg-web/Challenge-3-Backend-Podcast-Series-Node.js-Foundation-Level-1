const { homePage } = require("./homePage");
const { cal } = require("./cal");
const { ans } = require("./ans");
const { wrongPage } = require("./wrongPage");

const handler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    return homePage(req, res);
  } else if (req.url === "/calculator") {
    return cal(req, res);
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    return ans(req, res);
  } else {
    return wrongPage(req, res);
  }
};

exports.handler = handler; // export kra as a object not like a single

const homePage = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`<html lang="en">
<head>
<title>Document</title>
</head>
<body>
<h1>Hey, I hope you are very well - welcome to here</h1>
<a href="/calculator">GO TO Calculator</a>
</body>
</html>`);
  res.end();
};

exports.homePage = homePage;

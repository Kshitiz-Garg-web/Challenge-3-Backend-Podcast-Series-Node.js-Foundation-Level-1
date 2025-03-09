const wrongPage = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(` <html lang="en">
<head>
  <title>Document</title>
</head>
<body>   <h1>
     Page was not found... error 404 is there :D
    </h1>
    </body>
</html>`);
  res.end();
};

exports.wrongPage = wrongPage;

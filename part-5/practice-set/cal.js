const cal = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`<html lang="en">
<head>
<title>Document</title>
</head>
<body>
<form action="/calculate-result" method="POST">
    <label for="number_1">First No.</label>
    <input type="text" id="number_1" placeholder="Enter here..." name="First_num" />
    <br>
    <br>
    <label for="number_2">Second No.</label>
    <input type="text" id="number_2" placeholder="Enter here..." name="Second_num" />
    <br>
    <br>
    
    <button name="Sum">Sum</button>
  </form>
  </body>
</html>`);
  res.end();
};

exports.cal = cal;

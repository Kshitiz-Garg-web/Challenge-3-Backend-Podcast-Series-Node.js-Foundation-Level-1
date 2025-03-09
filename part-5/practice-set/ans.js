const ans = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const fullbodystr = Buffer.concat(body).toString();
    console.log("Full Body String:", fullbodystr); // Log raw input string

    const semiobj = new URLSearchParams(fullbodystr);
    console.log("Parsed URLSearchParams:", semiobj); // Log parsed URLSearchParams

    const object = Object.fromEntries(semiobj);
    console.log("Parsed Object:", object); // Log final object

    // Check specific fields
    console.log("First Number:", object.First_num);
    console.log("Second Number:", object.Second_num);

    // Perform calculation
    let result = Number(object.First_num) + Number(object.Second_num);
    console.log("Result:", result); // Log the result

    // Return the result to the client
    res.setHeader("Content-Type", "text/html");
    res.write(` <html lang="en">
<head>
<title>Document</title>
</head>
<body>
 <h1>
    YOUR RESULT IS THERE... ${result}
  </h1>
  <a href="/">Back to Home Page</a>
  </body>
</html>`);
    res.end();
  });
};

exports.ans = ans;

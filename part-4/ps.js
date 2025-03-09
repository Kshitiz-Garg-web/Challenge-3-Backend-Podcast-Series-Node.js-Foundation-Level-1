const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  if (req.url == "/men") {
    res.write("<h1>welcome to men page</h1>");
    res.end();
  } else if (req.url == "/women") {
    res.write("<h1>welcome to women page</h1>");
    res.end();
  } else if (req.url == "/kids") {
    res.write("<h1>welcome to kid page</h1>");
    res.end();
  } else if (req.url == "/cart") {
    res.write("<h1>welcome to cart page</h1>");
    res.end();
  } else {
    res.write(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Myntra</title>
        </head>
        <body>
          <header>
            <nav>
              <ul>
                <li><a href="/home">home</a></li>
                <li><a href="/men">men</a></li>
                <li><a href="/women">women</a></li>
                <li><a href="/kids">kids</a></li>
                  <li><a href="/cart">cart</a></li>
              </ul>
            </nav>
          </header>
        </body>
      </html>
      `);
    res.end();
  }
});

const PORT = 8001;

server.listen(PORT, () =>
  console.log(`server running on address http://localhost:${PORT}`)
);

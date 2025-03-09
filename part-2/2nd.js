console.log("hello world");
// how we run your node

const fs = require("fs");
// file writting capability now see
fs.writeFile(
  "outputfile.text",
  "Kshitiz garg eurocoder is there for now",
  (err) => {
    if (err) {
      console.log("yes err si there");
    } else {
      console.log("err os not there");
    }
  }
);

// how code we can run sep in nide
// how we can inculde the module
// how file wriitng cap is there bcz we are using node , not a js
//for quick testing we can use repl. buty most of the code we right in file so we can further use

const http = require("http"); // Extra 'createServer' import hataya
const fs = require("fs");
const { URLSearchParams } = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Home Page
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Highway</title></head>");
    res.write("<body><h1>We are on the home page!</h1></body>");
    res.write("</html>");
    res.end();
  }

  // Product Page
  else if (req.url === "/product") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Highway</title></head>");
    res.write("<body><h1>We are on the product page!</h1></body>");
    res.write("</html>");
    res.end();
  }

  // Sign-Up Form Page
  else if (req.url === "/sign-up") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Sign Up</title></head>");
    res.write(`
      <body>
        <form action="/submit-details" method="POST">
          <h1>Sign Up Now</h1>
          <input type="text" name="full_name" placeholder="Full Name" /><br/><br/>
          <input type="text" name="user_name" placeholder="Username" /><br/><br/>
          <input type="password" name="password" placeholder="Password" /><br/><br/>
          <input type="text" name="email" placeholder="Email Address" /><br/><br/>
          <input type="submit" value="Sign Up" />
        </form>
      </body>
    `);
    res.write("</html>");
    res.end();
  }

  // Handle Form Submission
  else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    let body = [];

    // Data receive karega
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log("1");
      console.log(chunk);
    });

    req.on("end", () => {
      const full_body = Buffer.concat(body).toString();
      // console.log("222");
      // console.log(Buffer.concat(body));
      console.log("2");

      console.log(full_body);
      const params = new URLSearchParams(full_body);
      console.log("3");
      console.log(params);
      const body_object = {};
      for (const [key, val] of params.entries()) {
        body_object[key] = val;
      }
      console.log("4");
      console.log(body_object);

      // File me save karo
      // fs.writeFileSync("user.text", params);

      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Success</title></head>");
      res.write("<body><h1>Details submitted successfully!</h1>");
      res.write(`<a href="/"><button>Go Back to Home</button></a>`);
      res.write("</body></html>");
      res.end();
    });

    // res.setHeader("Content-Type", "text/html");
    // res.write("<html>");
    // res.write("<head><title>Success</title></head>");
    // res.write("<body><h1>Details submitted successfully!</h1>");
    // res.write(`<a href="/"><button>Go Back to Home</button></a>`);
    // res.write("</body></html>");
    // res.end();
  }

  // Error Page
  else {
    res.statusCode = 404; // Proper 404 response
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>404 Error</title></head>");
    res.write("<body><h1>404 - Page Not Found</h1></body>");
    res.write("</html>");
    res.end();
  }
});

const PORT = 5009;
server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

// parsing request

// kesa ek puri req ko send krta h , yha dekga ok

// 1.1-streams
// 1- continuse flow in 1 direction from 1 side to another side + smallest unit hoti jiska flow hota h + wo ek sammlest unit puri ki puri poach rhi h
// 2- internet pai isi  tra data trsfer hota h
// 3- socket means gate there, comunication hora h clent side ho ya frrr server side , comunication k lya sabs phla ek gate s hoker jaja prta h usko socket bolta h example jesa k localhost:3000 jisper hmm apna check kr rha tha,means ki socket s datat jata h
// 4- duplex stream vs sinlge stream
// case a - 2 stream h jo ek stream to clent to server h or ek stream server to client h exapmle-1 ki hmm kuch upload kr rha h + sath m kuch download bhi kr rha h , jisam m 2 socket hoga , exapmle-2 hm jab phone s bath krta h to uss time bhi asa hi hota h , 2 logo k beac comunction hota h uss time asi kuch h
// case b single steam k example h wokitoki , jo ki polic, aramy wala use krta h ,,,,jisma ek trs v]bsnda button ko press krka rka bolta h kuch or end over krka button press off krta h orrr dusra wlaa bolta h like ok ,,,sinlge stream j jiski direc bhr bhr change hoti h ya frrrr, asa boll skta h socket chkn ge hora h because

// 2.2-chunks + processing
// 1-  smallest unit wo sream ko chunks bolta h
// 2- processing means k use hona mtlab h ki
// case a - jab hm kuch download krta h like koi file h , jesa uss file ek bhi chunk hma pass ata h , to usi time uss check ko process k lya push krta h jiss sa ki, hmko apna sysmtem pai ek folder diksa h dhundla dhundla s opactiy boat kam ho per yes visible hota h ki kuch download hona strt hoga jab ki jabtk hmra pass pura datat ata bhi n
// case b- jab hmm youtube pai koi vedio dak rha hota h to, jo prgress bar hota h wo red color k ata h ki hmna kitna dak lya h yr frr abhi hm kider h + uss red prgress bar k thoda s aga thoda as aga hi ek greay color ek or progress bhr hota h jo incdicate ktha h ki itna file dowlnad hogi ya n m,,, inta lenth k datat yuytbe k server iss vidio k agah h

// 3.3-  buffers
// 1- chunks k karan unn sab k sequnce krab hojta + kuch loss bhi hota h
// 2- checunk jab ata h to her chunk apna ek no. lkr ata h jisa ki pta chlta h ki kn s kab aha h ok ,,,,,or yha buffer ek zone k tra ya ek parking arra k tra kma krta jo ki inn sab chunk ko clooect kr ah frrr, jo checks ka sequence ko sai krka fr eunnn sab chunks ek seq m pass krta h processing k lya ,,,,chunck aha iss seq m 2,5,4,76,89,8,1,3 tp buffer inko iss tra krga 1,23,4,5 ko seq m krr in ko pass krga porcess k lya or abhi 6,7 or k lya waite krga or frr,6,7,8,9 asa krkga sab k ek ek seq m krkal oass krga preoxcess k lya

//code k sath
//.................code krka deka to asa observed hua h unn sab uper walal points ko lkr ok
// 111--------abhi to ham chota s datat k sath khel rha h but actual cade m to datat boat bra hoga -----
// 222--------end jesa hi 1st chuck aga to hmko pta chlga ki yes req agi h + 1srt chunk k sath hi header or sab details ajgi per abhi deta com pletly na ah h to hmna uss sab deta k lya wait krna prhga ok---
// 333---------or chuck ko dkna k lya , sunn k lya ider kan , ear lga kr kda hona prga tp---use ---------req.on('chunk','call-back jo hmko btavav ki yes aga h ),,on means listen when new datat ava,,,call back k help s bta tha h ki new datat h aha h------------------
// 555-------------but abb network m to sai dikk rha h datat per jo ya print kr rha h chu nk woto kuch ajib j sara h datat------
// 666-----------like iss tra ara h <Buffer 66 75 6c 6c 5f 6e 61 6d 65 3d 4b 73 68 69 74 69 7a 2b 67 61 72 67 26 75 73 65 72 5f 6e 61 6d 65 3d 4b 73 67 61 72 67 25 34 30 31 26 70 61 73 73 77 6f ... 80 more bytes>
// 7777-------chunk lkr buffer m krga push then frr uss buffer  sdatat ko convert krga apna lang mai ok, kesa seee

//req.on ---lister krga + insure krga ki sab chunk hmkisequnce m bhi mili ok etc
// krka  req.on("end", () => {
// const parsedBody = Buffer.concat(body).toString();
// File me save karo
// fs.writeFileSync("user.text", parsedBody);

// res.setHeader("Content-Type", "text/html");
// res.write("<html>");
// res.write("<head><title>Success</title></head>");
// res.write("<body><h1>Details submitted successfully!</h1>");
// res.write(`<a href="/"><button>Go Back to Home</button></a>`);
// res.write("</body></html>");
// res.end();
// });
//isa kr rha h ann bb is decode krag

// isue 1_1_1_1  ---     ;
// req.on("end", () => {
//   const full_body = Buffer.concat(body).toString();
//   // console.log("222");
//   // console.log(Buffer.concat(body));
//   console.log("2");

//   console.log(full_body);
//   const params = new URLSearchParams(full_body);
//   console.log("3");
//   console.log(params);
//   const body_object = {};
//   for (const [key, val] of params.entries()) {
//     body_object[key] = val;
//   }
//   console.log("4");
//   console.log(body_object);
// full_body vs params m diff kya h
const { createServer } = require("http");

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node highway</title></head>");
    res.write("<body><h1>we are on the home page ok</h1></body>");
    res.write("</body>");
    res.end();
  } else if (req.url === "/product") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node highway</title></head>");
    res.write("<body><h1>we are on the product page</h1></body>");
    res.write("</body>");
    res.end();
  } else if (req.url === "/sign-up") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node highway</title></head>");
    res.write(`<body><form action="/submit-details" method="POST">
      <h1>
        Sign up now
      </h1>

      <input type="text" name="full_name" placeholder="Full Name" />
</br>
</br>
      <input type="text" name="user_name" placeholder="Username" />
      </br>
      </br>
      <input type="password" name="password" placeholder="Password" />
      </br>
      </br>
      <input
        type="text"
        name="email"
        placeholder="Mobile number or email address"
      />
      </br>
      </br>
      <p>
        People who use our service may have uploaded your contact information to
        Instagram. Learn more
      </p>
      <p>
        By signing up, you agree to our Terms, Privacy Policy and Cookies
        Policy.
      </p>
      <input type="submit" value="Sign Up" />
    </form></body>`);
  } else if (req.url === "/submit-details") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node highway</title></head>");
    res.write(
      `<body><a href=" / "><button>GO Back TO Home Page</button></a></body>`
    );
    res.write("</body>");
    res.end();
  } else {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node highway</title></head>");
    res.write("<body><h1>error is found , no page we have 403 :D</h1></body>");
    res.write("</body>");
    res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () =>
  console.log(`server running on address http://localhost:${PORT}`)
);

//-------process.exit
//is default fun we get from node, to kill the server

//-------header
//header is kind of name slip of gift which are used to mentioned the extra details of req,res

//----------------req
//--------url
//localhost:port means ki hmra machine per hi h to wo print krta h / only bec its shows that ki kuch na bas isi machine per h /something hona s pta chlta h ki onliver server s related h kuch ok
//----------------req
//--------method
// lot of there but few onces is essentail like get,post ok
//----------------req
//--------header
//is delault appear during with res req ok

//--------------- usage of res (response)
// response is the empty onject like a empty pacaket ( carrie bag ) jo ki use hota h shop pai ok customer k lya saman lkr janan k lya
// use to send a response ok
// jo bhi response hmna server side s send kra h wo hm as a client network type can --------- network type m server side s s bhi we can see ki kya res hmna send kra h ------- inn dono  s ek sai h ----------???
//response.setHeader('')
//response.write('')
// use to json file, also for html etc
// in case of html , we can say is the ( server side rendring )

// diff between the process.exit() and res.end()--------------???

//--------------------routing request
//routing req on based of ur;
// now we see ki link k basis pai diff chij dika n ha
// ek bhr end aga resp m to frr bad m res we cant set anything more ok i.e return end krka krna tha kuch iss m confuion h abhhi------------???

//---------------how values goes to backend from client side, we will understand with the help of form
// 1-------form tag mai, action attribute m url dena hota h ki , submit hona k bath kider janan h abb janan uss values k backend k trf h ya frr uss page s kisi or page pai redirect krna k lya wo confirm nai h ?????????????--------i think ki datta kider lkr jana h wohi ata h means ki link dya h jider uska hisab s rendring hori h to uss p;age k netwrok type m jkr pta chlga mki knsi file ahi h + uder payload m pta chlga ki kya h values
// 2------------form tag mai, method att k use krta h jis s pta chla h ki hmlog deta h yha s lkr ja rha h ok

//-------------request redirecting
//1----------wohi wali bath h ki user s input means value lkr kider janan h uss url k lya abb rendring kr rha h am i right sath m dak rha h ki post method
// 2---------- url yes action walal h to ek pagr ki server side rendring krr ha h ur hi hmko payload network k resp wali file mai payload m wo sab vaules milgi
// 3----------or uss datat ko hmna file write krka use kra k file wrtie krna k lya with the help of fs module
// 4---------status code kya hota h + kyu hota h + kitna type k hota h etc all

const { createServer } = require("http");

// console.log("hello for now lets start")
const http = require('http');
// console.log(http);

const server = http.createServer((req,res) => {} );

const PORT = 3001;
server.listen(PORT,()=>console.log(`server running on address http://localhost:${PORT}`));                                                                     // jo reqest ana k lya means usko recive krna k lya,,,req to ari h ok client side s per jo ki ek customer h but shop jo ki server h wha pai ek persion bhi to hona chai jo ki, clent k bath suna iss lya h yha--------------------3008 is port,means k hmri machine bhi boat sara comunucation kr rhi h, kon s kider krga uska lya we use port there-----------------listen bhi callbacxk leta h ok 

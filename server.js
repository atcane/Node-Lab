const quotes = require("./quotes");

"use strict";
const http = require("http");

const port = 3000;

http.createServer((req, res) => {
// Code for getting random quote goes here
const index = Math.floor(Math.random() * quotes.length); 

const randomQuote = quotes[index]; 

console.log(randomQuote);

 res.writeHead(200, {"Content-type": "text/plain"});
 res.write(randomQuote);
 res.end();
}).listen(port)

console.log("Listening on port http://localhost:" + port);

// .createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write("<h1>Hello, my name is Ashley</h1>");
//   res.write("<p>You've visited" + i + "times.</p>")
//   res.end();
// })
// .listen(port);
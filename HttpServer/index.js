//ByMrunal
const http = require("http"); //http is module and https is protocol
const fs = require("fs");
const server = http.createServer((req, res) => {
  // res.end("Hello From Http Server")
  const log = `${req.url} Request received\n`;
  fs.appendFile("log.txt",log, (err, data) => { //all loges will be added in log.txt file
    switch (req.url) {
      case "/":
        res.end("this is my home page!");
        break;
      case "/about":
        res.end("this is my about page!");
        break;
      case "/contact":
        res.end("this is my contact page!");
        break;
      default:
        res.end("Not Found");
    }
  });
});

server.listen(8000, () => {
  console.log("Server started on 8000");
});

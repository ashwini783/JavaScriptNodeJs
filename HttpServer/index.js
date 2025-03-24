//ByMrunal
const http = require("http"); //http is module and https is protocol
const fs = require("fs"); //its inbuilt module of node js , no need to install
const url=require('url')
const server = http.createServer((req, res) => {
  // res.end("Hello From Http Server")
  const parsedUrl=url.parse(req.url,true) //it parses the url
  console.log("parsed url ",parsedUrl)
  const log = `${req.url} Request received\n`;
  fs.appendFile("log.txt",log, (err, data) => { //all loges will be added in log.txt file
    switch (parsedUrl.pathname) {
      case "/":
        res.end("this is my home page!");
        break;
      case "/about":
        res.end("this is my about page!");
        break;
      case "/contact":
        res.end("this is my contact page!");
        break;
        case "/products":
            const shoe=parsedUrl.query.shoe
            res.end("This is my product page "+" here your shoes "+shoe)
            break;
      default:
        res.end("Not Found");
    }
  });
});

server.listen(8000, () => {
  console.log("Server started on 8000");
});

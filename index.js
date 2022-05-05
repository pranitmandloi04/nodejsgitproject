 const http = require("http");

http
  .createServer((req, res) => {
    switch(http.request.url)
    {
      case"/":
      response.writeHead(200,{
        "Context-Type": "text/html",
      });
    
      response.write("<h1>Home Page!</h1>");
      response.end();
      break;
    default:
      response.write(404,{
        "Context-Type": "text/html",
      });
      response.write("<p>404 Page Not found!</p>");
      response.end();
      break;
  })
  .listen(8080);;
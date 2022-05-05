 const http = require("http");

http
  .createServer((req, res) => {
    switch(request.url)
    {
      case"/":
      response.writeHead(200,{
        "Context-Type": "text/html",
      });
      response.write("<p>Home Page!</p>");
      response.end();
      break;

      case"/about":
      response.writeHead(200,{
        "Context-Type": "text/html",
      });
      response.write("<p>About Page!</p>");
      response.end();
      break; 
    
      default:
      response.write(404,{
        "Context-Type": "text/html",
      });
      console.log("404 Page has been visited");
      response.write("<p>404 Page not found!</p>");
      response.end();
      break;
  })
  .listen(8080);;
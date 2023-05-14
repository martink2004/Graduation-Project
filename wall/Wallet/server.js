const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');

  // Read the requested HTML file from the file system
  fs.readFile(`${__dirname}/public${req.url}`, (err, data) => {
    if (err) {
      // If the file does not exist, return a 404 status code
      res.statusCode = 404;
      res.end('<h1>404 Not Found</h1>');
    } else {
      // If the file exists, return the file contents
      res.statusCode = 200;
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
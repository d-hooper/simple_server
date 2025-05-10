// server.js
const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer();

server.on('request', (req, res) => {
  console.log("incoming request")
  try {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Docker Test</title>
  </head>
  <body>
  <h1>Having fun with Docker 🐳</h1>
  </body>
  </html>`)
    res.end();
  } catch (error) {
    console.error("[ERROR IN RESPONSE]", error)
    res.end()
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
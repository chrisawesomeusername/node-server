//core modules
const http = require('http');//provides server from node js

const server = http.createServer((req, res)=>{
  res.write('hello');
  res.end();
});

server.listen(3000);
console.log('running node server at port 3000');

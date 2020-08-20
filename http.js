const http = require("http");
const server =http.createServer((req,res) => {
    res.write("hello word");
    res.end();
})

server.listen(3000)
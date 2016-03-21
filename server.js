/**
 * Created by a on 2016/3/21.
 */
var http = require("http");
var server = http.createServer(function(request,response) {
    response.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
    response.write("阿金很傻");
    response.end();
})
server.listen(3000);
console.log("server stared");
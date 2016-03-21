/**
 * Created by a on 2016/3/21.
 */
var express = require("express"),
    app = express(),//实例化
    server = require("http").createServer(app);
server.listen(3000);
/******路由****/
app.get("/",function(req,res) {
    //res.send("hello world");
   // res.sendFile(__dirname+"/www/index.html");;
})
app.use("/",express.static(__dirname+"/www"));
console.log("server stared");
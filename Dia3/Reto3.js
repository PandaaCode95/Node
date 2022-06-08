const express = require("express");
const app = express();

app.get("/",function(req,res){
    console.log("Peticion: ")
    console.log("Requested URL:" + req.url)
    console.log("Requested method: " + req.method )
    console.log("Requested Header: " + req.headers["user-agent"])
    
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify({ok:true, message:'recibido'}))
    res.end();
})
app.get("/bye",function(req,res){
    console.log("Peticion: ")
    console.log("Requested URL:" + req.url)
    console.log("Requested method: " + req.method )
    console.log("Requested Header: " + req.headers["user-agent"])
    
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify({ok:true, message:'adiosssssss'}))
    res.end();
})
app.listen(3000)
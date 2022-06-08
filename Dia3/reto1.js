const { response } = require("express");
const http = require("http");

const server = http.createServer(function(request,response){

    console.log("Peticion recibida: ")
    console.log("Requested URL:" + request.url)
    console.log("Requested method: " + request.method )

    console.log("Requested Header: " + request.headers["content-type"])
    console.log("Requested Header: " + request.headers["content-length"])
    console.log("Requested Header: " + request.headers["user-agent"])

    response.writeHead(200,{'Content-Type':'application/json'});
    if(request.url=="/bye"){
        response.write(JSON.stringify({ok:true, message:'adios'}))
    }else{
        response.write(JSON.stringify({ok:true, message:'recibido'}))

    }
    response.end();
})
server.listen(3000)
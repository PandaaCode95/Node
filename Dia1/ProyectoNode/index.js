let writeAndReadObject = require("./writeAndReadObject")
let readConsole = require("./readConsole")


let objeto = {name: "", sname: "", age: ""};


readConsole.readConsole(function(objeto){
    writeAndReadObject.writeAndRead("objeto.json",objeto)
});





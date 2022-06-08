let wRO = require("./writeAndReadConsole");
let rC= require("./readConsole")
const fs = require('fs/promises');



let objecto = {
    name: "",
    sname: "",
    age: 0
};
wRO.writeRead(rC.preguntas(objecto))
// rC.preguntas(objecto).then((data) => {wRO.writeRead(data)});
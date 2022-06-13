let wRO = require("./writeAndReadConsole");
let rC= require("./readConsole")
const fs = require('fs/promises');




// // wRO.writeRead(rC.preguntas(objecto))
// rC.preguntas(objecto).then((data) => {wRO.writeRead(data)});

rC.pregcons()
.then((objecto)=>{wRO.imprimir("objecto.json", objecto)})
.catch((err)=>{console.log(err)
})

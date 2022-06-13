const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)
const wR = require("./writeAndReadObject")

function readConsole(){
    let objecto = { name: "", surname: "", age: 0 };

rl.question("Name?", (dato1) => {
    objecto.name = dato1;
    rl.question("Second Name?", (dato2) => {
        objecto.sname = dato2;
        rl.question("Age?", (dato3) => {
            objecto.age = dato3; 
            rl.close();
         
    }
    )
}
    )})}

    module.exports ={readConsole}
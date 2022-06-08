const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)

function preguntas(objecto){
    let data;
const question = new Promise((resolve,reject)=>{
    const rl = readline.createInterface({
      input:process.stdin,
      output: process.stdout})});

      rl.question("Name?", (dato) => {
        resolve  (objecto.name = dato)
      rl.question("Second Name?", (dato) => {
          resolve (objecto.sname = dato)
      rl.question("Age?", (dato) => {
          resolve (objecto.age = dato); 
          rl.close();
             data  = JSON.stringify(objecto);
             
      })})})
      return data;
    }
module.exports = {preguntas}
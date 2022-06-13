const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)
const fs = require('fs/promises');

function readConsole(pregunta) {
  const question = new Promise((resolve, reject) => {
      const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
      });
      rl.question(pregunta, (respuesta) => {
          resolve(respuesta);
          rl.close()
      })
  });
  return question
}
function pregcons(){
  const promesaconsol =new Promise((resolve, reject)=>{
    let objecto={name:"",sname:"",age:0}

    readConsole("name?").then(name => {
        objecto.name = name;
        return readConsole("sname?")})
        .then(surname => {
        objecto.sname = surname;
        return readConsole("age?")})
        .then(age => {
        objecto.age = age;})
    .catch(err => {
        console.log(err);
        })
  })
  return promesaconsol;
  }


module.exports = {pregcons}
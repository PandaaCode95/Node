const fs = require('fs/promises');
const readline = require("readline");
const { isStringObject } = require('util/types');

let objecto = {name:"halo", sname:"Kitty",age:28};
let objectstr = JSON.stringify(objecto)
async function imprimir(objecto){

  try{

  await fs.writeFile("object.json", JSON.stringify(objecto));
  let data = await fs.readFile("object.json",'utf-8')
    console.log(data)
}
catch(err){
  console.log(err)
}
}
function impthen(objecto){
fs.writeFile("objecto.json",objectstr).then(()=>{
  fs.readFile("objecto.json","utf-8").then((objecto)=> {
    console.log(JSON.parse(objecto))
  }).catch(err =>console.log(err))
})
}
impthen(objecto)
imprimir(objecto)
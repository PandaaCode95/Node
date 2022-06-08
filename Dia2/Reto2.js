const fs = require('fs/promises');
const readline = require("readline")

let objecto = {name:"halo", sname:"Kitty",age:28};

async function imprimir(objecto){

  try{

  await fs.writeFile("object.json", JSON.stringify(objecto)).then(() => {
    fs.readFile("object.json", 'utf8')
    })
    
}
catch(err){
  console.log(err)
}
}

function pregunta(pregunta){
  const question = new Promise((resolve,reject)=>{
    const rl = readline.createInterface({
      input:process.stdin,
      output: process.stdout

    })
  })
}
imprimir(objecto)
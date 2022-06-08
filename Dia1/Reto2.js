const fs = require('fs/promises');




let objecto = {name:"Hello", sname:"Kitty",age:28};
let data = JSON.stringify(objecto)
function imprimir(data){
fs.writeFile("object.json", data , (err) => {
  if (err)
    console.log(err);
  else {
    console.log("Objeto creado\n");
    
  }
}).then(()=>{
fs.readFile("object.json",'utf8', (err) => {
    if (err)
      console.log(err);
    else {
      console.log("Objeto leido\n");
      
    }
  })
})}
imprimir(data);
const fs = require('fs');




let objecto = {name:"Hello", sname:"Kitty",age:28};
let data = JSON.stringify(objecto)


fs.writeFile("object.json", data , (err,data) => {
 
  if (err)
    console.log(err);
  else {
    console.log("Objeto creado\n");
    fs.readFile("object.json",'utf8', (err,data) => {
      if (err)
        console.log(err);
      else {
        console.log("Objeto leido\n");
        console.log(data)
        
      }
    })
}
})

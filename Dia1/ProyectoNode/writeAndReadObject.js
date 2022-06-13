const readline = require('readline');

const fs = require('fs');

function writeAndRead(path, obj){
    
        fs.writeFile(path, obj , (err) => {
          if (err)
            console.log(err);
          else {
            console.log("Objeto creado\n");
          }
        });
        fs.readFile(path,'utf8', (err) => {
            if (err)
              console.log(err);
            else {
              console.log("Objeto leido\n");
              
            }
          })
        }

        module.exports ={writeAndRead}
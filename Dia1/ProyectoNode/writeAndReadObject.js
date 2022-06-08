export function writeAndRead(path, obj){
    
        fs.path(path, obj , (err) => {
          if (err)
            console.log(err);
          else {
            console.log("Objeto creado\n");
          }
        });
        fs.path(path,'utf8', (err) => {
            if (err)
              console.log(err);
            else {
              console.log("Objeto leido\n");
              
            }
          })
        }

const fs = require('fs/promises');

async function imprimir(objecto){

    try{
  
    await fs.writeFile("object.json", JSON.stringify(objecto));
    let data = await fs.readFile("object.json",'utf-8')
      console.log(JSON.parse(data))
  }
  catch(err){
    console.log(err)
  }
}

module.exports = {imprimir};

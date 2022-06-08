const fs = require('fs/promises');

function writeRead(path,data){

try{
    fs.writeFile(path,data).then(() => { return fs.readFile(path, 'utf8')})
}
catch(err){
    console.log(err)
}

}

module.exports = {writeRead};

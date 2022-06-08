const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)
const fs = require('fs/promises');
const { resolve } = require('path');


let objecto = {
    name: "",
    sname: "",
    age: 0
};

function imprimir(objeto){
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    const question = new Promise((resolve,reject)=>{
        rl.question("Name?", (dato) =>{
            resolve(dato);
            objecto.name=dato;
        }).then(()=>rl.question("Second Name?", (dato) => {
                    resolve (dato)
                    objecto.sname=dato}
    ))
}
    )
}
async function writeFileAsy(){
    try{
        await fs.writeFile("objetoR1.json", stringObjeto);
        const escritura = await fs.readFile("objetoR1.json", "utf8",);
        console.log(JSON.parse(escritura));
    }
    catch (err){
        console.log(err);
    }
}




    // function imprimir(objecto){

    //     const question = new Promise((resolve,reject)=>{
    //       const rl = readline.createInterface({
    //         input:process.stdin,
    //         output: process.stdout});

    //         rl.question("Name?", (dato) => {
    //           resolve  (objecto.name = dato).then(()=>{   
    //             rl.question("Second Name?", (dato) => {
    //             resolve (objecto.sname = dato).then(()=>
    //             rl.question("Age?", (dato) => {
    //                 resolve (objecto.age = dato); 
    //                 rl.close()
    //                     let data = JSON.stringify(objecto);
    //                 }))})})})
         
    //     try{
    //             fs.writeFile("object.json",data).then(() => {fs.readFile("object.json", 'utf8')})
    //         }
    //         catch(err){
    //             console.log(err)
    //         }
    //         })
    // }
    imprimir(objecto);

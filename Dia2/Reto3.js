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
  async function impas(){
    let objecto={name:"",sname:"",age:0}
    try{
        let name = await readConsole("name?")
        objecto.name=name;
        let sname = await readConsole("sname?")
        objecto.sname=sname;
        let age = await readConsole("age?")
        objecto.age=age;
        
     
        
        let objectstr = JSON.stringify(objecto)
        let data = await fs.readFile(objectstr,'utf-8')
        console.log(data)

    }
    catch(err){
        console.log(err)
    }
}
impas()
//   function pregcons(){
//     const promesaconsol =new Promise((resolve, reject)=>{
//       let objecto={name:"",sname:"",age:0}
  
//       readConsole("name?").then(name => {
//           objecto.name = name;
//           return readConsole("sname?")})
//           .then(surname => {
//           objecto.sname = surname;
//           return readConsole("age?")})
//           .then(age => {
//           objecto.age = age;})
//       .catch(err => {
//           console.log(err);
//           })
//     })
//     return promesaconsol;
//     }
  
// function imprimir(){
// readConsole("name?").then(name => {
//     objecto.name = name;})
//     readConsole("sname?").then(surname => {
//     objecto.sname = surname})
//     readConsole("age?").then(age => {
//     objecto.age = age;
//     let objectstr = JSON.stringify(objecto);
//     fs.writeFile("objecto.json", objectstr)
// }).then(() => fs.readFile("objecto.json", "utf8",))
// .then(objecto =>console.log(JSON.parse(objecto)))
// .catch(err => {
//     console.log(err);
//     })
// }










// function imprimir(objeto){

//         readConsole("Name?", (dato) =>{
//             resolve(dato);
//             objecto.name=dato;
//         }).then(()=>readConsole("Second Name?", (dato) => {
//                     resolve (dato)
//                     objecto.sname=dato}
//     ))
// }
 
// async function writeFileAsy(){
//     try{
//         await fs.writeFile("objetoR1.json", objectstr);
//         const escritura = await fs.readFile("objetoR1.json", "utf8",);
//         console.log(JSON.parse(escritura));
//     }
//     catch (err){
//         console.log(err);
//     }
// }




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
  

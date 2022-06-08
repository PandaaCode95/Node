const req  = require("http");
// const { all } = require("../app");
const res  = require("../app");
const {Persona} = require("../models/Persona")

let persona=null;
let persona1 = new Persona("Alvaro", "Sanchez",25, "Sevilla")
let persona2 = new Persona("Patricia", "Santiago", 28, "Cadiz")
let persona3 = new Persona("Jorge", "HT", 29, "Canarias")
let arrayPers = [persona1,persona2,persona3];
// let arrayPers =[];

function getStart(req,res){
   
    let respuesta = {   error:true,
                        codigo:200,
                        mensaje:"Punto de inicio"
                    }
                  
    res.send(respuesta)
}

function getPersonas(req,res){
    let id = req.query.id;
    console.log(id)
    let respuesta;
    if(id==null){
        if(arrayPers.length>0){
            respuesta = arrayPers;
        }else{
            respuesta = {error: true,
                        codigo:200,
                        mensaje:"La BD esta vacia"}
    }}
    else{
        console.log("jeje")
        if(arrayPers.length>0){
                respuesta = arrayPers[id];
        }     
        else{
            respuesta = {error: true,
                        codigo:200,
                        mensaje:"La BD esta vacia"}
        }
    }
    res.send(respuesta)
}
// function getPersonasID(req,res){
   
//     let id = req.param.id;
//     console.log(id)
//     let respuesta;

    
//     res.send(respuesta)
// }

function postPersonasinBD(req, res){
    let respuesta;
    
    persona=null;
   
   console.log("paso dde tu culo en el array")
    if(persona===null){
        let persona = new Persona(req.body.name, req.body.sname, req.body.city ,req.body.age)
        console.log(persona)
        arrayPers.push(persona)
       
        
        console.log(arrayPers)
        respuesta = { error:false,
                        codigo:200,
                        mensaje:"Usuario creado ya!", 
                        resultado: persona}
    }else{
        respuesta = {error: false,
                    codigo:200,
                    mensaje:"El usuario ya existe",
                    resultado:persona}
    }
    res.send(respuesta);
}
function putPersonasBD(req, res){
    let respuesta
    let id = req.body.id;
    
    if (arrayPers[id] != null) {

            arrayPers[id].name = req.body.name,
            arrayPers[id].sname = req.body.sname,
            arrayPers[id].age = req.body.age,
            arrayPers[id].city = req.body.city,


        respuesta = {
            error: false, codigo: 200,
            mensaje: 'Profesional actualizado', resultado: null
        };
    }
    else
        respuesta = {
            error: true, codigo: 200,
            mensaje: 'Profesional no existe', resultado: null
        };
    res.send(respuesta);
}

function deletePersonasBD(req, res){
    
        let respuesta;
        let id = req.body.id;
        if (arrayPers.length > 0) {
            arrayPers.splice(id,1)
            console.log("tonto")
            respuesta = {
                error: true, codigo: 200,
                mensaje: 'Profesional Borrado', resultado: null
            }
        }
        else
            respuesta = {
                error: true, codigo: 200,
                mensaje: 'Profesional no existe', resultado: null
            }
            res.send(respuesta);
    
}

module.exports = {getStart, getPersonas,putPersonasBD, postPersonasinBD, deletePersonasBD, getPersonas};
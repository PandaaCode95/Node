
const {Persona} = require("../models/Persona")

let persona = null;

function getStart(req,res){
    console.log("aqui")
    let respuesta = {   error:true,
                        codigo:200,
                        mensaje:"Punto de inicio"
                    }
                    console.log("aqui2")
    res.send(respuesta)
}

function getPersona(req,res){
    let respuesta;
    if (persona!=null){
        respuesta= persona;
    }else{
        respuesta = {error:true,
                    codigo:200,
                    mensaje:"El usuario no existe"}
    }
    res.send(respuesta)
}

function postPersona(req, res){
    let respuesta;
    console.log(req.body)

    if(persona===null){            
        persona = new Persona( req.body.name ,req.body.sname)
        
        respuesta = { error:false,
                        codigo:200,
                        mensaje:"Usuario creado", 
                        resultado: persona}
    }else{
        respuesta = {error: false,
                    codigo:200,
                    mensaje:"El usuario no existe",
                    resultado: persona}
    }
    res.send(respuesta);
}
function putPersona(req, res){
    let respuesta;
    

    if(persona!=null){
        persona.name = req.body.name;
        persona.sname= req.body.sname;
        respuesta = { error:false,
                        codigo:200,
                        mensaje:"Usuario actualizado", 
                        resultado: usuario}
    }else{
        respuesta = {error: false,
                    codigo:200,
                    mensaje:"El usuario no existe",
                    resultado:usuario}
    }
    res.send(respuesta);
}
function deletePersona(req, res){
    let respuesta;

    if(persona!=null){
        persona= null;
        
        respuesta = { error:false,
                        codigo:200,
                        mensaje:"Usuario borrado", 
                        resultado: usuario}
    }else{
        respuesta = {error: false,
                    codigo:200,
                    mensaje:"El usuario no existe",
                    resultado:usuario}
    }
    res.send(respuesta);
}
function getPersonaParams(req,res){
    let name = req.params.name;
    if(usuario != null && name === usuario.nombre){
        res.send(usuario)
    }else{
        res.send({error:true,
                codigo:200,
                mensaje:"El usuario no existe"})
    }
}

// function getPersonaParams(req,res){
//     let name = req.query.name;
//     let respuesta;

//     if(usario != null && (!name || name === usuario.nombre)){
//         respuesta = usuario;
//     }else{
//         respuesta = {error: true,
//                     codigo:200,
//                     mensaje:"El usuario no existe"}
//     }
//     res.send(respuesta)
// }


module.exports = {getStart,getPersona, getPersonaParams, deletePersona,putPersona, postPersona};
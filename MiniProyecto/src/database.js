const mysql = require ("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"albatros33",
    database:"codenotch2"
});

connection.connect(function(error){
    if (error){
        console.log(error);
    }else{
        console.log("conexion correcta a la base de datos.")
    }
})
module.exports = connection;
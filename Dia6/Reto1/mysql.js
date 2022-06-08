let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host :"localhost",
        user : "root",
        password: "albatros33",
        database : "codenotch"
    }
)

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Conexion correctta.');
    }
})

let sql = " CREATE TABLE direccion(id INT AUTO_INCREMENT PRIMARY KEY, calle VARCHAR(200), numero INT, ciudad VARCHAR(60))";

connection.query(sql, function(err, result){
    if(err){
        console.log(err);
    }else{
        console.log("Tabla creada")
        console.log(result)
    }
})

sql = "DROP TABLE escuela";
connection.query(sql,function(err,result){
    if(err) throw err;
        
        console.log("Tabla eliminada")
    
})


let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host :"localhost",
        user : "root",
        password: "albatros33",
        database : "museo"
    }
)

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Conexion correctta.');
    }
})

//SELECT propietario.name, propietario.sname, propietario.email, e.tipo AS tipo, e.devolucion, p.name FROM propietario   
// JOIN piezas p ON (p.id_propietario = propietario.id_propietario)
// JOIN estado e ON ( p.id_estado = e.id_estado)
// WHERE e.tipo ='alquiler'
// GROUP BY p.name


// SELECT COUNT(p.id_piezas) as sumatotal, localizacion from piezas p
// group by p.localizacion 
// order by sumatotal asc
let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
        host :"localhost",
        user : "root",
        password: "albatros33",
        database : "codenotch2"
    }
)

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Conexion correctta.');
    }
})

// let sql = "UPDATE codenotch2.marks SET mark=5 WHERE mark < 4"


// connection.query(sql, function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Profesores dados de alta")
//         console.log(result)
//     }
// })


let sql = "DELETE FROM codenotch2.marks WHERE date < \"2012/06/07\" ";


connection.query(sql, function(err, result){
    if(err){
        console.log(err);
    }else{
        console.log("Profesores dados de alta")
        console.log(result)
    }
})
// let sql = "SELECT * FROM codenotch2.teacher"

// connection.query(sql, function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Profesores dados de alta")
//         console.log(result)
//     }
// })

// let sql = "SELECT first_name, last_name FROM codenotch2.students"


// connection.query(sql, function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Profesores dados de alta")
//         console.log(result)
//     }
// })
// let sql = "UPDATE codenotch2.marks SET mark=0" 

// connection.query(sql, function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Profesores dados de alta")
//         console.log(result)
//     }
// })
// let sql = "INSERT INTO codenotch2.subject_teacher (subject_id, teacher_id, group_id) VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),(6,6,6),(7,7,7),(8,8,8),(9,9,9),(10,10,10)"

// connection.query(sql, function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Profesores dados de alta")
//         console.log(result)
//     }
// })
// let sql = "INSERT INTO codenotch2.marks (student_id, subject_id, date, mark) VALUES (21, 1, \"2022-6-2\", 10),(22, 2, \"2021-2-2\", 1),(23, 3, \"0001-1-1\", 1), (24, 5, \"2022-6-2\", 9), (25, 4, \"2023-2-1\", 3), (26, 6, \"2012-1-3\", 6), (27, 7, \"2234-7-1\", 10), (28, 8, \"1992-12-8\", 10), (29, 9, \"2022-6-2\", 10), (30, 10, \"2000-6-2\", 11)";

// connection.query(sql, function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Profesores dados de alta")
//         console.log(result)
//     }
// })

// let sql = " INSERT INTO codenotch2.subjects ( title) VALUES (\"Java\"),(\"BBDD\"),(\"Shurikens\"),(\"BBQ\"),(\"CSharp\"),(\"HTML\"),(\"Logging\"),(\"JS\"),(\"ED\"),(\"XML\")"

// connection.query(sql, function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Profesores dados de alta")
//         console.log(result)
//     }
// })
// let sql = " INSERT INTO codenotch2.teachers (first_name, last_name) VALUES (\"Jose\",\"Herrera\"),(\"Menchu\",\"Kaisen\"),(\"Pepito\",\"Palotes\"),(\"Anabel\",\"Franciskaner\"),(\"Kingdom\",\"Hearts\"),(\"Placido\",\"Domingo\"),(\"Estopa\",\"Contreras\"),(\"Kakashi\",\"Hiuda\"),(\"Nagato\",\"Nagaromo\"),(\"Nissan\",\"Chino\") "

// connection.query(sql, function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Profesores dados de alta")
//         console.log(result)
//     }
// })


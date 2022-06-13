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

let sql = "SELECT student_id,mark FROM codenotch2.marks WHERE student_id BETWEEN 20 AND 25 OR mark > 8 AND date LIKE '2021%'";
connection.query(sql, function(err, result)
{
    if(err)
    console.log(err);
    else
    {
        console.log("Dato Actualizado");
        console.log(result);
    }
})
// let sql = "SELECT AVG(mark) AS marksubject,student_id FROM  marks WHERE date LIKE '2021%' GROUP BY student_id; ";

// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Dato Actualizado");
//         console.log(result);
//     }
// })
// let sql = "SELECT AVG(mark) AS marksubject,student_id FROM  marks WHERE date LIKE '2021%' GROUP BY student_id; ";

// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Dato Actualizado");
//         console.log(result);
//     }
// })
// let sql = "SELECT AVG(mark) AS marksubject,subject_id FROM  marks WHERE date LIKE '2022%' GROUP BY subject_id; ";

// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Dato Actualizado");
//         console.log(result);
//     }
// })
// let sql = "SELECT * FROM students WHERE año_ingreso =2022";
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Dato Actualizado");
//         console.log(result);
//     }
// })

// let sql = "DELETE marks  WHERE mark > 5 AND date LIKE '2022%'";
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Dato Actualizado");
//         console.log(result);
//     }
// })

// let sql = "SELECT * FROM codenotch2.groups";
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Dato Actualizado");
//         console.log(result);
//     }
// })

// let sql = "SELECT COUNT(*) FROM students";
// connection.query(sql, function(err, result)
// {
//     if(err)
//     console.log(err);
//     else
//     {
//         console.log("Dato Actualizado");
//         console.log(result);
//     }
// })
// let sql = "SELECT COUNT (*) FROM codenotch2.students ";


// connection.query(sql, function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Profesores dados de alta")
//         console.log(result)
//     }
// })
// let sql = "SELECT AVG (mark) FROM codenotch2.marks WHERE subject_id=1 ";


// connection.query(sql, function(err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Profesores dados de alta")
//         console.log(result)
//     }
// })



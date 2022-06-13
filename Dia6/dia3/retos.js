dlet mysql = require("mysql2")
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

// let sql = "SELECT COUNT(*) AS n_alumn, teachers.first_name, teachers.last_name FROM students JOIN subject_teacher ON (students.groups_id = subject_teacher.group_id) JOIN teachers ON (teachers.teachers_id = subject_teacher.teacher_id) JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) GROUP BY  subjects.subject_id;";
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

// let sql = "SELECT first_name, last_name, subjects.title FROM teachers JOIN subject_teacher ON (teachers.teachers_id = subject_teacher.teacher_id) JOIN subjects  ON ( subject_teacher.subject_id = subjects.subject_id);";
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

let sql = "SELECT first_name, last_name, subjects.title FROM students JOIN marks ON (students.students_id = marks.student_id) JOIN subjects  ON ( marks.subject_id = subjects.subject_id)";
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
const { response } = require("../app");
const connection = require("../database")
require("../models/student")

function getStudent(request, response) {
    let sql;
    
    if (request.query.id != ""){
       
        console.log(request.query.id)
        
        // sql = `SELECT * FROM students WHERE students_id = ${request.query.id}` 
        sql = `SELECT * FROM students WHERE students_id =`+request.query.id; 
        }
    else{
       
        sql = "SELECT * FROM  students"
       
    }
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
            console.log(result)
        }
    })
}
function postStudent(request, response) {
    console.log("Entro al post")
    // let student = request.body;
    console.log(request.body.name)
    console.log(request.body.sname)
    console.log(request.body.year)
    console.log(request.body.group)

    let sql = "INSERT INTO students(first_name, last_name, groups_id, año_ingreso) " +
        "VALUES ('" + request.body.name + "', '" + request.body.sname + "', '"+ request.body.group + "', '"
        + request.body.year + "') ";

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
} 
function putStudent(request,response){
    
    let sql;

    let first_name = request.body.name;
    let last_name = request.body.sname;
    let año_ingreso = request.body.year;
    let students_id = request.query.id;
    let groups_id = request.body.group
    let params = [first_name,last_name,groups_id,año_ingreso, students_id]

    sql = "UPDATE students SET first_name = COALESCE(?, first_name) , " +
        "last_name = COALESCE(?, last_name) , " +
        "groups_id = COALESCE(?, groups_id) , " +
        "año_ingreso = COALESCE(?, año_ingreso)  WHERE students_id = ?"


        // let sql = "UPDATE students SET first_name = "+request.body.name+" , " +
        // "last_name ="+request.body.sname+" , " + "groups_id = " + request.body.group+
        // ", año_ingreso = "+request.body.year + "  WHERE students_id =" + request.query.id 
        
    
        connection.query(sql, params, function (err, result) {
            if (err)
                console.log(err);
            else {
                response.send(result);
            }
        })
    
}
function deleteStudent(request, response) {
    let id = request.query.id
    
    console.log(id)

    let sql 

    if (request.query.id != ""){
       
        console.log(request.query.id)
        
        // sql = `SELECT * FROM students WHERE students_id = ${request.query.id}` 
        sql = `DELETE FROM students WHERE students_id =`+request.query.id
        }
    else{
       
        console.log("me cvago en dios")
       
    }
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
            console.log(result)
        }
    })
}

//Marks
function getMark(request, response) {
    let id = request.query.id
    console.log(id)

    let sql 

    if (request.query.id != ""){
       
        console.log(request.query.id)
        
        // sql = `SELECT * FROM students WHERE students_id = ${request.query.id}` 
        sql = `SELECT * FROM marks WHERE student_id =`+request.query.id
        }
    else{
       
        sql = `SELECT * FROM marks `
       
    }
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
            console.log(result)
        }
    })
}
function putMark(request,response){
    let sql;

    let student_id =request.body.student_id;
    let subject_id = request.body.subject_id;
    let date = request.body.date;
    let mark = request.body.mark;
    let params = [student_id,subject_id,date,mark,student_id]

    sql = "UPDATE marks SET " +
        "student_id = COALESCE(?, student_id) ," +
        "subject_id = COALESCE(?, subject_id) ," +
        "date = COALESCE(?, date), " +
        "mark = COALESCE(?, mark) " +
        "WHERE student_id = ?"


        // let sql = "UPDATE students SET first_name = "+request.body.name+" , " +
        // "last_name ="+request.body.sname+" , " + "groups_id = " + request.body.group+
        // ", año_ingreso = "+request.body.year + "  WHERE students_id =" + request.query.id 
        
    console.log("put a madre")
        connection.query(sql, params, function (err, result) {
            if (err)
                console.log(err);
            else {
                response.send(result);
            }
        })
    
}
function postMark(request, response) {
    
    let sql = "INSERT INTO marks(student_id,subject_id,date,mark) " +
        "VALUES ('" + request.body.student_id + "', '" + request.body.subject_id + "', '"+ request.body.date + "', '"
        + request.body.mark + "') ";

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
        }
    })
} 
function deleteMark(request, response) {
    let id = request.query.id
   
    console.log(id)

    let sql 

    if (request.query.id != ""){
       
        console.log(request.query.id)
        
        // sql = `SELECT * FROM students WHERE students_id = ${request.query.id}` 
        sql = `DELETE FROM marks WHERE student_id =`+request.query.id
        }
    else{
       
        console.log("me cvago en dios")
       
    }
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
            console.log(result)
        }
    })
}

//Media
function getMedia(request, response) {
    let id = request.query.id
    
    console.log(id)

    let sql 

    if (request.query.id != ""){
       
        console.log(request.query.id)
        
        // sql = `SELECT * FROM students WHERE students_id = ${request.query.id}` 
        sql = `SELECT AVG(mark) AS notamedia FROM marks WHERE student_id =`+request.query.id
        }
    // else{
       
    //     sql = `SELECT AVG(mark) AS notamedia FROM marks GROUP BY subject_id`
       
    // }
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
            console.log(result)
        }
    })
}
function getApuntadas(request, response) {
    let id = request.query.id
   
    console.log(id)

    let sql 

    if (request.query.id != ""){
       
        console.log(request.query.id)
        
        // sql = `SELECT * FROM students WHERE students_id = ${request.query.id}` 
        sql = "SELECT first_name,last_name,subjects.title AS asignatura FROM students INNER JOIN marks ON (students.students_id = marks.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) WHERE student_id=" + request.query.id        }
    // else{
       
    //     sql = `SELECT AVG(mark) AS notamedia FROM marks GROUP BY subject_id`
       
    // }
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
            console.log(result)
        }
    })
}
function getImpartidas(request, response) {
    let id = request.query.id
   
    console.log(id)

    let sql 

    if (request.query.id != ""){
       
        console.log(request.query.id)
        
        // sql = `SELECT * FROM students WHERE students_id = ${request.query.id}` 
        sql = "SELECT first_name,last_name,subjects.title AS asignatura FROM teachers INNER JOIN subject_teacher ON (teachers.teachers_id = subject_teacher.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) WHERE teacher_id=" + request.query.id        }
    else{
       
        sql = "SELECT first_name,last_name,subjects.title AS asignatura FROM teachers INNER JOIN subject_teacher ON (teachers.teachers_id = subject_teacher.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)"
        }

    
    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result);
            console.log(result)
        }
    })
}
module.exports ={getStudent, postStudent, deleteStudent, putStudent, getMark, putMark, postMark, deleteMark, getMedia, getApuntadas, getImpartidas}
// const { request } = require("../src/app");

// const {Student} = require ("../src/models/student") Preguntar
class Student {
    constructor(name, sname, year,group) {
        this.name = name;
        this.sname = sname;
        this.group = group;
        this.year = year;
    }
}
async function getStudent() {
    let id = null

    let param = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        method: "GET"
    }
    let url = `http://localhost:3000/students/`
    id = document.getElementById("id").value;
    if (id == "") {
        url = `http://localhost:3000/students/`

    } if (id != null) {
        console.log(id)
        url = `http://localhost:3000/students/?id=${id}`
    }
    try {
        let data = await fetch(url, param)
        let result = await data.json();
        imprimir(result);

    } catch (e) {
        console.log(e)
    }
}
async function postStudent() {

    let url = `http://localhost:3000/students/`


    


    try {
        let name = document.getElementById("name").value
        let sname = document.getElementById("sname").value
        let year = document.getElementById("year").value
        let group = document.getElementById("group").value
        
      
        let student1 = new Student(name,sname,year,group)
        let param = {
            headers: { "content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(student1),
            method: "POST"
        }
        
        let data = await fetch(url, param)
        
        let result = await data.json();
        imprimir(result);

    } catch (e) {
        console.log(e)
    }
}
async function deleteStudent() {
    let id = null
    id = document.getElementById("id").value;
    let url;
    let param = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        method: "DELETE"
    }
    if(id!=null){
            console.log(id)
            
            url = `http://localhost:3000/students?id=${id}`
    }
    try {
        let data = await fetch(url, param)
        let result = await data.json();
            imprimir(result);
        
    } catch (e) {
        console.log(e)
    }
}
async function putStudent() {
    let id = null
    id = document.getElementById("id").value;
    let url;
    
    if(id!=null){
        console.log(id)
        console.log("lo intento")
        url = `http://localhost:3000/students?id=${id}`
        }

    try {
        let name = document.getElementById("name").value
        let sname = document.getElementById("sname").value
        let year = document.getElementById("year").value
        let group = document.getElementById("group").value
        
      
        let student1 = new Student(name,sname,year,group)
        let param = {
            headers: { "content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(student1),
            method: "PUT"
        }
        
        let data = await fetch(url, param)
        
        let result = await data.json();
        

    } catch (e) {
        console.log(e)
    }
}
function imprimir(result) {
    // let resultado = JSON.stringify(result)
    let resultado = "";
    let tabla = `<table>
                <tr>
                <th>Student ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Group ID</th>
                <th>Año ingreso</th>
                </tr>
            `

    // resultado = document.getElementById("impresion")
    resultado = resultado + tabla;
    for (let i = 0; i < result.length; i++) {

        resultado += ` <tr>
                            <td>${result[i].students_id}</td>
                            <td>${result[i].first_name}</td>
                            <td>${result[i].last_name}</td>
                            <td>${result[i].groups_id}</td>
                            <td>${result[i].año_ingreso}</td>
                            </tr>
                `}
    document.getElementById("impresion").innerHTML = resultado + `</table>`
}

//Marks

class Marks {
    constructor(student_id,subject_id, date, mark) {
        this.student_id=student_id;
        this.subject_id = subject_id;
        this.date = date;
        this.mark = mark;
        
    }
}
async function getMark() {
    let id = null
    id = document.getElementById("student_id").value;
    let url;
    let param = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        method: "GET"
    }
    if(id!=null){
            console.log(id)
            
            url = `http://localhost:3000/mark?id=${id}`
    }
    try {
        let data = await fetch(url, param)
        let result = await data.json();
            imprimirMark(result);
        
    } catch (e) {
        console.log(e)
    }
}
async function postMark() {

    let url = `http://localhost:3000/mark`


    


    try {
        let subject_id = document.getElementById("subject_id").value
        let date = document.getElementById("date").value
        let mark = document.getElementById("mark").value
        let student_id = document.getElementById("student_id").value
      
        let mark1 = new Marks(student_id,subject_id,date,mark)
        let param = {
            headers: { "content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(mark1),
            method: "POST"
        }
        
        let data = await fetch(url, param)
        
        let result = await data.json();
        console.log("Nota subida" + result)

    } catch (e) {
        console.log(e)
    }
}
async function putMark() {

    let url = `http://localhost:3000/mark`


    


    try {
        let subject_id = document.getElementById("subject_id").value
        let date = document.getElementById("date").value
        let mark = document.getElementById("mark").value
        let student_id = document.getElementById("student_id").value
      
        let mark1 = new Marks(student_id,subject_id,date,mark)
        let param = {
            headers: { "content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(mark1),
            method: "PUT"
        }
        
        let data = await fetch(url, param)
        
        let result = await data.json();
        console.log("Nota subida" + result)

    } catch (e) {
        console.log(e)
    }
}
async function deleteMark() {
    let id = null
    id = document.getElementById("student_id").value;
    let url;
    let param = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        method: "DELETE"
    }
    if(id!=null){
            console.log(id)
            console.log("lo intento")
            url = `http://localhost:3000/mark?id=${id}`
    }
    try {
        let data = await fetch(url, param)
        let result = await data.json();
        
    } catch (e) {
        console.log(e)
    }
}
function imprimirMark(result) {
    // let resultado = JSON.stringify(result)
    let resultado = "";
    let tabla = `<table>
                <tr>
                <th>Mark ID</th>
                <th>Student ID</th>
                <th>Subject ID</th>
                <th>Date</th>
                <th>Nota</th>
                </tr>
            `

    // resultado = document.getElementById("impresion")
    resultado = resultado + tabla;
    for (let i = 0; i < result.length; i++) {

        resultado += ` <tr>
                            <td>${result[i].mark_id}</td>
                            <td>${result[i].student_id}</td>
                            <td>${result[i].subject_id}</td>
                            <td>${result[i].date}</td>
                            `
        if(result[i].mark<5){
                   resultado+= `<td class ="sus">${result[i].mark}</td></tr>`
        }
        else if(result[i].mark>=5){
                    resultado+= `<td class ="apr">${result[i].mark}</td></tr>`
        }             
                }
    document.getElementById("impresion").innerHTML = resultado + `</table>`
}

//Media

async function getMedia() {
    let id = null
    id = document.getElementById("student_id").value;
    let url;
    let param = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        method: "GET"
    }
    if(id!=null){
            console.log(id)
            console.log("lo intento")
            url = `http://localhost:3000/media?id=${id}`
    }
    try {
        let data = await fetch(url, param)
        let result = await data.json();
        console.log(result[0].notamedia)
        let resultado = `<table>
                    <tr>
                    <th>Student ID</th>
                    <th>Media</th>
                    </tr>
                `  
        if(result[0].notamedia<5){
            
                    resultado+= `<td class ="sus">${id}</td>
                    <td class ="sus">${result[0].notamedia}</td>
                    </tr>`
         }
         else if(result[0].notamedia>=5){
          
                     resultado+= `<td class ="sus">${id}</td>
                     <td class ="apr">${result[0].notamedia}</td>
                     </tr>`
         }             
                   
         document.getElementById("impresion").innerHTML = resultado + `</table>`
    } catch (e) {
        console.log(e)
    }
}
async function getApuntadas() {
    let id = null
    id = document.getElementById("student_id").value;
    let url;
    let param = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        method: "GET"
    }
    if(id!=null){
            console.log(id)
            console.log("lo intento")
            url = `http://localhost:3000/apuntadas?id=${id}`
    }
    try {
        let data = await fetch(url, param)
        let result = await data.json();
        let resultado = `<table>
                    <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Asignatura</th>
                    </tr>
                `  
                
                resultado+= `<td><b>${result[0].first_name}<b></td>
                <td>${result[0].last_name}</td>
                <td>${result[0].asignatura}</td>
                </tr>`
                   
                   
         document.getElementById("impresion").innerHTML = resultado + `</table>`
    } catch (e) {
        console.log(e)
    }
}
async function getImpartidas() {
    let id = null
    id = document.getElementById("teacher_id").value;
    let url;
    let param = {
        headers: { "content-type": "application/json; charset=UTF-8" },
        method: "GET"
    }
    if(id!=null){
            console.log(id)
            
            url = `http://localhost:3000/impartidas?id=${id}`
    }
    try {
        let data = await fetch(url, param)
        let result = await data.json();
            let resultado = `<table>
            <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Asignatura</th>
            </tr>
        `  
    
        for(let i = 0; i<result.length;i++){
    
                resultado+= `<td><b>${result[i].first_name}<b></td>
                <td>${result[i].last_name}</td>
                <td>${result[i].asignatura}</td>
                </tr>`
                   
         }
         document.getElementById("impresion").innerHTML = resultado + `</table>`
    } catch (e) {
        console.log(e)
    }
}



 class Persona {
    
    constructor(name,sname,age,city) {
        
        this.name = name;
        this.sname=sname;
        this.age=age;
        this.city=city;
        
    }
}
async function postUser(){
    let url="http://localhost:3000/profesionals"


    try{
        let name = document.getElementById("name").value;
        let sname =document.getElementById("sname").value;
        let city =document.getElementById("city").value;
        let age = document.getElementById("age").value
        console.log("name " + document.getElementById("name").value)
        console.log("name " + document.getElementById("sname").value)
        console.log("name " + document.getElementById("city").value)
        console.log("name " + document.getElementById("age").value)
        console.log("pasod e tu culo")
        let persona1 = new Persona(name, sname, city , age)
        let js = JSON.stringify(persona1)
        console.log(persona1)
        let param = {
                            headers: {"Content-type": "application/json ; charset=UTF-8"},
                            body: JSON.stringify(persona1),
                            method: "POST"
                        }
        let data = await fetch(url, param);
        let result = await data.json();

        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
// function postUser(){
        
//         let persona = new Persona(
//                         document.getElementById("name").value,
//                         document.getElementById("sname").value,
//                         document.getElementById("city").value,
//                         document.getElementById("age").value
//         )    
//         let url="http://localhost:3000/profesionals"

//         if(validar(persona)){
           
//             let param= {
//                 headers: {"Content-type": "application/json ; charset:UTF-8"},
//                 body: JSON.stringify(persona),
//                 method: "POST"
//             }
//             fetch(url ,param).then(function(data){
//                 return data.json()
//             }).then(function(result){
//                 if(result.error){
//                     showToast("Error"+ result.mensaje, "bg-danger")
//                 }else{
//                     showToast("Usuario creado correctamente","bg-success")
//                     console.log(result)
//                 }
//             }).catch(function(error){
//                 console.log(error)
//             })
//         }
//     }
   async function getUsers(){

        let url=""
        let id = document.getElementById("id").value;
            if(id==null || id ==""){
                url= `http://localhost:3000/profesionals`

            }else{
                
            url= `http://localhost:3000/profesionals?id=${id}`
            }

            let param={
                headers:{
                    "content-type":"application/json; charset=UTF-8"
                },
                method:"GET"
                        }
                    try{
            
                    let data = await fetch(url,param)
                    let result = await data.json();
                    document.getElementById("impresion").innerHTML = JSON.stringify(result)
                    
            
            }catch(e){
                console.log(e)
            }
   }
   

   function putUsers(){

    
    let url= `http://localhost:3000/profesionals`;
    
        let id = document.getElementById("id").value -1;
        let name = document.getElementById("name").value;
        let sname =document.getElementById("sname").value;
        let city =document.getElementById("city").value;
        let age = document.getElementById("age").value
        let jsn = {id:id, name:name, sname:sname, city:city, age:age}
        let param= {
                headers: {"Content-type": "application/json ; charset=UTF-8"},
                body: JSON.stringify(jsn),                
                method: "PUT"
        }
        fetch(url,param).then(function(data){
            console.log("pinga")
            return data.json()
        }).then(function(result){
            if(result.error){
                showToast("Error"+ result.mensaje, "bg-danger")
                document.getElementById("impresion").innerHTML = JSON.stringify(result)
            }else{
                showToast("Usuario modificado correctamente","bg-success")
                document.getElementById("impresion").innerHTML = JSON.stringify(result)
            }
        }).catch(function(error){
            console.log(error)
        })
    }

   async function deleteUsers(){

        let id = document.getElementById("id");
        let url= `http://localhost:3000/profesionals`
        let param={
            header:{
                "content-type":"application/json; charset=UTF-8"
            },body:id,
            method:"DELETE"
        }
        try{
            if(id===null){
                let data = await fetch(url,param)
                let result = await data.json();
                document.getElementById("impresion").innerHTML = JSON.stringify(result)
            }else{
                let data = await fetch(url,param)
                let result = await data.json();
                document.getElementById("impresion").innerHTML = JSON.stringify(result)
            }
        }catch(e){
            console.log(e)
        }
}




//Extras
    function validar(user){
        let resultado = true;
        let err;
        for(atribute in user){
            if(atribute== "" || atribute == null){
                resultado=false;
                showToast("AVISO: Campo $(atribute) vacio", "bg-warning")
            }
        }

        return resultado;
    }
    function showToast(message, color) {
        document.getElementById("toastText").innerText = message;
        let toastElement = document.getElementById('toast')
    
        toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;
    
        let toast = new bootstrap.Toast(toastElement)
        toast.show()
    }
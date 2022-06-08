async function getPokemon(){
    //preguntar inner html y preguntar la ruta id mas name
    
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value
    let url= `https://pokeapi.co/api/v2/pokemon/${id}${name}`
    let param={
        headers:{
            "content-type":"application/json; charset=UTF-8"
        },
        method:"GET"
             }
    try{
         let data = await fetch(url,param);
         console.log(data)
         
         let result = await data.json();
     
        let resultado =
                    `<div><img src="${result.sprites.front_default}" class ="spokefoto">`;
        let resultado2 =
                    `<tr>              
             <td><b>Nombre: </b></td>              
             <td>${result.species.name}</td>   
             </tr>           
             <tr>              
             <td><b>Movimiento: </b></td>              
             <td>${result.moves[0].move.name}</td>              
             </tr>  
             <tr>              
             <td><b>Habilidades: </b></td>              
             <td>${result.abilities[0].ability.name}</td>              
             </tr>  
             <tr>              
             <td><b>Tipo: </b></td>              
             <td>${result.types[0].type.name}</td>              
             </tr>              
           
            </div>`;
                document.getElementById("pokefoto").innerHTML = resultado
                document.getElementById("pokeinfo").innerHTML = resultado2
        
        //  document.getElementById("").innerHTML = ;
        //  document.getElementById("").innerHTML = ;
         
          }catch(e){
        console.log(e)
    }
}
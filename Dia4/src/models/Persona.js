 
 
 class Persona {
    
    constructor(name,sname,age,city) {
        
        this.name = name;
        this.sname=sname;
        this.age=age;
        this.city=city;
        
    }
//     toText(){
        
//             let res =""
//             for (let atribute in this){
//                 if(typeof this[atribute] == "string"|| typeof this[atribute] == "number"|| typeof this[atribute] == "boolean"){
//                     res = res + atribute+":  "+ this[atribute]+"\n";
//             }
//     }console.log(res)
// }
}
module.exports = {Persona};
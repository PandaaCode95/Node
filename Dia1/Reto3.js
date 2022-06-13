const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout)
const fs = require('fs');


let objecto = {
    name: "",
    sname: "",
    age: 0
};

rl.question("Name?", (dato) => {
    objecto.name = dato;
    rl.question("Second Name?", (dato) => {
        objecto.sname = dato;
        rl.question("Age?", (dato) => {
            objecto.age = dato; rl.close()
            let data = JSON.stringify(objecto);
            fs.writeFile("object.json", data, (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log("Objeto creado\n");

                }
            });
            fs.readFile("object.json", 'utf8', (err,data) => {
                if (err)
                    console.log(err);
                else {
                    console.log(data);

                }
            })
        });
    }
    )
}
)



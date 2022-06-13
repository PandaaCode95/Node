const express = require("express");
const cors = require("cors");
const userStudents = require("./routers/students.router");
const errorHandling = require("./error/errorhandling");

const app = express();

app.set("port", process.env.PORT || 3000)

app.use(cors());
// app.use(express.urlencoded({extend:false}));
app.use(express.json());
app.use(userStudents);


app.use(function(req,res,next){
    res.status(404).json({
        error:true,
        codigo:404,
        message:"Endpoint not found"
    })
})

app.use(errorHandling);

module.exports = app;
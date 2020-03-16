var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

const db = require("./model");


app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env/MOGODB_URI || "mongodb://localhost/populatedb", {useNewUrlParser: true});

db.Workouts.create({name: "Butterfly Squats"})
.then(dbWorkout => {
  console.log(dbWorkout);

}).catch(({message}) =>{
  console.log(message);
});

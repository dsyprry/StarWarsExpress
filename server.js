//Dependencies
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var express = require("express");

var app = express();
var PORT = 3000;

//Data
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var yoda = {
	name: "Yoda",
	role: "Jedi Master",
	age: 900,
	forcePoints: 2000
};

var darthMaul = {
	name: "Darth Maul",
	role: "Sith Lord",
	age: 200, 
	forcePoints: 1200
};

var obiWan = {
	name: "Obi Wan Kenobi",
	role: "Jedi",
	age: 12,
	forcePoints: 5

};

//Routes
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.get("/", function(req, res) {
	res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
	res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
	res.json(darthMaul);
});

app.get("/obiwan", function(req, res) {
	res.json(obiWan);
})



//Listener
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.listen(PORT, function() {
	console.log("App listening on PORT:  " + PORT)
})


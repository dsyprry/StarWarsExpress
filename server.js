//Dependencies
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var express = require('express');

var app = express();
var PORT = 3000;

var path = require("path");

var bodyParser = require('body-parser');

//Body-Parser
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Data
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var characters = [

	{
	routeName: "yoda",
	name: "Yoda",
	role: "Jedi Master",
	age: 900,
	forcePoints: 2000
	}, 

	{
	routeName: "darthmaul",
	name: "Darth Maul",
	role: "Sith Lord",
	age: 200, 
	forcePoints: 1200
	}, 

	{
	routeName: "obiwan",
	name: "Obi Wan Kenobi",
	role: "Jedi Knight",
	age: 60,
	forcePoints: 1350
	}
];


//Routes
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
	res.sendFile(path.join(__dirname, "add.html"));
})

app.get("/api/:characters?", function(req, res) {

	var chosen = req.params.characters;

	if(chosen){

		console.log(chosen);

		for (var i=0; i < characters.length; i++) {
			if (chosen === characters[i].routeName) {
				res.json(characters[i]);
				return;
			}
		}

		res.send("No character found");

	} else {
		res.json(characters);
	}
});

app.post("/api/new", function(req, res) {
	var newcharacter = req.body;
	newcharacter.routeName = newcharacter.name.replace(/s+/g, "").toLowerCase();

	console.log(newcharacter);

	characters.push(newcharacter);

	res.json(newcharacter);
})

//Listener
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.listen(PORT, function() {
	console.log("App listening on PORT:  " + PORT)
})


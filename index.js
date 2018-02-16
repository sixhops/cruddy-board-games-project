var db = require('./models');
var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

// Set a static directory
app.use(express.static(path.join(__dirname, 'static')));

// Configure the body parser module
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

// Default route for the root of the site
app.get('/', function(req,res) {
  res.render('home');
});

// Add your routes here...
// GET /games - List of all games
app.get('/games', function(req,res) {
  db.game.findAll().then(function(data){
  // console.log(data);
  // console.log(data[0].datavValues.name);
  // console.log(data[0].datavValues.description);

  // games will be an array of all game instances
  res.render('games/index', {games: data});
  });
});

// GET /games/new - Returns a form for adding a new game
app.get('/games/new', function(req,res){
  res.render('games/new');
});

// POST /games - Adds a new game from the posted form data
app.post('/games', function(req,res){
  db.game.create({
    name: req.body.name,
    description: req.body.description
    }).then(function(data) {
        // you can now access the newly created task via the variable data
        console.log(data);
        res.render('games/name', {game: data});
    });
});

// GET /games/:name - Gets one specific game
app.get('/games/:name', function(req,res){
  console.log("in games/:name path.....!");
  console.log(req.body.name);

});
// GET /games/:name/edit - Returns a form for editing a game's data
app.get('/games/:name/edit', function(req,res){
  console.log("in games/:name/edit path.....!");
  console.log(data.body.name);

});
// PUT /games/:name - Updates a game from the posted form data

// DELETE /games/:name - Delete one specific game

// start the server
var port = 3000;
console.log("Listening at http://localhost:" + port + "...");
app.listen(port);

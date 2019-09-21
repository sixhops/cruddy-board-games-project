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
  db.game.findAll({
    attributes: ['id', 'name', 'description']
  }).then(function(data){
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
  var newGame = {
    name: req.body.name,
    description: req.body.description
  }
  db.game.create({
    name: newGame.name,
    description: newGame.description
    }).then(function(data) {
        res.render('games/name', {game: data});
    });
});

// GET /games/:name - Gets one specific game
app.get('/games/:name', function(req,res){
  // console.log("in games/:name path.....!");
  var game = {
    name: req.params.name
  }
  db.game.find({
    where: {name:game.name}
  }).then(function(data){
    res.render('games/name', {game: data[0]});
  });
});

// GET /games/:name/edit - Returns a form for editing a game's data
app.get('/games/:name/edit', function(req,res){
  var game = {
    name: req.params.name
  }
  db.game.find({
    where: {name:game.name}
  }).then(function(data){
    // console.log("data in games/:name/edit");
    res.render('games/edit', {game: data});
  });
});

// PUT /games/:name - Updates a game from the posted form data
app.put('/games/:name', function(req,res){

  db.game.update({
    name:req.body.name,
    description:req.body.description
  },{
    where: { name:req.params.name }
  }).then(function(data){
    res.send("success");
  });
});

// DELETE /games/:name - Delete one specific game
app.delete('/games/:id/destroy', function(req,res){
  var deleteGame = {
    id: req.params.id
  }
  db.game.destroy({
    where: {
      id:deleteGame.id
    }
  }).then(function(data){
    res.send("success");
  });
});
// start the server
var port = 3000;
console.log("Listening at http://localhost:" + port + "...YO!");
app.listen(port);

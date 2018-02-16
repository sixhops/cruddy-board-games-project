var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var db = require('./models');

var app = express();

// Set a static directory
app.use(express.static(path.join(__dirname, 'static')));

// Configure the body parser module
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

// Default route for the root of the site
app.get('/', function(req, res) {
  res.render('home');
});

// Add your routes here...
app.get('/games', function(req, res) {
  db.game.findAll().then(function(data) {
    res.render('games/index', {games: data});
  });
});
// GET /games - List of all games
app.get('/games/new', function(req, res) {
  res.render('games/new');
});
// GET /games/new - Returns a form for adding a new game
app.post('/games', function(req, res) {
  db.game.create({
  name: req.body.name,
    description: req.body.description
  }).then(function(data) {
    console.log(data);
    res.redirect('/games');
  });
});
// POST /games - Adds a new game from the posted form data
app.get('/game/:name', function(req, res) {

});
// GET /games/:name - Gets one specific game
// GET /games/:name/edit - Returns a form for editing a game's data
// PUT /games/:name - Updates a game from the posted form data
// DELETE /games/:name - Delete one specific game

// start the server
var port = 3000;
console.log("Listening at http://localhost:" + port + "...");
app.listen(port);

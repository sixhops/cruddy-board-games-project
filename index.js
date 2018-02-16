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
    res.redirect('/games');
  });
});
// POST /games - Adds a new game from the posted form data
app.get("/games/:name", function(req, res){
  db.game.find({
    // Use ILIKE, to case-insensitively match a pattern
    // Cons: Slow, unless you start messing with extensions like pg_trgm
    where: {name: {$iLike: '%'+req.params.name+'%'}}
  }).then(function(data){
    res.render("games/single", {game: data});
  });
});
// GET /games/:name - Gets one specific game
app.get('/games/:name/edit', function(req, res) {
  db.game.find({
    where: {name: req.params.name}
  }).then(function(data) {
    console.log(data);
    res.render('games/edit', {game: data})
  });
});
// GET /games/:name/edit - Returns a form for editing a game's data
app.put('/games/:name', function(req, res) {
  db.game.update({
    name: req.body.name,
    description: req.body.description},
    {where: {name: req.params.name}}
  ).then(function(){
    res.send();
  })
});
// PUT /games/:name - Updates a game from the posted form data
app.delete('/games/:name/destroy', function(req, res) {
  db.game.destroy({
    where: {name: req.params.name}
  }).then(function() {
    res.send();
  });
});
// DELETE /games/:name - Delete one specific game

// start the server
var port = 3000;
console.log("Listening at http://localhost:" + port + "...");
app.listen(port);

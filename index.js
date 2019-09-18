db = require('./models');
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
app.get('/', function(req, res) {
  res.render('home');
});

// Add your routes here...
app.get('/games', function(req, res) {
  db.game.findAll().then(function(data) {
    res.render('games/index', {games: data});
  });
});

app.delete('/games/:name', function(req, res) {
  console.log('In the DELETE /games/name root');
  console.log(req.params.name);
  db.game.destroy({
  where: { name: req.params.name}
  }).then(function() {
  res.send('deletedddd');
  });
});

app.get('/games/new', function(req, res) {
  res.render('games/new');
});

app.post('/games', function(req, res) {
  db.game.create({
  name: req.body.name,
  description: req.body.description
}).then(function(data) {
  res.redirect('games');
  // you can now access the newly created task via the variable data
});
})





app.get('/games/:name/edit', function(req, res) {
  console.log('IN THE EDIT ROUTE...')
  db.game.find({
    where: {name: req.params.name}
  }).then(function (data) {
    res.render('games/edit', {game:data});
  });
});

app.put('/games/:name', function(req, res) {
    db.game.update({
      name: req.body.name,
      description: req.body.description
    }, {
      where: {name: req.params.name}
    }).then(function(data){
      res.send('this may be working');
    });
});


app.get('/games/:name', function(req, res) {
  db.game.find({
  where: {name: req.params.name}
  }).then(function(data) {
  res.render('games/show', {game: data});
  });
});


// GET /games - List of all games
// GET /games/new - Returns a form for adding a new game
// POST /games - Adds a new game from the posted form data
// GET /games/:name - Gets one specific game
// GET /games/:name/edit - Returns a form for editing a game's data
// PUT /games/:name - Updates a game from the posted form data
// DELETE /games/:name - Delete one specific game

// start the server
var port = 3000;
console.log("Listening at http://localhost:" + port + "...");
app.listen(port);

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
    console.log("/game findAll YO");
    // console.log(data);
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
  console.log("in games/ create path.....!");
  db.game.create({
    name: req.body.name,
    description: req.body.description
    }).then(function(data) {
        // you can now access the newly created task via the variable data
        // console.log(data);
        res.render('games/name', {game: data});
    });
});

// GET /games/:name - Gets one specific game
app.get('/games/:name', function(req,res){
  console.log("in games/:name path.....!");
  // console.log(req.params.name);
  db.game.find({
    where: {name:req.params.name}
  }).then(function(data){
    // console.log(data[0].dataValues.name);
    // console.log(data[0].dataValues.description);
    // console.log(data);
    res.render('games/name', {game: data[0]});
  });
});

// GET /games/:name/edit - Returns a form for editing a game's data
app.get('/games/:name/edit', function(req,res){
  console.log("in games/:name/edit path.....!");
  console.log(req.params.name);
  db.game.find({
    where: {name:req.params.name}
  }).then(function(data){
    console.log("data in games/:name/edit");
    // console.log(data);
    // console.log(data[0].dataValues.name);
    // console.log(data[0].dataValues.description);
    res.render('games/edit', {game: data});
  });
});

// PUT /games/:name - Updates a game from the posted form data
app.put('/games/:name', function(req,res){
  console.log("in games/ PUT path.....!");
  console.log(req.params.name);
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
app.delete('/games/:name/destroy', function(req,res){
  console.log("in games/ DESTROY path.....!");
  // console.log(req.params.id);
  // console.log(req.params.name);
  db.game.destroy({
    where: {
      name:req.params.name
    }
  }).then(function(data){
    // console.log(data[0].dataValues.name);
    // console.log(data[0].dataValues.description);
    // console.log("hit the delete");
    res.send("success");
  });
});
// start the server
var port = 3000;
console.log("Listening at http://localhost:" + port + "...YO!");
app.listen(port);

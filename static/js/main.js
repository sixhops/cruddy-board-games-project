console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

// code here ...
$('.edit-link').on('submit', function(e) {
  e.preventDefault(); //edit form will not POST to the back immediately
  var gameElement = $(this);
  var gameUrl = gameElement.attr('action');
  var gameData = gameElement.serialize();
  $.ajax({
    method: 'PUT', //we tell via ajax to do a PUT instead of POST
    url: gameUrl,
    data: gameData
  }).done(function(data) {
    console.log(data);
    window.location = '/games';
  });
});
// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

// code here ...
$('.delete-link').on('click', function(e) {
  e.preventDefault();
  var gameElement = $(this);
  var gameUrl = gameElement.attr('href');
  $.ajax({
    method: 'DELETE',
    url: gameUrl
  }).done(function(data) {
    console.log(data);
    window.location = '/games';
  });
});

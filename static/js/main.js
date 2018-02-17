console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

// code here ...
$('#edit-game').on('submit', function(e) {
  e.preventDefault();
  var gameUrl = $(this).attr('action');
  var gameData = $(this).serialize();
  $.ajax({
    method: 'PUT',
    url: gameUrl,
    data: gameData
  }).done(function() {
    window.location = '/games';
  });
});



// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

// code here ...
$('.delete-game').on('click', function(e) {
  e.preventDefault();
  var gameUrl = $(this).attr('href');
  $.ajax({
    method: 'DELETE',
    url: gameUrl
  }).done(function(data) {
    console.log(data);
    window.location = '/games';
  })
});

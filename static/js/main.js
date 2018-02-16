console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

// code here ...

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

// code here ...


$('#edit-form').on('submit', function(e) {
  e.preventDefault();
  var gameElement = $(this);
  var gameUrl = gameElement.attr('action');
  var gameData = gameElement.serialize();
  $.ajax({
    method: 'PUT',
    url: gameUrl,
    data: gameData
  }).done(function(data) {
    // get data returned from the PUT route
    console.log(data);

    // // or, you can redirect to another page
    window.location = '/games';
  });
});

$('.delete-link').on('click', function(e) {
  e.preventDefault();
  var gameElement = $(this);
  var gameUrl = gameElement.attr('href');
  $.ajax({
    method: 'DELETE',
    url: gameUrl
  }).done(function(data) {
    // get data returned from the DELETE route
    console.log(data);

    // do stuff when the DELETE action is complete
    gameElement.remove();

    // or, you can redirect to another page
    window.location = '/games';
  });
});

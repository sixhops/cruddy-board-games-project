console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

// code here ...
$('#editGame').on('submit', function(e) {
  e.preventDefault();
  // var gameElement = $(this);
  // var gameUrl = gameElement.attr('action');
  // var gameData = gameElement.serialize();
  $.ajax({
    method: 'PUT',
    // url: gameUrl,
    // data: gameData
    url: $(this).attr('action'),
    data: $(this).serialize()
  }).done(function(data) {
    // get data returned from the PUT route
    console.log(data);
    // or, you can redirect to another page
    window.location = '/games';
  });
});

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

// code here ...
$('.gameDelete').on('click', function(e) {
  e.preventDefault();
  // var gameElement = $(this);
  // var gameUrl = gameElement.attr('href');
  $.ajax({
    method: 'DELETE',
    // url: gameUrl
    url: $(this).attr('href')
  }).done(function(data) {
    // gameElement.remove();
    $(this).remove();
    // or, you can redirect to another page
    window.location = '/games';
  });
});

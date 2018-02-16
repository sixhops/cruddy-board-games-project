console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL
$('.game-edit').on('submit', function(e){
  e.preventDefault();
  var gameChange = $(this);
  var gameUrl = gameChange.attr('action');
  var gameData = gameChange.serialize();
  $.ajax({
    method: 'PUT',
    url: gameUrl,
    data: gameData
  }).done(function(data){
    console.log(data);
    window.location = "/games";
  });
});

$('.delete-link').on('click', function(e) {
    e.preventDefault();
    var gameElement = $(this);
    var gameUrl = gameElement.attr('href');
    $.ajax({
      method: 'DELETE', url: gameUrl
    }).done(function(data) {
      console.log(data);
      //remove article on page on client-side
      window.location = "/games";
    });
  });

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

// code here ...

// console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

// code here ...
$('#put-form').on('submit', function(event){
  event.preventDefault();
  var gameObj = $(this);
  var gameUrl = gameObj.attr('action');
  var gameData = gameObj.serialize();
  $.ajax({
    method: 'PUT',
    url: gameUrl,
    data: gameData
  }).done(function(data){
    window.location = '/games';
  });
});

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

// code here ...
$('.delete-link').on('click', function(event){
  event.preventDefault();
  var gameObj = $(this);
  var gameUrl = gameObj.attr('href');
  $.ajax({
    method: 'DELETE',
    url: gameUrl
  }).done(function(data){
    window.location = "/games";
  });
});

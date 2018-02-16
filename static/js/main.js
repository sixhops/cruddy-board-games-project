// console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

// code here ...
$('#put-form').on('sumbit', function(event){
  event.preventDefault();
  var gameObj = $(this);
  var gameUrl = gameObj.attr('action');
  var gameData = gameObj.serialize();
  console.log(gameUrl);
  $.ajax({
    method: 'PUT',
    url: gameUrl,
    data: gameObj
  }).done(function(){
    window.location = "/games";
  });
});
// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

// code here ...
$('.delete-link').on('click', function(event){
  event.preventDefault();
  var gameObj = $(this);
  var gameUrl = gameObj.attr('href');
  console.log(gameUrl);
  $.ajax({
    method: 'DELETE',
    url: gameUrl
  }).done(function(){
    window.location = "/games";
  });
});

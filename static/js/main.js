// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

$(".edit-game").submit(function(e){
  e.preventDefault();
  var gameUrl = $(this).attr('action');
  var updatedData = $(this).serialize();
  $.ajax({
    method: "PUT",
    url: gameUrl,
    data: updatedData,
  }).done(function(){
    window.location = "/games";
  });
})

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

$(".delete-game").on('click', function(e){
  var destUrl = $(this).attr('action');
  $.ajax({
    method: "DELETE",
    url: destUrl,
  }).done(function(){
    window.location = "/games";
  });
});

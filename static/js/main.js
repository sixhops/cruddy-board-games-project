console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

// code here ...
$('#edit').on('submit', function(e) {
  e.preventDefault();
  var url = $(this).attr('action');
  var data = $(this).serialize();
  $.ajax({
    method: 'PUT',
    url: url,
    data: data
  }).done(function(game) {
    var newUrl = "/games/" + $('input[name="name"]').val();
    window.location = newUrl;
  });
});
// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL
$('.delete-').on("click", function(e) {
   e.preventDefault();
   var url = $(this).attr('href');
   $.ajax({
     method: 'DELETE',
     url: gameUrl
   }).done(function(data) {
     window.location = "/games";
   });
 });

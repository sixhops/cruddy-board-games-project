
// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

$('#edit-form').on('submit', function(e) {
  e.preventDefault();
  var gameUrl = $(this).attr('action');  //can use $(e.target).attr('action');
  var gameData = $(this).serialize();  //can use $(e.target) instead of $(this)
  $.ajax({
    method: 'put',
    url: gameUrl,
    data: gameData
  }).done(function(data) {
    window.location = '/games';
  });
});

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

$('.delete').on('click', function(e) {
  e.preventDefault();
  var deleteUrl = $(this).attr('href');
  $.ajax({
    method: 'delete',
    url: deleteUrl
  }).done(function(data) {
    window.location = '/games';
  });
});

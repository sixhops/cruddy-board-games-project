
// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

$('#edit-submit').on('submit', function(e) {
  e.preventDefault();
  var gameUrl = $(this).attr('action');
  var gameData = $(this).serialize();
  $.ajax({
    method: 'put',
    url: gameUrl,
    data: gameData
  }).done(function() {
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

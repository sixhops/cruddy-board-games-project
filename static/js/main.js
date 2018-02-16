console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

// code here ...
$('.edit-game').submit(function(e) {
	e.preventDefault();
	var gameURL = $(this).attr('action');
	var update = $(this).serialize();
	$.ajax({
		method: "PUT",
		url: gameURL,
		data: update
	}).done(function() {
		window.location = '/games';
	});
});

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

// code here ...

$('.delete-game').on('click', function(e) {
	var destination = $(this).attr('action');
	$.ajax({
		method: 'DELETE', 
		url: destination
	}).done(function() {
		window.location = '/games';
	});
});
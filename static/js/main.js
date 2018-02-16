console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

$('#editForm').on('submit', function (e) {
	e.preventDefault();
	$.ajax({
		method: 'put',
		url: $(this).attr('action'),
		data: $(this).serialize()
	}).done(function(data) {
		window.location = '/games';
	})
})

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

// code here ...

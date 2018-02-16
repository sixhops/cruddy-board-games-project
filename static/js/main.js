console.log("JS good to go, sir!");

// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

$('#editForm').on('submit', function (e) {
	e.preventDefault(); //we don't want an actual submit, use ajax to change it to put 
	$.ajax({
		method: 'put',
		url: $(this).attr('action'),
		data: $(this).serialize() //put in a format that can be sent in TCPIP format
	}).done(function(data) {
		window.location = '/games';
	})
})

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL


 $('.delete').on('click', function(e) {
 	console.log("in the delete click");
   e.preventDefault();
   var deleteUrl = $(this).attr('href');
   $.ajax({
     method: 'delete',
     url: deleteUrl
   }).done(function(data) {
     window.location = '/games';
   });
 });

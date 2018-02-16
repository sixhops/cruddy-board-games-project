// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

$("#editForm").on("submit", function(e) {
    e.preventDefault();
    var url = $("#editForm").attr("action");
    var data = $("#editForm").serialize();
    $.ajax({
        method: 'PUT',
        url: url,
        data: data
    }).done(function(){
        console.log("about to redirect!");
        window.location = "/games";
    });
});

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL
$(".deleteLink").on("click", function(e) {
    e.preventDefault();
    var url = $(this).attr("href");
    var id = $(this).attr("data-id");
    $.ajax({
        method: "DELETE",
        url: url,
    }).done(function(){
        $("#li" + id).remove();
    });
});

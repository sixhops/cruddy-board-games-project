$('.delete-link').on("click", function(e) {
   e.preventDefault();
   var gameElement = $(this);
   var gameUrl = gameElement.attr('href');
   console.log(gameUrl);
   $.ajax({
     method: 'DELETE',
     url: gameUrl
   }).done(function(data) {
     console.log(data);
     window.location = "/games";
   });
 });

 $('#put-form').on('submit', function(e) {
   console.log("the update form was submitted");
   e.preventDefault();
   var gameForm = $(this);
   var gameUrl = gameForm.attr('action');
   console.log(gameUrl);
   var gameData = gameForm.serialize();
   console.log(gameData);
   $.ajax({
     method: 'PUT',
     url: gameUrl,
     data: gameData
   }).done(function(data) {
     console.log(data);
     var newUrl = "/games/" + $('input[name="name"]').val();
     console.log(newUrl);
     window.location = newUrl;
   });
 });

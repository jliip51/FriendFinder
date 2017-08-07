$(document).ready(function() {

  $("#submit").on("click", function(event) {
    event.preventDefault();

    function formComplete() {
      var complete = true;
      $('.form-control').each(function() {
        if ($(this).val() === '') {
          complete = false;
        }
      });

      $("input:radio").each(function() {
        var name = $(this).attr("name");
        if ($("input:radio[name=" + name + "]:checked").length == 0) {
          complete = false;
        }
      });
      return complete;
    }

    // If all required fields are filled
    if (formComplete() == true) {
      // Create an object for the user's data
      var newFriend = {
          name: $("#name").val().trim(),
          sex: $("input:radio[name ='sex']:checked").val(),
          scores: [
            $("input:radio[name ='Q1']:checked").val(),
            $("input:radio[name ='Q2']:checked").val(),
            $("input:radio[name ='Q3']:checked").val(),
            $("input:radio[name ='Q4']:checked").val(),
            $("input:radio[name ='Q5']:checked").val(),
            $("input:radio[name ='Q6']:checked").val(),
            $("input:radio[name ='Q7']:checked").val(),
            $("input:radio[name ='Q8']:checked").val(),
            $("input:radio[name ='Q9']:checked").val(),
            $("input:radio[name ='Q10']:checked").val(),
          ]
        }
      console.log(newFriend);
      // Grab the URL of the website
      var currentURL = window.location.origin;

      // AJAX post the data to the friends API.
      $.post(currentURL + "/api/friends", newFriend, function(data) {
        console.log(data);
        console.log(data[1].name)

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#matchingName").html('Best Match' + data[1].name);
        // $('#matchImg').attr("src", data.photo);

        // Show the modal with the best match
        $("#myModal").modal('toggle');
      });
    } else {
      $('#incompleteMessage').html("Please fill out all fields before submitting!").toggle();
    }
    return false;
  }); //on click end
}); //document ready end

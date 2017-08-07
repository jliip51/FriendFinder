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

    if (formComplete() == true) {
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

      $("#name").val('');
      $("input:radio").prop('checked', false);

      var currentURL = window.location.origin;

      $.post(currentURL + "/api/friends", newFriend, function(data) {

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#matchingName").html('Best Match: ' + data.name + ' Sex: ' + data.sex);

        $("#myModal").modal('toggle');
      });
    } else {
      $('#incompleteMessage').html("Please fill out all fields before submitting!").toggle();
    }
    return false;
  }); //on click end
}); //document ready end

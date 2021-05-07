
$(document).ready(function() {
 
  $("#form1").submit(function(event) {
    let answer = $("#answer").val();
  if (answer === "5") {
    $("#congrats").show();
    $("#help").hide();
    $("#story").hide();
    $("#answer").hide();
    $("#submit").hide();
  } else {
    $("#sorry").show()
    $("#help").hide();
    $("#story").hide();
    $("#answer").hide();
    $("#submit").hide();
  }
  event.preventDefault();
  })
});
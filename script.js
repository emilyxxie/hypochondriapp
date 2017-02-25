$( document ).ready( function() {

  var input = $();
  $('.symptoms_form').submit(function() {
    console.log("HELLO");
    var symptoms_input = $("input").val();
    var symptoms_array = symptoms_input.split(",");
    for (var i = 0; i < symptoms_array.length(); i++) {

    }

    console.log(symptoms_array);
  });

});
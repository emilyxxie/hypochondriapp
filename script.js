$( document ).ready( function() {

  var input = $();
  $('.symptoms_form').submit(function() {
    console.log("HELLO");
    var symptoms_input = $("input").val();
    var symptoms_array = symptoms_input.split(",");
    for (var i = 0; i < symptoms_array.length; i++) {
      symptoms_array[i] = symptoms_array[i].trim().toLowerCase();
      // TODO: get rid of last comma, and empty string
    }

    var diseases_hash = {};
    for (var disease in diseases) {
      var disease_symptoms = diseases[disease]['symptoms'];
      // for (var i = 0; i < disease_symptoms.length; i ++) {
      disease_symptoms.forEach(function(disease_symptom) {
        symptoms_array.forEach(function(user_symptom) {
          if (disease_symptom.trim().toLowerCase() == user_symptom) {
            if (disease in diseases_hash) {
              diseases_hash[disease]['count'] += 1;
            } else {
              diseases_hash[disease] = {'count': 1};
            }
          }
        });
      });
    }


    console.log(diseases_hash);
  });

});
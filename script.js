$( document ).ready( function() {

  $( ".info-body" ).hide();

  var interstitialWait = 1500;
  var interstitialMedium = 900;
  var interstitialLong = 4000;
  var interstitialFast = 550;

  var interstitialMedium = 1;
  var interstitialLong = 1;
  var interstitialFast = 1;
  var interstitialWait = 1;

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function makeSleep() {
    await sleep(2000);
  }

  async function noDiseases() {
    await sleep(500);
    $('.interstitial h1').get.text("Analyzing your symptoms...");
    $('.interstitial h1').fadeIn(100);
    await sleep(interstitialWait);
    $('.interstitial h1').text("Checking our databases...");
    await sleep(interstitialWait);
    $('.interstitial h1').text("Searching for possible diagnoses...");
    await sleep(interstitialWait);
    $('.interstitial h1').text("Sorry, no diseases match your symptoms.");
  }

  async function diagnose(disease, disease_info) {
    await sleep(500);
    $('.interstitial h1').text("Analyzing your symptoms...");
    await sleep(interstitialWait);
    $('.interstitial h1').text("Checking our databases...");
    await sleep(interstitialWait);
    $('.interstitial h1').text("Searching for possible diagnoses...");
    await sleep(interstitialWait);
    $('.interstitial h1').text("Hmmmm.");
    await sleep(interstitialWait);
    $('.interstitial h1').text("This isn't looking good.");
    await sleep(interstitialWait);
    $('.interstitial h1').text("...");
    await sleep(interstitialWait);
    // // TODO: vary the screen message.
    $('.interstitial h1').css("font-size", "7em");
    $('.interstitial h1').text("OH");
    await sleep(interstitialFast);
    $('.interstitial h1').text("MY");
    await sleep(interstitialFast);
    $('.interstitial h1').text("GOD.");
    await sleep(interstitialFast);
    $('.interstitial h1').text("YOU");
    await sleep(interstitialFast);
    $('.interstitial h1').text("COULD");
    await sleep(interstitialFast);
    $('.interstitial h1').text("HAVE");
    await sleep(interstitialFast);
    $('.interstitial h1').css("font-size", "2.5em");

    var long_word = false;
    disease.split(" ").forEach(function(word) {
      if (word.length > 22) {
        $('.interstitial h1').css("hyphens", "auto");
      } else {
        $('.interstitial h1').css("hyphens", "manual");
      }
    });
    $('.interstitial h1').css("font-weight", "800");
    $('.interstitial h1').css("color", "rgb(187, 21, 21)");
    $('.interstitial h1').text(disease.toUpperCase());


    await sleep(interstitialLong);
    // await sleep(1400);
    $('.interstitial h1').fadeOut(400);
    await sleep(400);
    $('.main_body').hide();
    await sleep(400);
    $(".disease_name").text(disease);
    $(".disease_description").text(disease_info['summary']);

    $(".disease_symptoms").text(disease_info['all_symptoms'].join(", "));
    $(".disease_matching_symptoms").text(disease_info['symptoms'].join(", "));
    $(".read_more").click(function() {
      window.location.href = disease_info['url'];
    });

    $( ".info-body" ).show();
  }

  $('.symptoms_button').click(function() {
    var symptoms_input = $("input").val();
    if (symptoms_input == "") {
      return;
    }
    var symptoms_array = symptoms_input.split(",");
    for (var i = 0; i < symptoms_array.length; i++) {
      symptoms_array[i] = symptoms_array[i].trim().toLowerCase();
    }

    // TODO: if the disease summary has the words "fatal" in it, add more points to "count"
    var diseases_hash = {};
    for (var disease in diseases) {
      var disease_symptoms = diseases[disease]['symptoms'];
      disease_symptoms.forEach(function(disease_symptom) {
        symptoms_array.forEach(function(user_symptom) {
          if (disease_symptom.trim().toLowerCase() == user_symptom) {
            if (disease in diseases_hash) {
              diseases_hash[disease]['count'] += 1;
              diseases_hash[disease]['symptoms'].push(user_symptom);
              // TODO: display the symptoms matched
            } else {
              diseases_hash[disease] = {'count': 1};
              diseases_hash[disease]['symptoms'] = [user_symptom];
              diseases_hash[disease]['summary'] = diseases[disease]['summary'];
              diseases_hash[disease]['url'] = diseases[disease]['url'];
              diseases_hash[disease]['all_symptoms'] = diseases[disease]['symptoms'];
            }
          }
        });
      });
    }

    $('.tag_line').fadeOut(300);
    $('.symptoms_input').fadeOut(300);
    if (Object.keys(diseases_hash).length == 0) {
      noDiseases();
    } else {
      // var symptoms_matched = 0;
      // var consideration_pool = [];
      // for (disease in diseases_hash) {
      //   if diseases_hash[disease] > symptoms_matched
      // }
      // // var diagnosis;
      // // for (var disease in diseases_hash) {
      // //   if (disease)
      // // }
      // debugger;
      // diagnose(disease);

      // TODO: make algorithm weigh total number of symptoms too.
      console.log(diseases_hash);
      var diseases_by_symptoms = Object.keys(diseases_hash).sort(function(a,b){
        return diseases_hash[b]['count'] - diseases_hash[a]['count'];
      });

      var diseases_by_name = Object.keys(diseases_hash).sort(function(a,b){
        return b.length - a.length;
      });

      // get top three longest names
      var selection = diseases_by_name.splice(0, 3);
      var final_disease = selection[Math.floor(Math.random()*selection.length)];

      diagnose(final_disease, diseases_hash[final_disease]);



      // if none of the diseases are longer than a given number, then pick the most symptoms matched


      // diagnose("Mitochondrial neurogastrointestinal encephalopathy syndrome");
      // diagnose("Naegeli–Franceschetti–Jadassohn syndrome");
    }

  });


  $('.flexdatalist').flexdatalist({
       selectionRequired: 1,
       minLength: 1,
       data: ['data', 'dime']
  });



});



    // var availableSymptoms = {};

  // symptoms['symptoms'].forEach(function(symptom) {
  //   for (var disease in diseases) {
  //     diseases[disease]['symptoms'].forEach(function(disease_symptom){
  //       if (symptom == disease_symptom) {
  //         if (!(symptom in availableSymptoms)) {
  //           availableSymptoms[symptom] = disease;
  //         }
  //       }
  //     });
  //   }
  // });
  // availableSymptoms = Object.keys(availableSymptoms);
  // availableSymptoms.forEach(function(symptom){
  //   console.log('<option value="' + symptom + '">' + symptom + "</option>");
  // })

$( document ).ready( function() {

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

  async function diagnose(disease) {
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


    // await sleep(interstitialLong);
    // $('.interstitial h1').fadeOut();
    // await sleep(interstitialFast);
    // // $('.symptoms_form').remove();
    // // showDiagnosisInfo(disease);
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
              diseases_hash[disease]['all_symptoms'] = diseases[disease]['all_symptoms'];
            }
          }
        });
      });
    }

    $('.tag_line').fadeOut(300);
    $('.symptoms_input').fadeOut(300);
    // $('flexdatalist-multiple').remove();
    // $('.symptoms_input_box').fadeOut(300);
    // $('.symptoms_button').fadeOut(300);
    // $('.flexlist_data_multiple').fadeOut(300);
    // console.log(diseases_hash);
    if (Object.keys(diseases_hash).length == 0) {
      noDiseases();
    } else {
      // var diagnosis;
      // for (var disease in diseases_hash) {
      //   if (disease)
      // }
      if ()
      diagnose(disease);
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








  // function showDiagnosisInfo(disease) {
  //   $('.col-md-10').append('<div class="col-md-1"></div><div class="col-md-10"><div class="col-md-3 diagnosis_header"><p class="name">'
  //     + disease +
  //     'DISEASE NAME</p></div><div class="col-md-7 diagnosis_info"><p class="info">DISEASE INFO</p></div><div class="col-md-3 diagnosis_header"><p class="name">'
  //     + "HELLOW"
  //     + 'DESCRIPTION</p></div><div class="col-md-7 diagnosis_info"><p class="info">'
  //     + "ENTER SUMMARY HERE"
  //     + '</p></div><div class="col-md-3 diagnosis_header"><p class="name">SYMPTOMS'
  //     + '</p></div><div class="col-md-7 diagnosis_info"><p class="info">'
  //     + 'List of symptoms'
  //     + '</p></div><div class="col-md-3 diagnosis_header"><p class="name">'
  //     +
  //         YOUR MATCHING SYMPTOMS
  //       </p>
  //     </div>
  //     <div class="col-md-7 diagnosis_info">
  //       <p class="info">Fever, Headache, Nausea</p>
  //     </div>

  //     <div class="col-md-10 diagnosis_info">
  //       <p class="disclaimer">*DISCLAIMER: This is a joke app. You likely don\'t have this rare disease. If you are truly concerned, please see a doctor.</p>
  //     </div>'
  // }

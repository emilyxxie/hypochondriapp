$( document ).ready( function() {

  $( ".info-body" ).hide();

  var interstitialWait = 1700;
  var interstitialMedium = 900;
  var interstitialLong = 4000;
  var interstitialFast = 550;

  // var interstitialWait = 1;
  // var interstitialMedium = 1;
  // var interstitialLong = 1;
  // var interstitialFast = 1;


  // function sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }


  function delay(fn, t) {
    // private instance variables
    var queue = [], self, timer;

    function schedule(fn, t) {
        timer = setTimeout(function() {
            timer = null;
            fn();
            if (queue.length) {
                var item = queue.shift();
                schedule(item.fn, item.t);
            }
        }, t);
    }
    self = {
        delay: function(fn, t) {
            // if already queuing things or running a timer,
            //   then just add to the queue
            if (queue.length || timer) {
                queue.push({fn: fn, t: t});
            } else {
                // no queue or timer yet, so schedule the timer
                schedule(fn, t);
            }
            return self;
        },
        cancel: function() {
            clearTimeout(timer);
            queue = [];
        }
    };
    return self.delay(fn, t);
  }




  // async function makeSleep() {
  //   await sleep(2000);
  // }

  // async function noDiseases() {
  //   await sleep(500);
  //   $('.interstitial h1').get.text("Analyzing your symptoms...");
  //   $('.interstitial h1').fadeIn(100);
  //   await sleep(interstitialWait);
  //   $('.interstitial h1').text("Checking our databases...");
  //   await sleep(interstitialWait);
  //   $('.interstitial h1').text("Searching for possible diagnoses...");
  //   await sleep(interstitialWait);
  //   $('.interstitial h1').text("Sorry, no diseases match your symptoms.");
  // }

  // function analyze_symptoms(disease, disease_info) {
  //   setTimeout(, interstitialWait);
  // }

  // function check_databases(disease, disease_info) {

  // }

  // function check_databases(disease, disease_info) {

  // }

  // function check_databases(disease, disease_info) {

  // }


  // function check_databases(disease, disease_info) {

  // }


  // function check_databases(disease, disease_info) {

  // }

  // function set_text(text, disease, disease_info) {
  //   var next = text.shift();
  //   $('.interstitial h1').text(next[0]);
  //   console.log(next);
  //   if (text.length > 0) {
  //     console.log("HERE");
  //     setTimeout(set_text(text, disease, disease_info), next[1]);
  //   }
  // }

  function analyze_symptoms() {
    $('.interstitial h1').text("Analyzing your symptoms...");
  }

  function check_databases() {
    $('.interstitial h1').text("Checking our databases...");
  }

  function search_diagnoses() {
    $('.interstitial h1').text("Searching for possible diagnoses...");
  }

  function hmmm() {
    $('.interstitial h1').text("Hmmm.");
  }

  function looks_bad() {
    $('.interstitial h1').text("This isn't looking good.");
  }

  function diagnose(text, disease, disease_info) {
    // var text = [
    //   ["Analyzing your symptoms", interstitialWait],
    //   ["Checking our databases...", interstitialWait],
    //   ["Searching for possible diagnoses...", interstitialWait]
    // ];
    // // setTimeout(analyze_symptoms(disease, disease_info), interstitialWait);
    // set_text(text, disease, disease_info);
    delay(analyze_symptoms, 500)
    .delay(check_databases, interstitialWait)
    .delay(search_diagnoses, interstitialWait)
    .delay(hmmm, interstitialWait)
    .delay(looks_bad, interstitialWait);



    /* This needs refactor :-D */
    // setTimeout(function() {
    //   $('.interstitial h1').text("Analyzing your symptoms...");
    //   setTimeout(function() {
    //     $('.interstitial h1').text("Checking our databases...");
    //     setTimeout(function() {
    //       $('.interstitial h1').text("Searching for possible diagnoses...");
    //       setTimeout(function() {
    //         $('.interstitial h1').text("Hmmm.");
    //         setTimeout(function() {
    //           $('.interstitial h1').text("This isn't looking good.");
    //           setTimeout(function() {
    //             $('.interstitial h1').text("...");
    //             setTimeout(function() {
    //               $('.interstitial h1').css("font-size", "7em");
    //               $('.interstitial h1').text("OH");
    //               setTimeout(function() {
    //                 $('.interstitial h1').text("MY");
    //                 setTimeout(function() {
    //                   $('.interstitial h1').text("GOD.");
    //                   setTimeout(function() {
    //                     $('.interstitial h1').text("YOU");
    //                     setTimeout(function() {
    //                       $('.interstitial h1').text("COULD");
    //                       setTimeout(function() {
    //                         $('.interstitial h1').text("COULD");

    //                     }, interstitialFast);
    //                   }, interstitialFast);
    //                 }, interstitialFast);
    //               }, interstitialFast);
    //             }, interstitialWait);
    //           }, interstitialWait);
    //         }, interstitialWait);
    //       }, interstitialWait);
    //     }, interstitialWait);
    //   }, interstitialWait);
    // }, 500);



    // $('.interstitial h1').text("Analyzing your symptoms").afterTime(interstitialWait, function() {
    //   $(this).text("Checking our databases...");
    //   $(this).afterTime(interstitialWait, function() {
    //     $(this).text("Searching for possible diagnoses...");
    //     $(this).afterTime(interstitialWait, function() {
    //       $(this).text("Hmmm.");
    //     });
    //   });
    // });




    // await sleep(500);
    // $('.interstitial h1').text("Analyzing your symptoms...");
    // await sleep(interstitialWait);
    // $('.interstitial h1').text("Checking our databases...");
    // await sleep(interstitialWait);
    // $('.interstitial h1').text("Searching for possible diagnoses...");
    // await sleep(interstitialWait);
    // $('.interstitial h1').text("Hmmmm.");
    // await sleep(interstitialWait);
    // $('.interstitial h1').text("This isn't looking good.");
    // await sleep(interstitialWait);
    // $('.interstitial h1').text("...");
    // await sleep(interstitialWait);
    // // // TODO: vary the screen message.
    // $('.interstitial h1').css("font-size", "7em");
    // $('.interstitial h1').text("OH");
    // await sleep(interstitialFast);
    // $('.interstitial h1').text("MY");
    // await sleep(interstitialFast);
    // $('.interstitial h1').text("GOD.");
    // await sleep(interstitialFast);
    // $('.interstitial h1').text("YOU");
    // await sleep(interstitialFast);
    // $('.interstitial h1').text("COULD");
    // await sleep(interstitialFast);
    // $('.interstitial h1').text("HAVE");
    // await sleep(interstitialFast);
    // $('.interstitial h1').css("font-size", "2.5em");

    // var long_word = false;
    // disease.split(" ").forEach(function(word) {
    //   if (word.length > 22) {
    //     $('.interstitial h1').css("hyphens", "auto");
    //   } else {
    //     $('.interstitial h1').css("hyphens", "manual");
    //   }
    // });
    // $('.interstitial h1').css("font-weight", "800");
    // $('.interstitial h1').css("color", "rgb(187, 21, 21)");
    // $('.interstitial h1').text(disease.toUpperCase());


    // await sleep(interstitialLong);
    // // await sleep(1400);
    // $('.interstitial h1').fadeOut(400);
    // await sleep(400);
    // $('.main_body').hide();
    // await sleep(400);
    // $(".disease_name").text(disease);
    // $(".disease_description").text(disease_info['summary']);

    // $(".disease_symptoms").text(disease_info['all_symptoms'].join(", "));
    // $(".disease_matching_symptoms").text(disease_info['symptoms'].join(", "));
    // $(".read_more").click(function() {
    //   window.location.href = disease_info['url'];
    // });

    // $( ".info-body" ).show();
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

      // TODO: make algorithm weigh total number of symptoms too.

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

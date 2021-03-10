//https://learn.co/lessons/js-looping-and-iteration-traversing-nested-objects-readme






// -------------- functions Timer -------------- //



 // return char count in a string
 
// =================== Application Logic ================== //

function buildQuiz() {

  // Add h3 element and append next question
  $("<h3></h3>").appendTo("#question");
//   $("h3").append(burger[arrayIndex].question);
console.log('Testing ')
  for (let i = 0; i <= burgerArray.length; i++) {
    $(`<li id='${i}' class='active-slide'></li>`).appendTo("#answers");
      $(`<button class='${i} btn btn-primary btn-lg btn-block' id='${i}'></button>`).appendTo(`#${i}`)
      $(`.${i}`).append(burgerArray[arrayIndex])

    } 
   

    $("#answers").css({
      'list-style-type': 'upper-alpha',
      'color': 'white',
      'font-size': '2rem'
    })
    $("#answers").css({

      'color': 'white',
      'font-size': '2rem'
    })

    $("#question").css({
      'border': '1px',
      'border-radius': '3px',
      'margin': '20px',
      'backgroundColor': 'rgb(3, 29, 68)',
      'color': 'white',
      'padding': '10px'
    })

    $("button").css('margin', '5px');
    $("button").css('text-align', 'left');
  }

  buildQuiz();


// Delayed scrolling to different sections of the page
// modified from https://bootsnipp.com/snippets/6Xg2d 

$(document).ready(function(){
 let scroll_link = $('.scroll');

  //smooth scrolling -----------------------
  scroll_link.click(function(e){
      e.preventDefault();
      let url = $('body').find($(this).attr('href')).offset().top;
      $('html, body').animate({
        scrollTop : url
      },1700);
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
      return false;
   });
});

//  quiz from       to run in modal

/** <quiz script> **/
var quiztitle = "PostSecret English Quiz";
/**
* Set the information about your questions here. The correct answer string needs to match
* the correct choice exactly, as it does string matching. (case sensitive)
*
*/
/**
*Let's create the randomization of the questions!
*/
function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;
// While there remain elements to shuffle...
while (0 !== currentIndex) {
// Pick a remaining element...
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex -= 1;
// And swap it with the current element.
temporaryValue = array[currentIndex];
array[currentIndex] = array[randomIndex];
array[randomIndex] = temporaryValue;
}
return array;
}

if (!("scramble" in Array.prototype)) {
Object.defineProperty(Array.prototype, "scramble", {
enumerable: false,
value: function() {
  var o, i, ln = this.length;
  while (ln--) {
    i = Math.random() * (ln + 1) | 0;
    o = this[ln];
    this[ln] = this[i];
    this[i] = o;
  }
  return this;
}
});
}

var quiz = [
    {
        "question"      :   "Question: A secret can be 'soulful' another word for soulful is?",
        "image"         :   "assets/images/soulful.png ",
        "choices"       :   [
                                "religious",
                                "emotional",
                                "painful",
                                "footsore"
                            ],
        "correct"       :   "emotional",
        "explanation"   :   "soulful means emotional or strongly felt",
    },
    {
        "question"      :   "Question: The person who sent the stamps often feels?",
        "image"         :   "assets/images/stamps.png",
        "choices"       :   [
                                "happy",
                                "warm",
                                "proud",
                                "lonely"
                            ],
        "correct"       :   "lonely",
        "explanation"   :   "lonely; they never felt they had someone to share the stamps with until now",
    },
    {
        "question"      :   "Question: Why does the Starbucks worker give some customers decaf?",
        "image"         :   "assets/images/decaff.png",
        "choices"       :   [
                                "to get even",
                                "it's healthier",
                                "it's all they have",
                                "it's what the customer wants"
                            ],
        "correct"       :   "to get even",
        "explanation"   :   "the customer was rude to them so they get revenge (get even) by giving them a coffee without caffeine",
    },
    {
        "question"      :   "Question: What message does the child want to give to their birthmother?",
        "image"         :   "assets/images/birthmother.png",
        "choices"       :   [
                                "that they want her to look for them",
                                "not to worry about them",
                                "that they miss her",
                                "to have a Happy Mother's Day"
                            ],
        "correct"       :   "not to worry about them",
        "explanation"   :   "the birthmother need not worry about her child as they are happy and loved by their new family",
    },
    {
        "question"      :   "Question: Why was the birthday message so special?",
        "image"         :   "assets/images/voicemails.png",
        "choices"       :   [
                                "it was their 18th birthday",
                                "it was from a celebrity",
                                "it was the last message ever from the lady",
                                "it was from their best friend"
                            ],
        "correct"       :   "it was the last message ever from the lady",
        "explanation"   :   "the postcard about saving messages in case people die led many people to share their own secret of keeping voicemails from friends or relatives who had died",
    },
];
//use this for IE syntax error at => : ECMA script 6 not supported in IE 11 :(
//quiz.forEach(function(q){ return q.choices.scramble()});
//use this for ECMA script 6
quiz.forEach(q => q.choices.scramble());
//console.log(quiz[0].choices);

quiz = shuffle(quiz);

/******* No need to edit below this line *********/
var currentquestion = 0, score = 0, submt=true, picked;
jQuery(document).ready(function($){
    /**
     * HTML Encoding function for alt tags and attributes to prevent messy
     * data appearing inside tag attributes.
     */
    function htmlEncode(value){
      return $(document.createElement('div')).text(value).html();
    }
    /**
     * This will add the individual choices for each question to the ul#choice-block1
     *
     * @param {choices} array The choices from each question
     */
function addChoices(choices){
  if(typeof choices !== "undefined" && $.type(choices) == "array"){
    $('#choice-block').empty();
    for(var i=0;i<choices.length; i++){
    $(document.createElement('li')).addClass('choice choice-box btn').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
    }
  }
}

    /**
     * Resets all of the fields to prepare for next question
     */
function nextQuestion(){
  submt = true;
  $('#explanation').empty();
  $('#question').text(quiz[currentquestion]['question']);
  $('#pager').text('question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
  if(quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != ""){
    if($('#question-image').length == 0){
      $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
    } else {
      $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
    }
  } else {
    $('#question-image').remove();
  }
  addChoices(quiz[currentquestion]['choices']);
  setupButtons();

  jQuery(document).ready(function($){
    $("#question").html(function(){
      var text= $(this).text().trim().split(" ");
      var first = text.shift();
      return (text.length > 0 ? "<span class='number'>"+ first +"</span> " : first) + text.join(" ");
    });

    $('p.pager').each(function(){
      var text = $(this).text().split(' ');
      if(text.length < 2)
        return;

      text[1] = '<span class="qnumber">'+text[1]+'</span>';
      $(this).html(
        text.join(' ')
      );
    });

  });

    }
    /**
     * After a selection is submitted, checks if its the right answer
     *
     * @param {choice} number The li zero-based index of the choice picked
     */
    function processQuestion(choice){
        if(quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']){
    $('.choice').eq(choice).addClass('btn-success').css({'font-weight':'bold', 'border-color':'#51a351', 'color':'#fff'});
    $('#explanation').html('<span class="correct">CORRECT!</span> ' + htmlEncode(quiz[currentquestion]['explanation']));
    score++;
  } else {
            $('.choice').eq(choice).addClass('btn-danger').css({'font-weight':'bold', 'border-color':'#f93939', 'color':'#fff'});
            $('#explanation').html('<span class="incorrect">INCORRECT!</span> ' + htmlEncode(quiz[currentquestion]['explanation']));
        }
        currentquestion++;
  if(currentquestion == quiz.length){
    $('#submitbutton').html('GET QUIZ RESULTS').removeClass('btn-success').addClass('btn-info').css({'border-color':'#3a87ad', 'color':'#fff'}).on('click', function(){
      $(this).text('GET QUIZ RESULTS').on('click');
      endQuiz();
    })

  } else if (currentquestion < quiz.length){
    $('#submitbutton').html('NEXT QUESTION &raquo;').removeClass('btn-success').addClass('btn-warning').css({'font-weight':'bold', 'border-color':'#faa732', 'color':'#fff'}).on('click', function(){
      $(this).text('- CHECK ANSWER -').removeClass('btn-warning').addClass('btn-success').css({'font-weight':'bold', 'border-color':'#51a351', 'color':'#fff'}).on('click');
      nextQuestion();
    })
  } else {
    //	$('#submitbutton').html('NEXT QUESTION &raquo;').on('click', function(){
    //		$(this).text('- CHECK ANSWER -').css({'color':'inherit'}).on('click');
    //	})
  }

}
    /**
     * Sets up the event listeners for each button.
     */
function setupButtons(){
  $('.choice').on('click', function(){
    picked = $(this).attr('data-index');
    $('.choice').removeAttr('style').off('mouseout mouseover');
    $(this).css({'font-weight':'bold', 'border-color':'#51a351', 'color':'#51a351'});
    if(submt){
      submt=false;
      $('#submitbutton').css({'color':'#fff','cursor':'pointer'}).on('click', function(){
        $('.choice').off('click');
        $(this).off('click');
        processQuestion(picked);
      });
    }
  })
}

    /**
     * Quiz ends, display a message.
     */
function endQuiz(){
  var endQuestions = "End of Quiz!";
  document.getElementById("pager").innerHTML = endQuestions;
  $('#explanation').empty();
  $('#question').empty();
  $('#choice-block').empty();
  $('#submitbutton').remove();
  $('.rsform-block-submit').addClass('show');
  $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
  $(document.createElement('h4')).addClass('score').text(Math.round(score/quiz.length * 100) + '%').insertAfter('#question');
}
    /**
     * Runs the first time and creates all of the elements for the quiz
     */
function init(){
  //add title
  if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
    $(document.createElement('h2')).addClass('text-capitalize').text(quiztitle).appendTo('#frame1');
  } else {
    $(document.createElement('h2')).addClass('text-capitalize').text("Quiz").appendTo('#frame1');
  }

  //add pager and questions
  if(typeof quiz !== "undefined" && $.type(quiz) === "array"){
    //add pager
    $(document.createElement('p')).addClass('pager').attr('id','pager').text('Question 1 of ' + quiz.length).appendTo('#frame1');
    //add first question
    $(document.createElement('h3')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame1');
    //add image if present
    if(quiz[0].hasOwnProperty('image') && quiz[0]['image'] != ""){
      $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame1');
    }

    $(document.createElement('p')).addClass('explanation').attr('id','explanation').html('').appendTo('#frame1');

    //questions holder
    $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame1');

    //add choices
    addChoices(quiz[0]['choices']);

    //add submit button
    $(document.createElement('div')).addClass('btn-success choice-box').attr('id', 'submitbutton').text('- CHECK ANSWER -').css({'font-weight':'bold', 'color':'#fff','padding':'30px 0', 'border-radius':'10px'}).appendTo('#frame1');

    setupButtons();
  }
}

init();

});

jQuery(document).ready(function($){
$("#question").html(function(){
var text= $(this).text().trim().split(" ");
var first = text.shift();
  return (text.length > 0 ? "<span class='number'>"+ first +"</span> " : first) + text.join(" ");
});

$('p.pager').each(function(){
  var text = $(this).text().split(' ');
  if(text.length < 2)
    return;

  text[1] = '<span class="qnumber">'+text[1]+'</span>';
  $(this).html(
    text.join(' ')
  );
});
});
function copyText() {
  var output = document.getElementById("frame1").innerHTML;
  document.getElementById("placecontent").value = output;
}

/** </ quiz script end> **/

var question1 = prompt ("Which countries make up Great Britain?");
if ( question1 === "England, Scotland and Wales" ) {
  var correct = 1;
} else {
  var correct = 0;
}
var question2 = prompt ("Which tribal leader fought against the Roman conquest of Britain");
  if ( question2 === "Boudicca" ) {
    var correct = correct + 1;
  } else {
    var correct = correct + 0;
  }
var question3 = prompt ("Which king defeated the Vikings at the end of the 9th century?");
  if ( question3 === "King Alfred the Great" ) {
    var correct = correct + 1;
  } else {
    var correct = correct + 0;
  }
var question4 = prompt ("When did the English first impose English laws on Wales and the Welsh?");
  if ( question4 === "The first half of the 16th century" ) {
    var correct =  correct + 1;
  } else {
    var correct = correct + 0;
  }
var question5 = prompt ("Which famous document eventually led to the formation of Parliament in England?");
  if ( question5 === "The Magna Carta" ) {
    var correct = correct + 1;
  } else {
    var correct = correct + 0;
  }

var finalMessage = alert ("Final message quiz. You got " + correct + " questions correct");

if ( correct === 2) {
  alert ("You have gained a bronze badge");
} else if ( correct === 3 || correct === 4 ) {
  alert ("You have gained a silver badge");
} else if (  correct === 5 ) {
  alert ("You have gained a gold badge");
} else {
  alert ("You have gained no badge");
}

/* Another way

//Quiz begins, no answers correct
var correct = 0;

//Ask questions
var answer1 = prompt ("Name a programming language that's also a gem");
  if ( answer1.toUpperCase() === 'RUBY' ) {
  correct += 1;
}
var answer2 = prompt ("Name a programming language that's also a snake");
  if ( answer2.toUpperCase() === 'PYTHON' ) {
    correct += 1;
}
var answer3 = prompt ("What language do you use to style web pages?");
  if ( answer3.toUpperCase() === "CSS" ) {
    correct += 1;
}
var answer4 = prompt ("What language do you use to build the structure of the web?");
  if ( answer4.toUpperCase() === "HTML" ) {
    correct += 1;
}
var answer5 = prompt ("What language do you use to add interactivity to a web page?");
  if ( answer5.toUpperCase() === "JAVASCRIPT" ) {
    correct += 1;
}

//Output results
document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

//Output rank
if ( correct === 5) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if ( correct >= 3 ) {
  document.write("<p><strong>You earned a silver crown!</strong></p>");
} else if ( correct >= 1 ) {
  document.write("<p><strong>You earned a bronze crown!</strong></p>");
} else {
  document.write("<p><strong>No crown for you. You need to study!</strong></p>");
}

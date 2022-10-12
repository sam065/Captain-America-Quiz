var readlineSync = require("readline-sync");

// initialising score to 0
var score = 0;

// highScores database
var highScores = [
  {
    name: "Bunty",
    score: 1,
  },

  {
    name: "Monty",
    score: 2,
  },
  {
    name: "Shonty",
    score: 4,
  },
  {
    name: "Tonty",
    score: 5,
  }
]

// array of objects containing questions and answers
var questions = [{
  question: "What is Captain America's weapon? a. Knife b. Shield ",
  answer: "b"
}, {
  question: "What is the weapon made of? a. Vibranium b.Granite ",
  answer: "a"
},
{
  question: "Who made it for Captain? a. Howard Stark b.Hawkeye",
  answer: "a"
},
{
  question: "What connection does the maker have with Tony Stark? a. Mother b. Father ",
  answer: "b"
},
{
  question: "How old is Captain America? a. 90 b. 80",
  answer: "b"
}];


// taking input then displaying it
function greetings() {
  var playerName = readlineSync.question("Welcome to Captain America quiz. May I know your name? ");

  console.log("Welcome " + playerName + "! Let's play this fun game to see if you know the Captain.");
}

function play(question, answer) {
  // question is displayed to the user and demands an input
  var userAnswer = readlineSync.question(question);

  // if answers match : increment score
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(" Correct ");
    score = score + 1;
    
  // else : decrement score
  } else {
    console.log(" Wrong ");

  }

  console.log("current score: ", score);
  console.log("- - - - - - - - ")
}

// playing the quiz
function game() {
  // traversing over the questions database : it is an array of objects
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    // passing the current question and answer to another function
    play(currentQuestion.question, currentQuestion.answer)
  }
}

// for displaying the final scores
function displayScores() {
  console.log("You SCORED: ", score);
  console.log("The maximum possible score was 5");

  
  console.log("Score History : ");

  // traversing over highScores database and displaying them all
  highScores.map(score => console.log(score.name, " --> ", score.score))
}


greetings(); // calling the function to display welcome message
game(); // calling the function to start the game 
displayScores(); // calling the function to display final scores
var executeButton;
var executeButtonThree;
var executeButtonFour;
var outputTextOne;
var outputTextTwo;
var outputTextThree;
var outputTextFour;
var inputElement;
var inputElementTwo;

var fit = ["style on point", "looking good", "great choice", "love the fit"]

var quizContainer;
var resultsContainer;
var executeButtonTwo;


window.addEventListener('DOMContentLoaded', function() {

  executeButton = document.getElementById("reflection");
  outputTextOne = document.getElementById("outputTextOne");
  inputElement = document.getElementById("reflectionInput");

  quizContainer = document.getElementById('quiz1');
  resultsContainer = document.getElementById('outputTextTwo');
  executeButtonTwo = document.getElementById('submit1');

  executeButtonThree = document.getElementById("reflectionTwo");
  outputTextThree = document.getElementById("outputTextThree");
  inputElementTwo = document.getElementById("reflectionInputTwo");

  outputTextFour = document.getElementById("outputTextFour");
  executeButtonFour = document.getElementById('reflectionThree');

  executeButton.addEventListener("click", feelingFunction);
  buildQuiz();
  executeButtonTwo.addEventListener("click", showResults);
  executeButtonThree.addEventListener("click", fitFunction);
  executeButtonFour.addEventListener("click", favFunction);

});


function feelingFunction () {

  var inputFeeling = inputElement.value;
  console.log(inputFeeling);

  var finalOutputOne = "you've been " + inputFeeling + " for 5 days out of the past week";

  outputTextOne.innerHTML = finalOutputOne;

}


var quizOne = [
  {
    question: "I feel comfortable in new situations.",
    answers: {
      a: "Agree",
      b: "Neutral",
      c: "Disagree"
    },
    correctAnswer: "a"
  },
  {
    question: "After a long week, a lively social event is just what I need.",
    answers: {
      a: "Agree",
      b: "Neutral",
      c: "Disagree"
    },
    correctAnswer: "a"
  },
  {
    question: "I regularly make new friends.",
    answers: {
      a: "Agree",
      b: "Neutral",
      c: "Disagree"
    },
    correctAnswer: "a"
  },
  {
    question: "I feel comfortable walking up to anyone and starting a conversation.",
    answers: {
      a: "Agree",
      b: "Neutral",
      c: "Disagree"
    },
    correctAnswer: "a"
  },
];


function buildQuiz() {

  var output = [];

  quizOne.forEach(
    (currentQuestion, questionNumber) => {

      var answers = [];

      for(letter in currentQuestion.answers){

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
}


function showResults() {

  var answerContainers = quizContainer.querySelectorAll('.answers');

  var numCorrect = 0;

  // for each question...
  quizOne.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    var answerContainer = answerContainers[questionNumber];
    var selector = `input[name=question${questionNumber}]:checked`;
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
    };

    if(numCorrect === 4) {
      resultsContainer.innerHTML = "i am an extrovert!";
    };

    if(numCorrect === 3) {
      resultsContainer.innerHTML = "i am an extrovert!";
    };

    if(numCorrect === 2) {
      resultsContainer.innerHTML = "i am an ambivert!";
    };

    if(numCorrect === 1) {
      resultsContainer.innerHTML = "i am an ambivert!";
    };

    if(numCorrect === 0) {
      resultsContainer.innerHTML = "i am an introvert!";
    };

  });
}


function fitFunction () {

  var inputFit = inputElementTwo.value;
  console.log(inputFit);

  var randomFitIndex = Math.floor(Math.random() * fit.length);
  var selectedFit = fit[randomFitIndex];

  var finalOutputThree = selectedFit + "!";

  outputTextThree.innerHTML = finalOutputThree;

}


function favFunction () {

  var finalOutputFour = "one step closer to true reflection!";

  outputTextFour.innerHTML = finalOutputFour;

}

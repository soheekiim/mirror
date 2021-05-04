var executeButton;
var executeButtonTwo;
var outputTextOne;
var outputTextTwo;
var inputElement;

var m = ["I", "E"]
var b = ["N", "S"]
var t = ["T", "F"]
var i = ["P", "J"]


window.addEventListener('DOMContentLoaded', function() {

  executeButton = document.getElementById("reflection");
  outputTextOne = document.getElementById("outputTextOne");
  inputElement = document.getElementById("reflectionInput");

  executeButton.addEventListener("click", feelingFunction);

});


function feelingFunction () {

  var inputFeeling = inputElement.value;
  console.log(inputFeeling);

  var finalOutputOne = "you've been " + inputFeeling + " for 5 days out of the past week";

  outputTextOne.innerHTML = finalOutputOne;

}


window.addEventListener('DOMContentLoaded', function() {

  executeButtonTwo = document.getElementById("answer");
  outputTextTwo = document.getElementById("outputTextTwo");

  executeButtonTwo.addEventListener("click", mbtiFunction);

});


function mbtiFunction () {

  var randomMIndex = Math.floor(Math.random() * m.length);
  var selectedFirst = m[randomMIndex];

  var randomBIndex = Math.floor(Math.random() * b.length);
  var selectedSecond = b[randomBIndex];

  var randomTIndex = Math.floor(Math.random() * t.length);
  var selectedThird = t[randomTIndex];

  var randomIIndex = Math.floor(Math.random() * i.length);
  var selectedFourth = i[randomIIndex];

  var finalOutputTwo = "Alex's MBTI: " + selectedFirst + selectedSecond + selectedThird + selectedFourth;

  outputTextTwo.innerHTML = finalOutputTwo;

}


// var quizContainer = document.getElementById('quiz1');
// var resultsContainer = document.getElementById('results1');
// var submitButton = document.getElementById('submit');
//
// var quizOne = [
//   {
//     question: "I feel comfortable in new situations.",
//     answers: {
//       a: "Agree",
//       b: "Neutral",
//       c: "Disagree"
//     },
//   {
//     question: "After a long week, a lively social event is just what I need.",
//     answers: {
//       a: "Agree",
//       b: "Neutral",
//       c: "Disagree"
//     },
//   {
//     question: "I can start conversations with ease.",
//     answers: {
//       a: "Agree",
//       b: "Neutral",
//       c: "Disagree"
//    },
// ];
//
// function buildQuiz() {
//
//   // variable to store the HTML output
//   var output = [];
//
//   // for each question...
//   quizOne.forEach(
//     (currentQuestion, questionNumber) => {
//
//       // variable to store the list of possible answers
//       var answers = ["INTJ", "ISFJ", "ENFJ", "ISTP", "ESFJ"];
//
//       // and for each available answer...
//       for(letter in currentQuestion.answers){
//
//         // ...add an HTML radio button
//         answers.push(
//           `<label>
//             <input type="radio" name="question${questionNumber}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//           </label>`
//         );
//       }
//
//       // add this question and its answers to the output
//       output.push(
//         `<div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join('')} </div>`
//       );
//     }
//   );
//
//   // finally combine our output list into one string of HTML and put it on the page
//   quizContainer.innerHTML = output.join('');
// }
//
//
// function showResults() {
//
//   submitButton.addEventListener('click', showResults);
//
// }

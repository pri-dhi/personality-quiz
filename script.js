var lizScore = 0;
var darScore = 0;

var questionCount = 0;

//Store HTML Elements
var result = document.getElementById("result");
var restart = document.getElementById("restart");
var seeAns = document.getElementById("seeAns");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var one = document.getElementsByClassName("one");
var two = document.getElementsByClassName("two");
var three = document.getElementsByClassName("three");
var four = document.getElementsByClassName("four");
var five = document.getElementsByClassName("five");

//Event Listeners

q1a1.addEventListener("click", liz);
q1a2.addEventListener("click", dar);

q2a1.addEventListener("click", dar);
q2a2.addEventListener("click", liz);

q3a1.addEventListener("click", dar);
q3a2.addEventListener("click", liz);

q4a1.addEventListener("click", dar);
q4a2.addEventListener("click", liz);

q5a1.addEventListener("click", dar);
q5a2.addEventListener("click", liz);

restart.addEventListener("click", restartQuiz);
seeAns.addEventListener("click", displayResult);

q1a1.addEventListener("click", disableBtnOne);
q1a2.addEventListener("click", disableBtnOne);
q2a1.addEventListener("click", disableBtnTwo);
q2a2.addEventListener("click", disableBtnTwo);
q3a1.addEventListener("click", disableBtnThree);
q3a2.addEventListener("click", disableBtnThree);
q4a1.addEventListener("click", disableBtnFour);
q4a2.addEventListener("click", disableBtnFour);
q5a1.addEventListener("click", disableBtnFive);
q5a2.addEventListener("click", disableBtnFive);

//Disable
function disableBtnOne() {
    q1a1.disabled = true;
    q1a2.disabled = true;
}
function disableBtnTwo() {
    q2a1.disabled = true;
    q2a2.disabled = true;
}
function disableBtnThree() {
    q3a1.disabled = true;
    q3a2.disabled = true;
}
function disableBtnFour() {
    q4a1.disabled = true;
    q4a2.disabled = true;
}
function disableBtnFive() {
    q5a1.disabled = true;
    q5a2.disabled = true;
}

//Track liz Score
function liz () {
  lizScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " lizScore = " + lizScore);

  if (questionCount == 5) {
  console.log ("The quiz is done!");
  }
}

//Track dar Score
function dar () {
  darScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " darScore = " + darScore);
  
  if (questionCount == 5) {
  console.log ("The quiz is done!");
  }
}



function displayResult() {
  if (lizScore >= 3) {
    console.log ("You are Lizzy Bennett!");
    result.innerHTML = "You are Lizzy Bennett!";
  } else if(darScore >= 3) {
    console.log ("You are Mr. Darcy!");
    result.innerHTML = "You are Mr. Darcy!";
  }
}

function restartQuiz() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  lizScore = 0;
  darScore = 0;
  console.log ("questionCount = " + questionCount + " lizScore = " + lizScore + " darScore = " + darScore);
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
}

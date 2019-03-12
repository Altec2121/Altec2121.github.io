// Addition
var question1Element = document.querySelector(".question1");
var input1Element = document.querySelector(".input1");
var result1Element = document.querySelector(".result1");

var refresh1Element = document.querySelector(".refresh1");

var score1 = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 20);
}

var newQuestion1;
var answer1;

function generateAdditionQuestion() {
  // Get 2 random numbers
  var randomNumber1 = generateRandomNumber();
  var randomNumber2 = generateRandomNumber();

  // Add the 2 random numbers
  answer1 = randomNumber1 + randomNumber2;

  // Generate the question for HTML
  newQuestion1 = `${randomNumber1} + ${randomNumber2} =`;
  question1Element.innerHTML = newQuestion1;
  result1Element.innerHTML = "";
}

refresh1Element.addEventListener("click", handleRefresh1Click);

function handleRefresh1Click() {
  event.preventDefault();
  generateAdditionQuestion();
  input1Element.disabled = false;
  input1Element.focus();
}

// HTML elements
var progressBar1Element = document.querySelector(".progress-bar1");
var progressContent1Element = document.querySelector(".progress-content1");
var progressValue1Element = document.querySelector(".progress-value1");

// Declare all necessary variables
var totalQuestions1 = 10;
var score1 = 0;
var percentage1 = 0;

// When user presses enter, get user input
input1Element.addEventListener("keyup", handleInput1); // keyup or keydown

function handleInput1() {
  if (event.key == "Enter") {
    var input = input1Element.value;
    if (input == answer1) {
      result1Element.innerHTML = "Correct!";
      result1Element.style.color = "green";
      progressContent1Element.style.width = `${percentage1}%`;
      input1Element.value = "";
      input1Element.disabled = true;
      score1++;
      percentage1 = (score1 / totalQuestions1) * 100;
      progressContent1Element.style.width = `${percentage1}%`;
    } else {
      result1Element.innerHTML = "Wrong!";
      result1Element.style.color = "red";
      input1Element.value = "";
      input1Element.disabled = true;
      score1 = 0;
      percentage1 = 0;
      progressContent1Element.style.width = `${percentage1}%`;
    }
  }
}

generateAdditionQuestion();

// End of Addition

// Subtraction

var question2Element = document.querySelector(".question2");
var input2Element = document.querySelector(".input2");
var result2Element = document.querySelector(".result2");

var refresh2Element = document.querySelector(".refresh2");

var score = 0;

function generateRandomNumber1() {
  return Math.floor(Math.random() * 100);
}

function generateRandomNumber2() {
  return Math.floor(Math.random() * 10);
}

var newQuestion2;
var answer2;

function generateSubtractionQuestion() {
  // Get 2 random numbers
  var randomNumber3 = generateRandomNumber1();
  var randomNumber4 = generateRandomNumber2();

  // Subtract the 2 random numbers
  answer2 = randomNumber3 - randomNumber4;

  // Generate the question for HTML
  newQuestion2 = `${randomNumber3} - ${randomNumber4} =`;
  question2Element.innerHTML = newQuestion2;
  result2Element.innerHTML = "";
}

refresh2Element.addEventListener("click", handleRefresh2Click);

function handleRefresh2Click() {
  event.preventDefault();
  generateSubtractionQuestion();
  input2Element.disabled = false;
  input2Element.focus();
}

// HTML elements
var progressBar2Element = document.querySelector(".progress-bar2");
var progressContent2Element = document.querySelector(".progress-content2");
var progressValue2Element = document.querySelector(".progress-value2");

// Declare all necessary variables
var totalQuestions2 = 10;
var score2 = 0;
var percentage2 = 0;

// When user presses enter, get user input
input2Element.addEventListener("keyup", handleInput2); // keyup or keydown

function handleInput2() {
  if (event.key == "Enter") {
    var input = input2Element.value;
    if (input == answer2) {
      result2Element.innerHTML = "Correct!";
      result2Element.style.color = "green";
      progressContent2Element.style.width = `${percentage2}%`;
      input2Element.value = "";
      input2Element.disabled = true;
      score2++;
      percentage2 = (score2 / totalQuestions2) * 100;
      progressContent2Element.style.width = `${percentage2}%`;
    } else {
      result2Element.innerHTML = "Wrong!";
      result2Element.style.color = "red";
      input2Element.value = "";
      input2Element.disabled = true;
      score2 = 0;
      percentage2 = 0;
      progressContent2Element.style.width = `${percentage2}%`;
    }
  }
}

generateSubtractionQuestion();

// Multiplication
var question3Element = document.querySelector(".question3");
var input3Element = document.querySelector(".input3");
var result3Element = document.querySelector(".result3");

var refresh3Element = document.querySelector(".refresh3");

var score3 = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

var newQuestion3;
var answer3;

function generateMultiplicationQuestion() {
  // Get 2 random numbers
  var randomNumber5 = generateRandomNumber();
  var randomNumber6 = generateRandomNumber();

  // Multiply the 2 random numbers
  answer3 = randomNumber5 * randomNumber6;

  // Generate the question for HTML
  newQuestion3 = `${randomNumber5} x ${randomNumber6} =`;
  question3Element.innerHTML = newQuestion3;
  result3Element.innerHTML = "";
}

refresh3Element.addEventListener("click", handleRefresh3Click);

function handleRefresh3Click() {
  event.preventDefault();
  generateMultiplicationQuestion();
  input3Element.disabled = false;
  input3Element.focus();
}

// HTML elements
var progressBar3Element = document.querySelector(".progress-bar3");
var progressContent3Element = document.querySelector(".progress-content3");
var progressValue3Element = document.querySelector(".progress-value3");

// Declare all necessary variables
var totalQuestions3 = 10;
var score3 = 0;
var percentage3 = 0;

// When user presses enter, get user input
input3Element.addEventListener("keyup", handleInput3); // keyup or keydown

function handleInput3() {
  if (event.key == "Enter") {
    var input = input3Element.value;
    if (input == answer3) {
      result3Element.innerHTML = "Correct!";
      result3Element.style.color = "green";
      progressContent3Element.style.width = `${percentage3}%`;
      input3Element.value = "";
      input3Element.disabled = true;
      score3++;
      percentage3 = (score3 / totalQuestions3) * 100;
      progressContent3Element.style.width = `${percentage3}%`;
    } else {
      result3Element.innerHTML = "Wrong!";
      result3Element.style.color = "red";
      input3Element.value = "";
      input3Element.disabled = true;
      score3 = 0;
      percentage3 = 0;
      progressContent3Element.style.width = `${percentage3}%`;
    }
  }
}

generateMultiplicationQuestion();

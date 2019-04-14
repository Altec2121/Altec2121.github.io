//Getting all HTML elemets using querySelector
var expressionDiv = document.querySelector(".expression");
var resultDiv = document.querySelector(".result");

var numberButtons = document.querySelectorAll(".number");

var additionButton = document.querySelector(".addition");
var subtractionButton = document.querySelector(".subtraction");
var multiplicationButton = document.querySelector(".multiplication");
var divisionButton = document.querySelector(".division");

var clearButton = document.querySelector(".clear");
var openBracketButton = document.querySelector(".bracket-open");
var closeBracketButton = document.querySelector(".bracket-close");
var decimalButton = document.querySelector(".decimal");
var deleteButton = document.querySelector(".delete");
var equalButton = document.querySelector(".equal");

// Number button click
for (i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", handleNumberButtonClick);
}

function handleNumberButtonClick() {
  var clickedNumber = event.target.innerHTML;
  expressionDiv.innerHTML = expressionDiv.innerHTML + clickedNumber;
}

// Clear button click
clearButton.addEventListener("click", handleClearButtonClick);

function handleClearButtonClick() {
  expressionDiv.innerHTML = "";
  resultDiv.innerHTML = "";
}

// Math operation button clicks
// Addition
additionButton.addEventListener("click", handleAdditionButtonClick);

function handleAdditionButtonClick() {
  expressionDiv.innerHTML = expressionDiv.innerHTML + "+";
}

// Subtraction
subtractionButton.addEventListener("click", handleSubtractionButtonClick);

function handleSubtractionButtonClick() {
  expressionDiv.innerHTML = expressionDiv.innerHTML + "-";
}

// Multiplication
multiplicationButton.addEventListener("click", handleMultiplicationButtonClick);

function handleMultiplicationButtonClick() {
  expressionDiv.innerHTML = expressionDiv.innerHTML + "×";
}

// Division
divisionButton.addEventListener("click", handleDivisionButtonClick);

function handleDivisionButtonClick() {
  expressionDiv.innerHTML = expressionDiv.innerHTML + "÷";
}

// Open bracket
openBracketButton.addEventListener("click", handleOpenBracketButton);

function handleOpenBracketButton() {
  expressionDiv.innerHTML = expressionDiv.innerHTML + "(";
}

// Close bracket
closeBracketButton.addEventListener("click", handleCloseBracketButton);

function handleCloseBracketButton() {
  expressionDiv.innerHTML = expressionDiv.innerHTML + ")";
}

// Decimal
decimalButton.addEventListener("click", handleDecimalButton);

function handleDecimalButton() {
  expressionDiv.innerHTML = expressionDiv.innerHTML + ".";
}

// Delete
deleteButton.addEventListener("click", handleDeleteButton);

function handleDeleteButton() {
  expressionDiv.innerHTML = expressionDiv.innerHTML.slice(0, -1);
}

// Equals button
equalButton.addEventListener("click", handleEqualButtonClick);

function handleEqualButtonClick() {
  var expression = expressionDiv.innerHTML
  expression = expression.replace(/×/g, "*")
  expression = expression.replace(/÷/g, "/")
  var result = eval(expression)
  resultDiv.innerHTML = result
}

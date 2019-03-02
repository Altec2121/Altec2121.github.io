// HOMEORK
// You are to create a guessing game of numbers
// 1-100 where the user inputs values
// and the code replys back "Higher", "Lower"
// or "You guessed it"
// conditionals (if, else, else if)
// prompts
// alerts

var number = prompt("Choose a number between 1 and 100");
  while (number > 69) {
    alert("Too big");
    var number = prompt("Try again");
  while (number < 69) {
    alert("Too big");
    var number = prompt("Try again");
  }
}
while (number < 69) {
  alert("Too small");
  var number = prompt("Try again");
while (number > 69) {
  alert("Too big");
  var number = prompt("Try again ");
  }
}
if (number == 69) {
  alert("You GOT IT FAM!");
}

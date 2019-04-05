
var randomNumber = Math.floor(Math.random() * 100); 
console.log(randomNumber)
console.log('Wow you are such a cheater.')

var guess = 1; 

var guessField = document.querySelector('.guessField')

guessField.addEventListener('keyup', yeet)

function yeet() {
    if(event.key == "Enter") {
        var guessNumber = parseInt(guessField.value);
        if (guessNumber) { 
            if (guessNumber < 0) {
                alert('No negative numbers!')
            } else if (randomNumber == guessNumber) {
                if (guess == 1) {
                    alert(" Yay, you guessed the number in 1 guess! ");
                    guessField.value = ''
                } else {
                    alert("Yay, you guessed the number in " + guess + " guesses! ");
                    guessField.value = ''
                }
            } else if( randomNumber < guessNumber ) {     
                guess++; 
                alert("Too big"); 
                guessField.value = ''
            } else{ 
                guess++; 
                alert("Too small") 
                guessField.value = ''
            } 
        } else {
            alert('Please put a valid number!')
        }    
    }      
}

var refreshElement = document.querySelector('.refresh')
refreshElement.addEventListener("click", handleRefreshClick);

function handleRefreshClick() {
  event.preventDefault();
  guessField.focus();
  randomNumber = Math.floor(Math.random() * 100); 
  console.log(randomNumber)
}


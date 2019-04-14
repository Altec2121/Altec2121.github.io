var guess = 1

var inputField = document.querySelector('.inputField')
var inputNumber;

var AIGuess = document.querySelector('.AIGuess')

inputField.addEventListener('keyup', handleInputNumber);

function handleInputNumber() {
    var inputField = document.querySelector('.inputField')
    inputNumber = parseInt(inputField.value);
    if(event.key == "Enter") {
        if (inputNumber) { 
            if (inputNumber < 0) {
                alert('No negative numbers!')
                inputField.value = ''
                console.log(inputNumber)
            } else if (inputNumber > 100) { 
                alert('No numbers over 100!')
                inputField.value = ''
            } else if (inpuetNumber == 0) {
                alert('JUST DONT PUT 0!!')
            } else {
                handleAIGuess();
            }
        } else {
            alert('PUT IN A VALID NUMBER!!')
            inputField.value = ''
        }
        console.log(inputNumber);
    }
}

function handleAIGuess() {
    if (event.key == "Enter") {
        var AINumber = Math.floor(Math.random() * 100)
                if (AINumber == inputNumber) {
                    if (guess == 1) {
                        alert(" Yay, the AI guessed the number in 1 guess! ");
                        inputField.value = ''
                    } else {
                        alert("Yay, the AI guessed the number in " + guess + " guesses! ");
                        inputField.value = ''
                    }
                } else if( AINumber < inputNumber ) {     
                    guess++;
                    handleAIGuess()
                } else { 
                    guess++; 
                    handleAIGuess()
                }
            }
   
    }




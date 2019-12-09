var cardsHTML = document.querySelectorAll('.bingo-card')
var inputsHTML = document.querySelectorAll('.input-field')
var startHTML = document.querySelector('.start')
var restartHTML = document.querySelector('.restart')

var numInputs = 25

startHTML.addEventListener('click', startGame)

function startGame() {
    if (numInputs == 0) {
        for (var i = 0; i < cardsHTML.length; i++) {
            cardsHTML.disabled = true
            cardsHTML[i].addEventListener('click', handleCardClick);
        }
    }
}

for (var i = 0; i < cardsHTML.length; i++) {
    inputsHTML[i].addEventListener('keyup', disableInputField)
}

function disableInputField() {
    if (event.key == 'Enter') {
        currentInput = event.target
        currentInputValue = currentInput.value
        var currentCardDiv = currentInput.parentNode
        currentCardDiv.removeChild(currentInput)
        currentCardDiv.innerHTML = currentInputValue
        numInputs--;
    }
}

function handleCardClick() {
    var currentCardDiv = event.target;
    currentCardDiv.style.backgroundColor = '#00CED1'
    currentCardDiv.style.color = '#fff'
}


restartHTML.addEventListener('click', handleRestart)

function handleRestart() {
    document.location.reload()
}
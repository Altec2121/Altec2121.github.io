// Declare all necessary HTML elements
// Player Names
var playerANameDiv = document.querySelector('.player-a-name')
var playerBNameDiv = document.querySelector('.player-b-name')

// Player name Input Fields
var playerANameInput = document.querySelector('.player-a-input')
var playerBNameInput = document.querySelector('.player-b-input')

// Score Display
var scoreDiv = document.querySelector('.score')

// Buttons 
var allButtons = document.querySelectorAll('.btn')
var buttonGroupA = document.querySelector('.button-group-a')
var buttonGroupB = document.querySelector('.button-group-b')


var playerAButton1 = document.querySelector('.player-a-btn-1')
var playerAButton2 = document.querySelector('.player-a-btn-2')
var playerAButton3 = document.querySelector('.player-a-btn-3')

var playerBButton1 = document.querySelector('.player-b-btn-1')
var playerBButton2 = document.querySelector('.player-b-btn-2')
var playerBButton3 = document.querySelector('.player-b-btn-3')

var playerA = true 
var score = 0;

// User Inputs Name
playerANameInput.addEventListener('keyup', handleNameInput)
playerBNameInput.addEventListener('keyup', handleNameInput)

function handleNameInput() {
    // When user inputs name, display name
    if (event.key == "Enter") {
        var currentInput = event.target
        currentInput.nextElementSibling.innerHTML = `Player: ${currentInput.value}`
        currentInput.style.display = 'none'
        // When both useres inputs name, display buttons
        if (playerANameDiv.innerHTML != '' && playerBNameDiv.innerHTML != '') {
            buttonGroupA.style.display = 'block'
            buttonGroupB.style.display = 'block'
            // Disable Player B
            playerBButton1.disabled = true
            playerBButton2.disabled = true
            playerBButton3.disabled = true
        }
    }  
}

// Handle Button Clicks (updating score)
for(var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', handleButtonClick) 
}

function handleButtonClick() {
    var buttonValue = parseInt(event.target.dataset.value)
    score += buttonValue
    scoreDiv.innerHTML = score
    changeTurn()
    if (score >= 30) {
        playerBButton1.disabled = true
        playerBButton2.disabled = true
        playerBButton3.disabled = true
        playerAButton1.disabled = true
        playerAButton2.disabled = true
        playerAButton3.disabled = true
        if (playerA) {
            playerANameDiv.innerHTML = playerANameDiv.innerHTML + ('  Winner!')
            playerBNameDiv.innerHTML = playerBNameDiv.innerHTML + ('  U suck')
            playerANameDiv.style.color = 'green'
            playerBNameDiv.style.color = 'red'         
        } else {
            playerBNameDiv.innerHTML = playerBNameDiv.innerHTML + ('  Winner!')
            playerANameDiv.innerHTML = playerANameDiv.innerHTML + ('  U suck')
            playerBNameDiv.style.color = 'green'
            playerANameDiv.style.color = 'red'
        }    
    }
}

function changeTurn() {
    playerA =! playerA
    if (playerA) {
        playerBButton1.disabled = true
        playerBButton2.disabled = true
        playerBButton3.disabled = true
        playerAButton1.disabled = false
        playerAButton2.disabled = false
        playerAButton3.disabled = false
    } else {
        playerBButton1.disabled = false
        playerBButton2.disabled = false
        playerBButton3.disabled = false
        playerAButton1.disabled = true
        playerAButton2.disabled = true
        playerAButton3.disabled = true
    }
}
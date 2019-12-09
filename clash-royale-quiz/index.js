var appHTML = document.querySelector('.app')

var firstPageHTML = document.querySelector('.first-page')
var firstInformationTitleHTML = document.querySelector('.first-information-title')
var firstInformationHTML = document.querySelector('.first-information')
var firstInstructionHTML= document.querySelector('.first-instruction')
var firstPageAvatarHTML = document.querySelector('.avatar')

var secondPageHTML = document.querySelector('.second-page')
var secondNameInputHTML = document.querySelector('.second-name-input')

var thirdPageHTML = document.querySelector('.third-page')
var thirdQuestionHTML = document.querySelector('.question')
var thirdOptionHTML = document.querySelectorAll('.card-title')
var thirdOption1HTML = document.querySelector('.option-1')
var thirdOption2HTML = document.querySelector('.option-2')
var thirdOption3HTML = document.querySelector('.option-3')
var thirdOption4HTML = document.querySelector('.option-4')

var questions = [
    {
        question = "What is the name of the first arena?",
        option1 = "Sunbeam plains",
        option2 = "Grass Pit",
        option3 = "Goblin Stage",
        option4 = "None of the above",
    },
]

firstPageAvatarHTML.addEventListener('click', startGame)

function startGame() {
    firstInformationTitleHTML.style.color = "white"
    firstInformationTitleHTML.innerHTML = "Let's go, you trashcan!"
    firstInformationHTML.innerHTML = ""
    firstInstructionHTML.innerHTML = ""
    firstPageAvatarHTML.style.display = "none"
    firstInformationHTML.style.display = "none"
    firstPageHTML.style.justifyContent = "center"
    firstInformationTitleHTML.style.fontSize = "100px"
    appHTML.style.background = "url(https://i.ytimg.com/vi/6TXyRAzKMNg/maxresdefault.jpg)"
    setTimeout(() => {
        firstPageHTML.style.opacity = "0"
        firstPageHTML.style.display = "none"
        appHTML.style.background = "url(https://i.ytimg.com/vi/Njo6wimzjMo/maxresdefault.jpg)"
        secondPageHTML.style.display = "flex"
        setTimeout(() => {
            secondPageHTML.style.opacity = "1"
            secondNameInputHTML.focus()
        }, 500);
    }, 1000);
}

secondNameInputHTML.addEventListener('keyup', handleNameInput)

function handleNameInput() {
    if (event.key == "Enter") {
        if (secondNameInputHTML.value == "") {
            secondNameInputHTML.placeholder = "Enter a name, you trashcan!"
            setTimeout(() => {
                secondNameInputHTML.placeholder = "E.g. Donald Trump"
                secondNameInputHTML.classList.remove("heartBeat")
            }, 700);
        } else if (secondNameInputHTML.value.length >= 25) {
            secondNameInputHTML.placeholder = "Too long, you trashcan!"
            secondNameInputHTML.value = ""
            setTimeout(() => {
                secondNameInputHTML.placeholder = "E.g. Donald Trump"
            }, 700);
        } else {
            var name = secondNameInputHTML.value
            secondPageHTML.style.opacity = "0"
            setTimeout(() => {
                secondPageHTML.style.display = "none"
                thirdPageHTML.style.display = "flex"
                appHTML.style.backgroundImage = "url(https://vignette.wikia.nocookie.net/clashroyale/images/d/dc/Facepalm_Goblin.png/revision/latest/scale-to-width-down/340?cb=20180717203746)"
                setTimeout(() => {
                    thirdPageHTML.style.opacity = "1"
                }, 300);
            }, 300);
        }
    }
}

var numberOfQuestions = database.length

function generateRandomQuestionNumber() {
    var questionNumber = Math.floor(Math.random() * numberOfQuestions)
    return questionNumber 
}

score = 0;
var answer;

function displayQuestionAndOptions() {
    var questionNumber = generateRandomQuestionNumber()
    var currentQuestion = database[questionNumber] 
    questionDiv.innerHTML = currentQuestion.question
    option1HTML.innerHTML = currentQuestion.option1
    option2HTML.innerHTML = currentQuestion.option2
    option3HTML.innerHTML = currentQuestion.option3
    option4HTML.innerHTML = currentQuestion.option4
    answer = currentQuestion.answer
    questions.splice(questionNumber, 1)
    numberOfQuestions--;
}

displayQuestionAndOptions()

function checkAnswer(event) {
    // if(event.target.dataset.value == answer) {
    //     score += 100;
    //     score.innerHTML = `Score: ${score}`
    // } else {
    //     score = score
    //     scoreDiv.innerHTML = `Score: ${score}`;
    // }
    if(numberOfQuestions > 0)  {
        displayQuestionAndOptions()
    }
    else {
        alert(`Your score is ${score}.`)
    }
}
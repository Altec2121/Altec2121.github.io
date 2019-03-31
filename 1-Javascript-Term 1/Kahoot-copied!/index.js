var scoreDiv = document.querySelector('.score')
var questionDiv = document.querySelector('.question')
var option1TextDiv = document.querySelector('.option-1-text')
var option2TextDiv = document.querySelector('.option-2-text')
var option3TextDiv = document.querySelector('.option-3-text')
var option4TextDiv = document.querySelector('.option-4-text')
var optionDivs = document.querySelectorAll('.option')

// Questions database
var database = [
    {
        question: 'Who is CEO of Apple in 2019?',
        option1: 'Your mum',
        option2: 'Steve Jobs',
        option3: 'Tim Cook',
        option4: 'Stephen Hawking',
        answer: '2',
    },
    {
        question: 'What year was Apple founded?',
        option1: '1969',
        option2: '1970',
        option3: '1976',
        option4: '1985',
        answer: '3',
    },
    {
        question: 'How much is the iPhone XR 64GB?',
        option1: '$1000',
        option2: '$1229',
        option3: '$1299',
        option4: '$1199',
        answer: '2'
    },
    {
        question: 'What year did the iPhone come out?',
        option1: '2006',
        option2: '2007',
        option3: '2008',
        option4: '2009',
        answer: '2',
    },
    {
        question: 'Before the first iPhone was announced, what was the nickname?',
        option1: 'Projet Purple',
        option2: 'Project I',
        option3: 'The Manhattan Project',
        option4: 'Project K48',
        answer: '1',
    },
    {
        question: 'Which one of these were the original iPhone slogans?',
        option1: 'Welcome to the future',
        option2: 'HiPhone',
        option3: 'You will want one, so will everyone else',
        option4: 'Apple reinvents the phone',
        answer: '4',
    },
    {
        question: 'What chip is used in the iPhone X?',
        option1: 'A9',
        option2: 'A10',
        option3: 'A11',
        option4: 'A12',
        answer: '3',
    },
]

// Get random number from database

var numberOfQuestions = database.length

function generateRandomQuestionNumber() {
    var questionNumber = Math.floor(Math.random() * numberOfQuestions)
    return questionNumber 
}

// Display options and question
score = 0;
var answer;

function displayQuestionAndOptions() {
    var questionNumber = generateRandomQuestionNumber()
    var currentQuestion = database[questionNumber] 
    questionDiv.innerHTML = currentQuestion.question
    option1TextDiv.innerHTML = currentQuestion.option1
    option2TextDiv.innerHTML = currentQuestion.option2
    option3TextDiv.innerHTML = currentQuestion.option3
    option4TextDiv.innerHTML = currentQuestion.option4
    scoreDiv.innerHTML = `Score: ${score}`
    answer = currentQuestion.answer
    database.splice(questionNumber, 1)
    numberOfQuestions--;
}

displayQuestionAndOptions()

//Listen for option click

for(var i = 0; i < optionDivs.length; i++) {
    optionDivs[i].addEventListener('click', checkAnswer)
}

function checkAnswer(event) {
    if(event.target.dataset.value == answer) {
        score += 100;
        scoreDiv.innerHTML = `Score: ${score}`
    } else {
        score = score
        scoreDiv.innerHTML = `Score: ${score}`;
    }
    if(numberOfQuestions > 0)  {
        displayQuestionAndOptions()
    }
    else {
        alert(`Your score is ${score}.`)
    }
}
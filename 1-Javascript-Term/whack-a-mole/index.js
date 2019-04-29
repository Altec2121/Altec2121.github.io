// HTML elements
var holes = document.querySelectorAll('.hole')
var moles = document.querySelectorAll('.mole')
var scoreDiv = document.querySelector('.score')
var startButton = document.querySelector('.start-button')

var moleActiveIndex;
var score = 0;
var moleJump = 0;
var playing = false;
var count = 0;

var maxActiveTime = 3000;
var minActiveTime = 1500;
var timeInterval;

var upSound = new sound("assets/hit.wav")
var hitSound = new sound("assets/NFF-mad-laughter.wav")

// Click to start
startButton.addEventListener('click', handleStartButtonClick)

function handleStartButtonClick() {
    startButton.disabled = true
    playing = true;
    oneMoleUp()
    setTimeout(finishGame, 30000)
    timeInterval = setInterval(displayTime, 10)
}

function displayTime() {
    count++
    var remaining = (30000 - count * 10) / 1000
    if (remaining > 0) {
        startButton.innerText = remaining
    } else {
        startButton.innerText = "Click to Start!"
        startButton.disabled = false
        clearInterval(timeInterval)
        score = 0
        count = 0
        moleJump = 0
        scoreDiv.innerHTML = `Score: 0`
    }
}

function oneMoleUp() {
    if (playing) {
        moleJump++
        var currentMole = moleJump
        moleActiveIndex = Math.floor(Math.random() * holes.length)
        var activeTime = randomActiveTime(minActiveTime, maxActiveTime)
        moles[moleActiveIndex].classList.add('up')
        upSound.play();
        setTimeout(moleDown, activeTime, currentMole)
    }
}

function moleDown(currentMole) {
    if (currentMole == moleJump) {
        moles[moleActiveIndex].classList.remove('up')
        if(playing) {
            scoreDiv.innerHTML = `Score: ${score}/${moleJump}`
            oneMoleUp()
        }
    }
}

function randomActiveTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function finishGame() {
    playing = false;
}

for (var i = 0; i < moles.length; i++) {
    moles[i].addEventListener('click', handleMoleClick)
}

function handleMoleClick() {
    hitSound.play();
    score++
    moleDown(moleJump)
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }
var cardDivs = document.querySelectorAll('.card')

var attempts = 0
var score = 0
var clickedCardDivs = []

var correctSound = new sound('sounds/correct.wav')
var IncorrectSound = new sound('sounds/incorrect.wav')

for (var i = 0; i < cardDivs.length; i++) {
    cardDivs[i].addEventListener('click', handleCardClick)
}

function handleCardClick() {
    var clickedCard = event.target
    clickedCard.classList.remove('unselected')
    clickedCardDivs.push(clickedCard)
   if(clickedCardDivs.length == 2) {
       attempts++
       clickedCardDivs[0].firstElementChild.classList[1]
       if(clickedCardDivs[0].firstElementChild.classList[1] == clickedCardDivs[1].firstElementChild.classList[1]) {
           score++
           correctSound.play()
       }
       else {
           setTimeout(handleIncorrectCards, 1000, clickedCardDivs)
           IncorrectSound.play()
       } clickedCardDivs = []
console.log(`Score = ${score}/${attempts}`)
   }
}

function handleIncorrectCards(clickedCardDivs) {
    for(var i = 0; i < clickedCardDivs.length; i++)
    clickedCardDivs[i].classList.add('unselected')
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
var cardDivs = document.querySelectorAll('.card')

for (var i = 0; i < cardDivs.length; i++) {
    cardDivs[i].addEventListener('click', handleCardClick)
}

function handleCardClick() {
    var clickedCard = event.target
    clickedCard.classList.remove('unselected')
}
var database = [
    {
        image: "https://i.imgflip.com/vxz0i.jpg",
        quote: "Whatever Trump might have expected, he will face results beyond his expectation. I will surely and definiterly tame the mentally deranged US dotard with fire.",
        date: 1
    },
    {
        image: "https://i.redd.it/z4gimg7td4sy.jpg",
        quote: "The days are gone forever when our enemies could blackmail us with nuclear bombs.",
        date: 2
    },
    {
        image: "https://i.imgur.com/y3yusZu.png",
        quote: "There can be neither today without yesterday nor tomorrow without today",
        date: 3
    },
    {
        image: "https://starecat.com/content/wp-content/uploads/on-a-north-korean-scale-how-are-you-feeling-today-from-0-to-10-kim-jong-un-with-a-family.jpg",
        quote: "There is no force in the world that can block the powerful march of our army and people, who are holding high the banner of the suns of great Comrade Kim Il Sung and great Comrade Kim Jong Il and continuing to advance under the leadership of the party and with strong faith in sure victory. Kim Jong-un",
        date: 4
    }
]

var mainDiv = document.querySelector('.main')
var quoteDiv = document.querySelector('.quote')
var dateDiv = document.querySelector('.date')
var buttonTag = document.querySelector('.button')

function selectRandom() {
    var randomNumber = Math.floor(Math.random() * database.length)
    return randomNumber
}

function refreshPage() {
    var randomNumber = selectRandom();
    var randomObject = database[randomNumber];
    quoteDiv.innerHTML = `"${randomObject.quote}"`;
    dateDiv.innerHTML = randomObject.date;
    mainDiv.style.backgroundImage = `url(${randomObject.image})`;
}

refreshPage();
var text = document.querySelector('.text')
var linksPage = document.querySelector('.links-page')

text.addEventListener('click', start)

function start() {
    text.innerHTML = "Let's Go!"
    text.style.fontSize = "100px"
    setTimeout(() => {
        text.style.fontSize = "0px"
        text.style.opacity= "0"
        setTimeout(() => {
            text.style.display = "none"
            linksPage.style.display = "flex"
            linksPage.style.backgroundColor = "black"
            setTimeout(() => {
                linksPage.style.opacity = "1" 
            }, 300);
        }, 400);
    }, 500);  
}
// HTML elements
var progressBarElement = document.querySelector(".progress-bar");
var progressContentElement = document.querySelector(".progress-content");
var progressValueElement = document.querySelector(".progress-value");
var progressUpdateElement = document.querySelector(".progress-update");

// Declare all necessary variables
var totalQuestions = 10;
var score = 0;
var percentage = 0;

// When correct button is clicked
progressUpdateElement.addEventListener("click", handleProgressUpdate);

function handleProgressUpdate() {
    score ++
    percentage = score / totalQuestions * 100
    if (score >= totalQuestions) {
        progressUpdateElement.disabled = true;
    }
    progressContentElement.style.width = `${percentage}%`
    progressValueElement.innerHTML = `${score} / ${totalQuestions} (${percentage}%)`
}


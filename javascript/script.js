// Variables:
words = new Array("accommodate", "alcohol", "believe", "calendar", "category", "changeable", "conscious", "definitely", "disappear", "disappoint", "existence", "experience", "equipment", "february", "foreign", "generally", "guarantee", "immediate", "immediately", "independent", "intelligence", "judgement", "knowledge", "library", "mischievous", "noticeable", "occasion", "occasionally", "occur", "official", "preferable", "receive", "recommend", "referred", "reference", "relevant", "ridiculous", "rhythm", "scissors", "sensible", "separate", "special", "success", "tomorrow", "weather", "vicious", "gauge", "convenient", "opportunity", "neighbour", "argument", "embarrass", "necessary", "business", "commitment", "government", "successfully", "psychology", "happiness", "difference", "unnecessary", "antidisestablishmentarianism", "absence", "accidentally", "emergency", "accessible", "misspelled", "because", "basically", "sincerely", "language", "succeeded", "fulfil", "magnificent", "apparently", "curious", "curiosity", "committed", "possession", "colleague", "committee");
correct = new Audio("audio/correct.mp3");
incorrect = new Audio("audio/incorrect.mp3");
var currentWord;
var sound;
var attempt;
var dictionaryLink;

window.onload = chooseAudio;

// Choose a random word on load:
function chooseAudio() {
    document.getElementById('attemptText').value = "";
    var randomNum = Math.floor(Math.random() * words.length);
    currentWord = words[randomNum];
    sound = new Audio("audio/" + currentWord + ".ogg");
    dictionaryLink = "https://www.dictionary.com/browse/" + currentWord;
    document.dictionary1.action = dictionaryLink;
    document.dictionary.action = dictionaryLink;
}

// Play sound when button is pressed:
function playSound() {
    sound.play();
}

// Check attempt on enter:
function checkAttempt() {
    var key = window.event.keyCode;

    if (key === 13) {
        attempt = document.getElementById('attemptText').value.toLowerCase();
        if (currentWord == attempt) {
            correct.play();
            console.log("Correct!");
            document.getElementById("correct").style.display = "block";
            document.getElementById("gameWindow").style.paddingBottom = "20px";
        } else {
            incorrect.play();
            document.getElementById("incorrect").style.display = "block";
            document.getElementById("gameWindow").style.paddingBottom = "20px";
            document.getElementById("yourSpelling").innerHTML = document.getElementById("attemptText").value;
            document.getElementById("correctSpelling").innerHTML = currentWord;
        }
    }
}

// Reset and load a new random word:
function nextWord() {
    chooseAudio();
    document.getElementById("incorrect").style.display = "none";
    document.getElementById("correct").style.display = "none";
    document.getElementById("gameWindow").style.paddingBottom = "50px";
}
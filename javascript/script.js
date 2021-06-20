// Variables:
words = new Array("absence", "accessible", "accidentally", "accommodate", "acquaintance", "acquire", "across", "advisable", "alcohol", "almost", "altogether", "amateur", "annual", "antidisestablishmentarianism", "apparent", "apparently", "argument", "awesome", "awful", "basically", "beautiful", "because", "becoming", "believe", "business", "calendar", "camouflaged", "can't", "category", "cemetery", "changeable", "chief", "collaborate", "colleague", "commitment", "committed", "committee", "congratulate", "conscious", "convenient", "couldn't", "curiosity", "curious", "definite", "definitely", "developed", "didn't", "difference", "dilemma", "disappear", "disappoint", "don't", "dying", "embarrass", "emergency", "equipment", "especially", "exaggerate", "exercise", "existence", "experience", "explanation", "february", "foreign", "friend", "fulfil", "gauge", "generally", "government", "grammar", "grateful", "guarantee", "happiness", "height", "heroes", "humorous", "hygiene", "immediate", "immediately", "independent", "intelligence", "interrupt", "isn't", "jewellery", "judgement", "knowledge", "language", "library", "license", "lightning", "lose", "magnificent", "marriage", "mischievous", "misspelled", "necessary", "neighbour", "noticeable", "occasion", "occasionally", "occur", "official", "opportunity", "parallel", "parliament", "perceive", "performance", "possession", "preferable", "presence", "probably", "professor", "pronunciation", "protester", "psychology", "publicly", "questionable", "readable", "really", "receipt", "receive", "reception", "receptionist", "recommend", "reference", "referred", "relevant", "religious", "rhyme", "rhythm", "ridiculous", "scissors", "secretary", "sensible", "separate", "shouldn't", "similar", "sincerely", "skilful", "special", "succeeded", "success", "successfully", "symmetry", "tomorrow", "unnecessary", "vaccination", "vacuum", "vicious", "weather", "won't", "wouldn't", "writing",);
correct = new Audio("audio/correct.mp3");
incorrect = new Audio("audio/incorrect.mp3");
var currentWord;
var sound;
var attempt;
var dictionaryLink;
var streak = 0;
var randomNum;
var keyPress;

window.onload = chooseAudio;

// Log class for storing attempts:
/*class Log {
    constructor(word, attempt, streak) {
        this.word = word;
        this.attempt = attempt;
        this.streak = streak;
    }
}*/

// Choose a random word on load:
function chooseAudio() {
    document.getElementById('attempt-text').value = "";
    randomNum = Math.floor(Math.random() * words.length);
    currentWord = words[randomNum];
    sound = new Audio("audio/" + currentWord + ".ogg");
    dictionaryLink = "https://www.dictionary.com/browse/" + currentWord;
    document.dictionary.action = dictionaryLink;
}

// Play sound when button is pressed:
function playSound() {
    sound.play();
    document.getElementById("attempt-text").focus();
}

// Check attempt on enter:
function checkAttempt() {
    keyPress = window.event.keyCode;

    if (keyPress === 13) {
        attempt = document.getElementById('attempt-text').value.toLowerCase();
        document.getElementById('attempt-text').disabled = true;
        if (currentWord == attempt) {
            correct.play();
            document.getElementById("correct").style.display = "block";
            document.getElementById("buttons").style.display = "block";
            document.getElementById("game-window").style.paddingBottom = "20px";
            streak += 1;
        } else {
            incorrect.play();
            document.getElementById("incorrect").style.display = "block";
            document.getElementById("buttons").style.display = "block";
            document.getElementById("game-window").style.paddingBottom = "20px";
            document.getElementById("your-spelling").innerHTML = document.getElementById("attempt-text").value;
            document.getElementById("correct-spelling").innerHTML = currentWord;
            streak = 0;
        }
    }
}

// Reset and load a new random word:
function nextWord() {
    chooseAudio();
    document.getElementById("incorrect").style.display = "none";
    document.getElementById("correct").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("game-window").style.paddingBottom = "50px";
    document.getElementById('attempt-text').disabled = false;
}
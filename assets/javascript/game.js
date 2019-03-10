var answers = ["Chiefs", "Chargers", "Broncos", "Raiders"];
var userChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

var wins = 0;
var guessesRemaing = 10;
var answersIndex = 0;

var winsText = document.getElementById("wins-text");
var guessesRemainingText = document.getElementById("guesses-remaining");
var letterGuessedText = document.getElementById("letter-guessed");
var currentWordText = document.getElementById("current-word");
var directionsText = document.getElementById("directions-text");

document.onkeyup = function(event){
    directionsText.textContent = " "

   function renderCurrentWord() {
    if (answersIndex <= (answers.length - 1)) {
        document.querySelector("#current-word").innerHTML = answers[answersIndex];
    }
    else if (guessesRemaing >= 0) {

    }
    else if (guessesRemaing === 0){
       document.querySelector("#current-word").innerHTML = "Game Over";
    }
     else {
         document.querySelector("#current-word").innerHTML = "You Win";
    }
   }

   currentWordText.textContent = answersIndex.length.innerHTML = "_";
    
    
    



   renderCurrentWord(); 
    answersIndex++;
    winsText.textContent = "Wins: " + wins;
    guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaing;
    }
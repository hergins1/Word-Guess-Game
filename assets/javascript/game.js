var answers = ["Chiefs", "Chargers", "Broncos", "Raiders"];

    answers.forEach(function(team){


    });

var wins = 0;
var guessesRemaing = 10;

var winsText = document.getElementById("wins-text");
var guessesRemainingText = document.getElementById("guesses-remaining");
var letterGuessedText = document.getElementById("letter-guessed");
var currentWordText = document.getElementById("current-word");

document.onkeyup = function(event){
    currentWordText.textContent = "_"






    winsText.textContent = "Wins: " + wins;
    guessesRemainingText = "Guesses Remaining: " + guessesRemaing;
    
}









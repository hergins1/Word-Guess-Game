var answers = ["Chiefs", "Chargers", "Broncos", "Raiders"];
var userChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var randomWord = answers[Math.floor(Math.random() * answers.length)];

var wins = 0;
var guessesRemaing = 10;
var answersIndex = [];
var s;

var winsText = document.getElementById("wins-text");
var guessesRemainingText = document.getElementById("guesses-remaining");
var letterGuessedText = document.getElementById("letter-guessed");
var currentWordText = document.getElementById("current-word");
var directionsText = document.getElementById("directions-text");

document.onkeyup = function(event){
    directionsText.textContent = " "

   function startUp(){
       for (var i = 0; i< randomWord.length; i++){
           answersIndex[i] = "_";
       }
       s = answersIndex.join(" ");
       currentWordText.textContent = s;
    }
    
    function letter(){
        var letter = document.getSelection(userChoices).value;
        
        if (letter.length > 0){
            for (var i = 0; i < randomWord.length; i++){
                if (randomWord[i] === letter){
                    answersIndex[i] = letter;
                    
                }
            }
        }
        startUp();
        letter();
    }
    
    
    


    guessesRemaing--;
    answersIndex++;
    winsText.textContent = "Wins: " + wins;
    guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaing;

    if(guessesRemaing === 0){
        document.querySelector("#current-word").innerHTML = "Game Over";
    }

    }
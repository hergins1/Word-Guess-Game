// var answers = ["Chiefs", "Chargers", "Broncos", "Raiders"];
// var userChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
// var randomWord = answers[Math.floor(Math.random() * answers.length)];
// var spt = randomWord.split(" ");

// var wins = 0;
// var guessesRemaing = 10;
// var answersIndex = [];
// var s;

// var winsText = document.getElementById("wins-text");
// var guessesRemainingText = document.getElementById("guesses-remaining");
// var letterGuessedText = document.getElementById("letter-guessed");
// var currentWordText = document.getElementById("current-word");
// var directionsText = document.getElementById("directions-text");

// document.onkeyup = function(event){
//     directionsText.textContent = " "

//     userChoices = event.keypress();

//    function startUp(){
//        for (var i = 0; i< spt.length; i++){
//            answersIndex[i] = "_";
//        }
//        s = answersIndex.join(" ");
//        currentWordText.textContent = s;
//     }

//     function letter(){
//         var letter = letterGuessedText

//         if (letter.length > 0){
//             for (var i = 0; i < spt.length; i++){
//                 if (spt[i] === letter){
//                     answersIndex[i] = letter;

//                 }
//             }
//         }
//     }

//     letter();

//     guessesRemaing--;
//     answersIndex++;
//     winsText.textContent = "Wins: " + wins;
//     guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaing;

//     if(guessesRemaing === 0){
//         document.querySelector("#current-word").innerHTML = "Game Over";
//     }

//     startUp();

// }

var answers = ["chiefs", "chargers", "broncos", "raiders"];
var userChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var randomWord = answers[Math.floor(Math.random() * answers.length)];
console.log(randomWord);

var wins = 0;
var guessesRemaing = 10;
var answersIndex = [];
var s = [];

var winsText = document.getElementById("wins-text");
var guessesRemainingText = document.getElementById("guesses-remaining");
var letterGuessedText = document.getElementById("letter-guessed");
var currentWordText = document.getElementById("current-word");
var directionsText = document.getElementById("directions-text");
function startUp() {
    for (var i = 0; i < randomWord.length; i++) {
        answersIndex[i] = "_";
    }
    // s = answersIndex.push(" ");
    currentWordText.textContent = answersIndex.join(" ");
    guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaing;
}
startUp();

document.onkeyup = function (event) {
    directionsText.textContent = " ";
    guessesRemaing--;

    var letter = event.key.toLowerCase();
    console.log(letter);
    console.log(randomWord);

    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === letter) {
            answersIndex[i] = letter;


            // if (guessesRemaing === 0) {
            //     document.querySelector("#current-word").innerHTML = "Game Over";
            // }
        }
    }
    if (answersIndex.indexOf("_") === -1) {
        wins++;
    }
    
    else if (guessesRemaing === 0) {
        alert("Game Over")
    }
    
    
    console.log(answersIndex)
    currentWordText.textContent = answersIndex.join(" ");
    winsText.textContent = "Wins: " + wins;
}        
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersGuessed = [];
var compChoice = null;
var guessesLeft = 10;

var wins = 0;
var losses = 0;

document.onkeydown = function (event) {
        guessesLeft--;
        var userInput = String.fromCharCode(event.which).toUpperCase();

        lettersGuessed.push(userInput);

        updateGuessesLeft();

        updateGuessesSoFar();

        if (userInput === compChoice) {
                wins++;
                document.querySelector("#wins").innerHTML = wins;
                alert("You Guessed Correctly!")
                restartGame();
        }


        else if (guessesLeft === 0) {
                losses++;
                alert("Nice Try, Give It Another Go!");
                document.querySelector("#losses").innerHTML = losses;
                restartGame();
        }


};

function updateGuessesLeft() {
        document.querySelector("#guesses-left").innerHTML = guessesLeft;
}

function updateGuessesSoFar() {
        document.querySelector("#guesses-so-far").innerHTML = lettersGuessed.join('');
}

randomLetterGenerator();
function randomLetterGenerator() {
        compChoice = letters[Math.floor(Math.random() * letters.length)];
        console.log("randomletter: " + compChoice);
}

let restartGame = function () {
        guessesLeft = 9;
        lettersGuessed = [];

        document.querySelector("#guesses-so-far").innerHTML = lettersGuessed;

        document.querySelector("#guesses-left").innerHTML = guessesLeft;


        randomLetterGenerator();
}
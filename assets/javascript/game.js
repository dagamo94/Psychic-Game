/* VARIABLES TO MODIFY HTML FILE START */
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var guessesLeftText = document.getElementById("guessesLeftText");
var userGuessesText = document.getElementById("userGuessesText");
/* VARIABLES TO MODIFY HTML FILE END */


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];
var cpuOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = cpuChoice();

function cpuChoice() {     //generates a random number every time a key is pressed but is only called whenever the game needs to be reset
    return cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
}

function resetVariables(){
    computerChoice = cpuChoice();
    guessesLeft = 9;
    userGuesses = [];
    userGuessesText.textContent = "";
}


console.log("Initial CPU choice: " + computerChoice);


document.onkeyup = function (event) {

    var userInput = event.key;

    if (cpuOptions.includes(userInput) && userGuesses.indexOf(userInput) < 0) { //if userInput is a value within the array cpuOptions and the index of the userInput in the array userGuesses is -1 (which means that the user has not yet guessed/pressed that key), then continue

        if (userInput === computerChoice && guessesLeft > 1) {
            wins++;
            resetVariables();
            console.log("you won!");

        } else if (userInput != computerChoice && guessesLeft > 1) {
            guessesLeft--;
            userGuesses.push(userInput);
            console.log("choose again");
            userGuessesText.append(event.key + ", ");


        } else {
            resetVariables();
            losses++;
        }

    } else {
        alert("Letter has already been used or press a letter from the alphabet (a-z)");
    }

    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;


    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses left: " + guessesLeft);
    console.log("CPU choice: " + computerChoice); 
    console.log("User guesses: " + userGuesses);


    console.log("\n");

}


// console.log("return the value at index 30: " + cpuOptions[30]);
// console.log("look for the index of nn which doesn't exist in the array: " + cpuGuess.indexOf("nn"));
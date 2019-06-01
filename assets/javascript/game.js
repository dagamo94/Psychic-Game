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
var cpuGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = cpuChoice();

function cpuChoice() {     //generates a random number every time a key is pressed but is only called whenever the game needs to be reset
    return cpuGuess[Math.floor(Math.random() * cpuGuess.length)];
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

    if (cpuGuess.includes(userInput) && userGuesses.indexOf(userInput) < 0) {

        if (userInput === computerChoice && guessesLeft > 1) {
            wins++;
            
            resetVariables();
            console.log("you won!");

        } else if (userInput != computerChoice && guessesLeft > 1) {
            guessesLeft--;
            userGuesses.push(userInput);
            console.log("choose again");
            userGuessesText.append(event.key);


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


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
var cpuGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerChoice = cpuChoice();

function cpuChoice(){
    return cpuGuess[Math.floor(Math.random() * cpuGuess.length)];
}

console.log("Initial CPU choice: " + computerChoice);


document.onkeyup = function (event) {

    var userInput = event.key;

    //generates a random number every time a key is pressed but is only called whenever the game needs to be reset
    // function cpuChoice(){
    //     return cpuGuess[Math.floor(Math.random() * cpuGuess.length)];
    // }
    

    if(cpuGuess.includes(userInput) && userGuesses.indexOf(userInput) < 0){

        if(userInput === computerChoice && guessesLeft > 1){
            wins++;
            guessesLeft = 9;
            userGuesses = [];
            computerChoice = cpuChoice();
            console.log("you won!");
            
        }else if(userInput != computerChoice && guessesLeft > 1){
            guessesLeft--;
            userGuesses.push(userInput);
            

            //use a forEach loop here once logic works  to print to the HTML file
            console.log("choose again");
        }else{
            computerChoice = cpuChoice();
            losses++;
            guessesLeft = 9;
            userGuesses = [];
        }

    }else{
        alert("Letter has already been used or press a letter from the alphabet (a-z)");
    }

    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses left: " + guessesLeft);
    console.log("CPU guess: " + computerChoice); //display the computer choice
    for(var i = 0; i < userGuesses.length; i++){ //prints current array values to the console
        console.log("Current user guesses: " + userGuesses[i]);
    }
    

    console.log("\n");

}


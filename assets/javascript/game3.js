
//VARIABLES
//the array of possible random letter choices  
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Creating variables to hold the number of wins and losses
var wins = 0;
var losses = 0;
var tries = 9;
var guesses = [];

var randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log("randomLetter is " + randomLetter);

document.onkeyup = function (event) {
  var userGuess = String.fromCharCode(event.which).toLowerCase();
  console.log("user guess is " + userGuess);
  guesses.push(userGuess);
  console.log(guesses);

    if (randomLetter === userGuess) {
      wins++;  
      updateScore();
      guesses.splice(0,guesses.length);
    } 
    
      else if (randomLetter !== userGuess) {
        tries--; 
        updateScore();
      }

      for (var i = 0; i < guesses.length;i++) {
        if (tries === 0) {
          losses++;
          resetTries();
          guesses.splice(0,guesses.length);
        }   
}

  function updateScore()   {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#guessesleft").innerHTML = "Guesses Left: " + tries;
    document.querySelector("#userguess").innerHTML = "Your guesses so far: " + guesses;
  }
      
  function resetTries() {
    tries = 9;
  }
      
  updateScore();  
  resetTries();





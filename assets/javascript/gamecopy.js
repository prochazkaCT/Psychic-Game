
//VARIABLES
//The array of possible random letter choices  
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Creating variables to hold the number of wins and losses. The number of guesses or tries is set to 9 and the empty
//guesses array will contain the user guess. 
var wins = 0;
var losses = 0;
var tries = 9;
var guesses = [];

//A random letter is selected -- feel free to undo the console.log to see it in action!
var randomLetter = letters[Math.floor(Math.random() * letters.length)];
// console.log("randomLetter is " + randomLetter);

//This function starts the game -- the user will type a letter and that letter will be 
//pushed to the var guesses empty array. 
document.onkeyup = function (event) {
  var userGuess = String.fromCharCode(event.which).toLowerCase();
  // console.log("user guess is " + userGuess);
  guesses.push(userGuess);
  // console.log(guesses);

    //If the random letter selected by the computer and the users guess are the same, then 1 point is 
    //added to the wins and the tries are reset to 0 and the array is cleared with splice. Then another random
    //letter is selected.  
    if (randomLetter === userGuess) {
      wins++;  
      updateScore();
      tries = 9;
      guesses.splice(0,guesses.length);
      randomLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log("randomLetter is " + randomLetter);
    } 
    
    //If the random letter does not match the computer guess, then 1 point is added to the losses and 
    //a guess is removed from the tries. 
      else if (randomLetter !== userGuess) {
        tries--; 
        updateScore();
      }

    //If tries = 0 then the user used up all of their 9 guesses. After the next keystroke, the tries will reset to 9, 
    //losses will increase by 1, the array will clear and a new random letter is generated. 
        if (tries === 0) {
          resetTries();
          losses++;
          randomLetter = letters[Math.floor(Math.random() * letters.length)];
          console.log("randomLetter is " + randomLetter);
          guesses.splice(0,guesses.length);
        }  
      
}

//This function will update the score on the user screen via the html when called. 
function updateScore()   {
  document.querySelector(".wins").innerHTML = "Wins: " + wins;
  document.querySelector(".losses").innerHTML = "Losses: " + losses;
  document.querySelector(".guessesleft").innerHTML = "Guesses Left: " + tries;
  document.querySelector("#userguess").innerHTML = "Your guesses so far: " + guesses;
}
      
function resetTries() {
  tries = 9;
}
      
updateScore();  
resetTries();





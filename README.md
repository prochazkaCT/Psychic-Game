# Psychic-Game

There are 6 lines of text on the screen. First saying that it is "The Psychic Game", with "guess what letter I'm thinking of". 

The purpose of the game is to guess what letter has been chosen at random from a-z. 
    
  1. The score (or "Wins") will increase by 1 if the user guesses the correct letter in 9 guesses and the game will reset with the number of "Guesses Left" to 9.
  2. The letter guesses that the user chooses are printed on the screen to "Your Guesses so far:" and they count down from 9 to 0.
  3. The "Losses" will increase by 1 if the user takes more than 9 turns to guess correctly. Once 9 attempts are up, the losses will increase by 1 and the "guesses left" will reset to 9.  

     function reWriteStats() {
        console.log("userguess" + userGuess);
        console.log("computerGuess" + computerGuess);
        console.log("wins" + wins);
        console.log("losses" + losses);
        console.log("guesses left " + guessesLeft);
        console.log("------------------------------");
      }
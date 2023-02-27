// GUESS THAT NUMBER
// Message to be used throughout the porject/file
const enterNumText = `Please enter a number greater than zero`;

// For starting, restarting, and ending the game
let restartGame = true;

// For storing the range that the user wilk guess
let rangeNum;

// For storing the number the user will attempt to guess
let randomNum;

// For storing the number of attempts the user has left
let attempts;

// For storing the users guess
let guess;

// For storing the users response to play or NOT play again
let playAgain;

// Starting alert message
alert(`Welecome to "Guess That Number!" Please click "OK" to start the game`);

// Game restarts as long as the restartGame variable has a value of true
while (restartGame){
    // Ask user to enter a number to set the upper bound for the random number that will be created
    rangeNum = prompt(`Please enter a maximum number for the range`);
    // using parseInt to attempt to convert the users repsonse into a number value
    rangeNum = parseInt(rangeNum);
    
    // Verifies the users entery for the range number is a number greater than zero
    // NOTE: All numbers, positive or negitive have a Boolean value of TRUE, except for zero which has a defalut value of FALSE. Also, NaN has a default Boolean value of FALSE
    while (!rangeNum || rangeNum < 1){
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // Creates the random number using the range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;
    // alert(`Random Number is: ${randomNum}`)

    // Prompt user to enter a number of attempts allowed (AKA number of guesses)
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

    // Verifying the user's entery for a number of attempts allowed is a number greater than zero and one less than the range they set
    while (!attempts || attempts <= 1 || attempts >= rangeNum){
        attempts = parseInt(prompt(`Please enter a number between 0 and ${rangeNum}`));
    }
    // Ask user to enter a guess in the range that they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);

    // Continues looping until the user guesses the correct number or runs out of attempts
    while (true){
        // Displays the umber/answer when a code word is entered
        if (guess === `ur mom`){
            alert(`The number is ${randomNum}`)

            // Prompts the user to enter another guess
            guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);
        }

        // Attempts to convert the user's guess into a number
        guess = parseInt(guess);
    
        // Verifies the user's guess is a number greater than zero and less than or equal to the range they set
        while (!guess || guess < 1 || guess > rangeNum){
          guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
        }
    
        // Removes an attempt
        attempts--;
    
        // Checks if user guesses correctly, if so the game ends
        if (guess === randomNum){
          alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
          break;
        // checks is user has any attempts left. If not, then the game ends and the number is displayed to the user 
        } else if (attempts === 0){
          alert(`Sorry, but you have run out of attempts :( The number was ${randomNum}`);
          break;

        // Checks if users guess was too low and prompts user to guess again
        }else if(guess < randomNum){
            guess = prompt(`Too low. You have ${attempts} attempt(s) left`);

        // The only other possibility is the users guess was too high so the user is prompted again
        }else{
            guess = prompt(`Too high. You have ${attempts} attempt(s) left`)
        }
    }

    playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

    // loop continues until user submits a valid response
    while(true){
        // Checks if the user's answer is no
        if (playAgain.toUpperCase() === `N`){
            // Alerts the user that the game is over and the game does NOT restart
            alert(`Thanks for playing`);
            restartGame = false;
            break;
            // Checks if the user's answer is yes
        }else if (playAgain.toUpperCase() === `Y`){
            // The game restarts
            break;
        }else{
            playAgain = prompt(`Pleasse enter Y or N.`);
        }
    }
}
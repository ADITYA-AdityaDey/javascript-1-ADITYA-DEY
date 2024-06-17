// Guess The Number Function
function guessTheNumber(userInputDifficulty) {
    let randomNumber;
    let attempts = 0;
    let maximumAttemts;

    // Set The Difficulty Parameters
    switch (userInputDifficulty){
        case `easy`:
            maximumAttemts = 5;
            randomNumber = Math.floor(Math.random() *10) + 1; // range 1-10
            // console.log(randomNumber);
            break;
    }
}

















// Get User Input Difficulty

let userInputDifficulty = prompt(`Choose Difficulty: (easy, medium, hard)`).toLowerCase();
guessTheNumber(userInputDifficulty);
//console.log(userInputDifficulty);


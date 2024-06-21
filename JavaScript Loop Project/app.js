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
        
        case `medium`:
            maximumAttemts = 7;
            randomNumber = Math.floor(Math.random() *100) + 1; // range 1-100
            // console.log(randomNumber);
            break;
        
        case `hard`:
            maximumAttemts = 10;
            randomNumber = Math.floor(Math.random() *1000) + 1; // range 1-1000
            // console.log(randomNumber);
            break;
        default:
            console.error(`Invalid Difficulty Level choose "easy", "medium", "hard"`);
    };
};

















// Get User Input Difficulty

let userInputDifficulty = prompt(`Choose Difficulty: (easy, medium, hard)`).toLowerCase();
guessTheNumber(userInputDifficulty);
//console.log(userInputDifficulty);


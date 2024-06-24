// Guess The Number Function
function guessTheNumber(userInputDifficulty) {
    let randomNumber;
    let attempts = 0;
    let maximumAttemts;
    let rangeLimit;

    // Set The Difficulty Parameters
    switch (userInputDifficulty){
        case `easy`:
            rangeLimit = 10;
            maximumAttemts = 5;
            randomNumber = Math.floor(Math.random() *10) + 1; // range 1-10
            console.log(randomNumber);
            break;
        
        case `medium`:
            rangeLimit = 100;
            maximumAttemts = 7;
            randomNumber = Math.floor(Math.random() *100) + 1; // range 1-100
            console.log(randomNumber);
            break;
        
        case `hard`:
            rangeLimit = 1000;
            maximumAttemts = 10;
            randomNumber = Math.floor(Math.random() *1000) + 1; // range 1-1000
            console.log(randomNumber);
            break;
        default:
            console.error(`Invalid Difficulty Level choose "easy", "medium", "hard"`);
    };


    // Input your Number
    while (attempts < maximumAttemts){
        let userInputGuessValue = parseInt(prompt(`Guess a Number between 1 to ${rangeLimit}. You have ${maximumAttemts - attempts} Attempts.`));
        attempts++;

        if (userInputGuessValue === randomNumber){
            console.log(`Congratulations You Guessed the Number in`, attempts, `Attempts.`);
        }


        console.log(userInputGuessValue);
    }
};

















// Get User Input Difficulty

let userInputDifficulty = prompt(`Choose Difficulty: (easy, medium, hard)`).toLowerCase();
guessTheNumber(userInputDifficulty);
//console.log(userInputDifficulty);
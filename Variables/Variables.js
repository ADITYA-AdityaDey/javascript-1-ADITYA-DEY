// By convention, JavaScript variable names are written in camelCase

let paperName = "Desgorithmign & Analysis of Algorithm";
console.log(`${paperName} is my favourite Paper, ${paperName} is in 4th Semester.`);



// Variables are Containers for Storing Data
/*
JavaScript variables can be decleared in 4 ways
    *Automatically
    *Using var
    *Using let
    *Using const
*/



/*
When to Use var, let, or const?

    1. Always declare variables

    2. Always use const if the value should not be changed

    3. Only use let if you can't use const

    5. Only use var if you MUST support old browsers
*/


//////////////////////////////////////////////


// Automatically
/*
    *** They are automatically declared when first used

    score1 = 100;
    score2 = 90;
    totalScore = score1 + score2;
    console.log(totalScore);

    *** It is considered good programming practice to always declare variables before use.
*/

//////////////////////////////////////////////

// var
/*
    * I can re decleare
    * I can re assign
    * Global Scope
*/

var score = 1;
var score = 8;
score = "FIVE";


{
    var underBlock = 90;
    console.log(score);
}

console.log(underBlock);


//////////////////////////////////////////


// let
/*

*/
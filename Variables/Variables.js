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
    * I can't re decleare
    * I can re assign
    * Block Scope
    * let is not hosted
*/

let appUser1Code = 1;
appUser1Code = 10;

{
console.log(appUser1Code);
}

// {
//     let appUser2Code = 2;
// }
// console.log(appUser2Code); (Out side block no acces using let)


// console.log(appUser1Age);
// let appUser1Age = 20;


///////////////////////////////////////////////////////////////////////


// const
/*
    * I can't re decleare
    * I can't re assign
    * Block Scope
    * const is not hosted
*/

const appUser3Name = "ADITYA DEY";
// appUser3Name = "ADI DEY"

{
// const appUser4Name = "AD";
console.log(appUser3Name);
}

// console.log(appUser4Name);


// console.log(appUser5Name);
// const appUser5Name = "A";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const with object & const with array

    // When I decleare an object with const, I cannot assign new object to that variable but i can modify the properties of the object.
    // Similarly, with arrays, when I declare an array with const, I cannot assign a new array to that variable, but I can modify its elements. 

    const userDetails = {
        userCode: 1,
        userName: "ADITYA DEY",
        userAge: 20,
    };
    userDetails.userEmail = "abc123@email.com";
    userDetails.userCode = 2;

    console.log(userDetails);
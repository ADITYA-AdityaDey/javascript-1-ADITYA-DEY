// Check Even or Odd

function isEvenorOdd(numberForEvenOdd){
    return numberForEvenOdd % 2 === 0;
}

console.log(isEvenorOdd(98));
console.log(isEvenorOdd(99));



// Factorial of a Number
function facto(numberForFactorial){
    if (numberForFactorial === 0){
        return 1;
    }
    return numberForFactorial * facto(numberForFactorial - 1);
}

console.log(facto(9));



// Convert Celsius to Fahrenheit

function celToFahFun(celsiusValue){
    return (celsiusValue * 9 / 5) + 32;
}

console.log(celToFahFun(32));



// Find Maximum number in an array
function findMaxFun(arrayOfNumbers){
    return Math.max(...arrayOfNumbers);
}
console.log(findMaxFun([27, 43, 34, 45, 8, 90, 100, 200]));
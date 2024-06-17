/*
    Write a JavaScript function that reverses a number.
        Sample Data and output:
        Example number = 565758
        Expected Output: 857565
*/


function reverseNumber(number) {
    
    number = number.toString();

    return number.split(``).reverse().join(``);
}

console.log(Number(reverseNumber(565758)));







/*
    Write a JavaScript function that reverses a number.
        Sample Data and output:
        Example number = 987665
        Expected Output: 566789
*/

function reverseNum(anotherNumber) {

    anotherNumber = anotherNumber + ``;

    return anotherNumber.split(``).reverse().join(``);

}
console.log(Number(reverseNum(987665)));
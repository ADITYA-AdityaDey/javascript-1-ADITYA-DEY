// Reverse a String

function reverseFun(stringForReverse) {
    return stringForReverse.split(``).reverse().join(``);
}

console.log(reverseFun(`JavaScript`));



// Check if a String is Palindrome

function isPalindromeFun(stringForPalindromeCheck) {
    const reversedString = stringForPalindromeCheck.split(``).reverse().join(``);
    return stringForPalindromeCheck === reversedString;
}

console.log(isPalindromeFun(`racecar`));
console.log(isPalindromeFun(`fullstack`));
// Reverse String

function reverseSringFun(StringForReverse) {
    return StringForReverse.split(``).reverse().join(``);
}

let reversedString = reverseSringFun(`JavaScript Strings`);

console.log(reversedString);



// Check if a String is a Palindrome

function palindromeFun(stringForPalindromeCheck) {
    let reversedString = stringForPalindromeCheck.split('').reverse().join('');
    return stringForPalindromeCheck === reversedString;
}
console.log(palindromeFun(`madam`));
console.log(palindromeFun(`JavaScript`));



// Find the Longest Word in a Sentence

function longestWordFun(SentenceForLongestWordChck) {
    let words = SentenceForLongestWordChck.split(' ');
    let Longest = words.reduce((a, b) => a.length > b.length ? a:b);
    return Longest;
}

console.log(`Longest Word is: `,longestWordFun(`Data Structures & Algorithms`));
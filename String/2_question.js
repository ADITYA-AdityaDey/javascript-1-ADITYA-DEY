// Convert the First Letter of Each Word to Uppercase

function capitalizeFirstLetterFun(stringForCapitalize) {
    return stringForCapitalize.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeFirstLetterFun(`java script`));
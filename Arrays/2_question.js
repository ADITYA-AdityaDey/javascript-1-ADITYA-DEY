// Remove Duplicates

let arrWithDupli1 = [21, 23, 21, 45, 78, 45, 94, 54, 34];

let arrWithNoDupli1 = [...new Set(arrWithDupli1)];

console.log(arrWithNoDupli1);



let arrWithDupli2 = [98, 64, 84, 53, 84, 43, 43, 78, 98];

let arrWithNoDupli2 = [...new Set(arrWithDupli2)];

console.log(arrWithNoDupli2);



// Merge Two Arrays

let array1forMerge = [10, 20, 30, 40, 50];

let array2forMerge = [60, 70, 80, 90, 100];

let mergeArray1 = array1forMerge.concat(array2forMerge);

console.log(`Merged Array: `, mergeArray1);



let array3forMerge = [`FullStack`, `Devops`];

let array4forMerge = [`Cloud`];

let mergeArray2 = array3forMerge.concat(array4forMerge);

console.log(mergeArray2);



// Flatten a Nested Array

let arrayforFlatten = [10, 20, [30, 40], 50, 60, [70, [80, 90, 100]]];

let flattendArray = arrayforFlatten.flat(2);

console.log(flattendArray);



// Sort an Array

let arrayForSorting = [100, 90, 50, 80, 70, 60, 40];

let sortedArray = arrayForSorting.sort((a, b) => a-b);

console.log(sortedArray);
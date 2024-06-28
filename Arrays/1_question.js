// Find Maximum Element

function maxElement(array){
    return Math.max(...array);
}

elements = [23, 64, 84, 90];
console.log(maxElement(elements));



// Reverse an Array

function reverseArrFun(array){
    return array.slice().reverse();
}

elementsofArray = [`J`, `a`, `v`, `a`, `S`, `c`, `r`, `i`, `p`, `t`];

console.log(reverseArrFun(elementsofArray));
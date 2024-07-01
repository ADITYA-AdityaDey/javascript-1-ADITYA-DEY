// Accessing Elements in a 2D Array

const arrayMultiD = [
    [`Employee 1`, `Employee 2`, `Employee 3`],
    [1, 2, 3],
    [`xyz@email.com`, `abc@email.com`, `xay@email.com`]
];

console.log(arrayMultiD[0][2]);
console.log(arrayMultiD[1][1]);
console.log(arrayMultiD[2][0]);



// Modifying Elements in a 2D Array

let matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

matrix[0][2] = 25;

console.log(matrix);



// Looping Through a 2D Array

let anotherMatrix = [
    [100, 90, 80],
    [70, 60, 50],
    [40, 30, 20]
];

for (let i = 0; i < anotherMatrix.length; i++) {
    for (let j = 0; j < anotherMatrix[i].length; j++) {
        console.log(anotherMatrix[i][j]);
    }
}



let newMat = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];

for (let i = 0; i < newMat.length; i++){
    for (let j = 0; j < newMat[i].length; j++){
        console.log(newMat[i][j]);
    }
}
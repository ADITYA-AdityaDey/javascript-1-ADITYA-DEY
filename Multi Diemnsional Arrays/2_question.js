// create a 3D array

let threeDArray = [
    [
    [10, 20, 30],
    [40, 50, 60]
    ],
    [
        [70, 80, 90],
        [100, 110, 120]
    ]

];


console.log(threeDArray);

console.log(threeDArray[0][1][0]);



// Sum of Elements in 2D Array

let matrix = [
    [10, 20, 30],
    [40, 50, 60]
];

let sum = 0;
for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix.length; j++) {
        sum += matrix[i][j];
    }
}

console.log(`Sum of Elemnets in 2D Arrya: `, sum);
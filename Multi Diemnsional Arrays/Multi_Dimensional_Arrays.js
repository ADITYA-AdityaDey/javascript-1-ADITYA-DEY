const arr = [
    ["JavaScript", "JAVA"], // 0 index array
    ["C", "PYTHON"], // 1 index array
    ["FULL STACK", "MERN"], // 2 index array
];


console.log(arr);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(arr[0][0]);
console.log(arr[0][1]);

console.log(arr[1][0]);
console.log(arr[1][1]);

console.log(arr[2][0]);
console.log(arr[2][1])



for (let i = 0; i < 3; i++){
    console.log(arr[i]);
};

for (let a = 0; a < 3; a++){
    for (let j = 0; j < 2; j++){
        console.log(arr[a][j]);
    };
};
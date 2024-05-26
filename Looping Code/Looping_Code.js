// For Loop
for (let i = 1; i<=10; i++) {
    console.log("Iteration Number : " + i);
};



let progLang = ['JavaScript', 'Python', 'Go'];
progLang.push('C');

for (let a = 0; a < progLang.length; a++){
    console.log(progLang[a]);
};






// For In Loop
let userDetails = {
    name: 'Aditya',
    age: 20,
    job: 'FullStack Development',
};

for (let k in userDetails){
    capLetter = k.charAt(0).toUpperCase() + k.slice(1);
    console.log(capLetter + ': ' + userDetails[k]);
};






// forEach Method
progLang.forEach(function (element){
    console.log(element);
});






// For of Loop
const rollArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(const roll of rollArray){
    console.log('For of : ' + roll);
};



let paper = ["DSA", "OS", "DBMS", "Computer Networks"];

for (let r of paper){
    console.log(r);
}






// While Loop
let j = 1;
while (j <= 10) {
    console.log("while : " + j);
    j++;
};






// Do While Loop
let x = 1;
do{
    console.log("do while : " + x);
    x++;
} while (x <= 10);


let y = 11;
do{
    console.log("do while : " + y);
    y++;
} while (y <= 10);
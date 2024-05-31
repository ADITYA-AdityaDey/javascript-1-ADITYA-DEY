const progLangArr1 = ["JavaScript", "c", "c++", true, 90];

const progLangArr2 = new Array ("JavaScript", "c", "c++", true, 90);



console.log(progLangArr1);
console.log(progLangArr2);

console.log(progLangArr1[1]);



progLangArr1[2] = "JAVA";
console.log(progLangArr1);



console.log(progLangArr1.toString());

console.log(typeof(progLangArr1));

console.log(progLangArr1.length);

console.log(progLangArr1[0]);

console.log(progLangArr1[4]);

progLangArr1[5] = 99;
console.log(progLangArr1);
console.log(progLangArr1[progLangArr1.length - 1])

progLangArr1[6] = false;
console.log(progLangArr1);
console.log(progLangArr1.length);
console.log(progLangArr1[progLangArr1.length - 1]);

progLangArr1[10] = "react.js";
console.log(progLangArr1);
console.log(progLangArr1.length);






const user = [];
user["firstName"] = "Aditya";
user["lastName"] = "Dey";
console.log(user);
console.log(user.length);

user[2] = 20;
console.log(user);
console.log(user.length);

console.log(user[0]);
console.log(user[1]);
console.log(user[2]);





// const anotherArray = [10];

/*
const anotherArray = new Array(10);
console.log(anotherArray);
console.log(anotherArray.length);
*/

const anotherArray = new Array(10, 20); // Add element 20
console.log(anotherArray);
console.log(anotherArray.length);






// Array Methods
const paper = ["DSA", "DAA", "OS", "DBMS", "COMPUTER NETWORKING"];


console.log(paper.at(1)); // Introduce in Latest Version

console.log(paper.toString());
console.log(paper.join(" $ "));

paper.pop();
console.log(paper);

paper.push("INTERNET OF THINGS");
console.log(paper);

paper.unshift("FORMAL LANGUAGE & AUTOMATA THEORY");
console.log(paper);

paper.shift();
console.log(paper);



const arr1 = [10, 9, 8, 7, 6];
const arr2 = [5, 4, 3, 2, 1];

const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = [70, 80, 90];
const arr5 = arr3.concat(arr4);
console.log(arr5);






const newArray = [
    [1, 2, 3,4, 5, [20, 30, 40]], // just first step arrays can flat in this process.
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
];
console.log(newArray);

console.log(newArray.flat());






console.log(paper);

paper.splice(3, 0, "C", "PYTHON");
console.log(paper);

paper.splice(3, 2);
console.log(paper);
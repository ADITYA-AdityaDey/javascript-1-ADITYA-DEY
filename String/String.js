const userFullName = "First User";

const userCountry = 'India';



const sen1 = "I'm from India";

const sen2 = '\nTeacher says "some text"';

const sen3 = 'I\'m from India';            // \ use for ingnoring '

const sen4 = "\nTeacher says \"some text\"";        // \ use for ignoring "


console.log(userFullName, userCountry);
console.log(sen1, sen2);
console.log(sen3, sen4);






let info1 = "Comterputer " + "Science";
console.log(info1);

let info2 = userFullName + " " + userCountry;
console.log(info2);

let info3 = "I'm " + userFullName + " I'm from " + userCountry;
console.log(info3);






// `` (Introduced with ES6)

let userInfo = `I am ${userFullName}, I am from ${userCountry}.`;
console.log(userInfo);


let totalScore = `Total Score of Two Paper is ${50 + 40}`;
console.log(totalScore);


let fullstackTechnology = `
                  Frontend
                  Backend
                  Devops
                  Cloud
                  `;
console.log(fullstackTechnology);






const user2Name = new String("Second User");
console.log(user2Name);
console.log(typeof(user2Name)); // I make it object
console.log(user2Name[2]);
// user2Name[2] = "r"; // value not changeble using index(key value pair) here






const user3Name = "Third User";
console.log(user3Name);

console.log(user2Name == user3Name);






////////////////////////////// String Methods //////////////////////////
const appUser = `APP USER1`;


console.log(appUser.length);

console.log(appUser.charAt(2));

console.log(appUser.indexOf(`R`));

console.log(appUser.toLowerCase());

console.log(appUser.slice(4)); // slice() upport - value but substring doesn't

console.log(appUser.substring(4));

console.log(appUser.slice(0, 3)); // end point = end point - 1

console.log(appUser.substring(0, 10));

console.log(appUser.slice(6, 1)); // output is blank

console.log(appUser.substring(6, 1)); // In substring JavaScript Engine (6, 1) is Automatically swap to (1, 6)



const someText = `   WEB APPLICATION   `;
console.log(someText.trim());
console.log(someText.trimStart());
console.log(someText.trimEnd());



const url = `https://appuser.com/profile%20details`;
console.log(url.replace(`%20`, `-`));



console.log(appUser.split(` `));
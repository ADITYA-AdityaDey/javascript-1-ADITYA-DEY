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



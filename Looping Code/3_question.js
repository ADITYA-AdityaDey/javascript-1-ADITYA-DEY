/*
    Iterate through all numbers from 1 to 50. Print the following:

        *For multiples of 3 print “Java”
        *For multiples of 5 print "Script"
        *For multiples of 3 and 5 print "JavaScript"
*/


for (let m = 1; m <= 50; m++){
    if (m % 3 == 0 && m % 5 == 0){
        console.log(`JavavScript`);
    } else if (m % 3 == 0){
        console.log(`Java`);
    } else if (m % 5 == 0){
        console.log(`Script`);
    }
}
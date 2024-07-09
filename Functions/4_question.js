// sort array of objects by property

const appUsers = [
    { userName: `AppUser 5`, userCode: 5000},
    {userName: `AppUser 3`, userCode: 3000},
    {userName: `AppUser 1`, userCode: 1000},
    {userName: `AppUser 4`, userCode: 4000}
];

function sortByuserCode(inputArray) {
    return appUsers.sort((a, b) => a.userCode - b.userCode);
}

console.log(sortByuserCode(appUsers));
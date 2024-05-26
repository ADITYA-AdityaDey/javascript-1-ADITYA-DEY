function greet(userName) {
    console.log("Good Morning : " + userName)
}

greet("Aditya")
greet("Bruce")
greet("Diana")




function totalScoreFun(score1, score2) {
     return score1 + score2
}

const AdityaTotalScore = totalScoreFun(98, 99)
const BruceTotalScore = totalScoreFun(30, 30)
const DianaTotalScore = totalScoreFun(76, 53)

console.log(AdityaTotalScore)
console.log(BruceTotalScore)
console.log(DianaTotalScore)




const arrowSum = (value1, value2) => value1 + value2

const totalValue = arrowSum(50, 40);
console.log(totalValue)
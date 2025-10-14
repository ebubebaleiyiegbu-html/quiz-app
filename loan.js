let minIncomeForDuplex = 60000;
let minCreditScoreForDuplex = 700;

let minIncomeForLand = 45000;
let minCreditScoreForLand = 680;

let minIncomeForCar = 30000;
let minCreditScoreForCar = 700;

function getLoanMessage(annualIncome, creditScore){
    if(annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
        return "You qualified for a Duplex loan.";
    }
    if(annualIncome >= minIncomeForLand && creditScore >= minCreditScoreForDuplex) {
        return "You qualify for land loan.";
    }
    if(annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
        return "You qualify for a car loan."
    }
}
const duplexLoanMsg = getLoanMessage(85000, 850);
console.log(duplexLoanMsg);
const landLoanMsg = getLoanMessage(65000, 690);
console.log(landLoanMsg);
const carLoanMsg = getLoanMessage(45000, 660);
console.log(carLoanMsg);
const noLoanMsg = getLoanMessage(25000, 550);
console.log(noLoanMsg);
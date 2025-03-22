/*1. Депозирана сума – реално число в интервала [100.00 … 10000.00]

2. Срок на депозита (в месеци) – цяло число в интервала [1…12]

3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]*/

//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12//

function Calculatored(input) {

let depositSum = Number(input[0]);
let timeDeposit = Number(input[1]);
let yearProcent = Number(input[2]);


let annualIncreaseDecimal = yearProcent / 100;

let total = depositSum + timeDeposit * ((depositSum * annualIncreaseDecimal) / 12);

console.log(total);

}

Calculatored(["200","3","5.7 "]);
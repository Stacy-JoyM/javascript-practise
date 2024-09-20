// QUESTION 4

let isEmployed = true;
let credit_score = 750;
let self_employed = false;
let yearsInBusiness = 3;


if ((isEmployed && credit_score >= 700) || (self_employed && credit_score >= 650 && yearsInBusiness>=2)){
    console.log("Eligible for loan")
}
else (
    console.log("Not eligible for a loan")
)
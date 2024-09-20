let a = 15
let b = 5;
let c = 20;
let name = "Kelvin";
console.log((a > b && !(c < b || name !== "kelvin")) || (a + b * 2 < c && !false))

//In the above, the first expression in the bracket 
// (a > b && !(c < b || name !== "kelvin")) evaluates to false.
//The first nested expression a>b evaluates to true and the second expression evaluates false
// due to negation. True and false makes false. 

//The second expression 
//(a + b * 2 < c && !false) evaluates to false 
//This is because the nested expression evalaute to false and true hence ultimate false

// Both right and left expression of || evaluate to false. 
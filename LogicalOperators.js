//Logical OPERATORS 
//AND &&
//OR |
//NOT !

let x = 7, y = 8, z = 1, a = 2

let result = x > y 
console.log(result); 

let result2 = x < y
console.log(result2);

let result3 = (x < y && x < z)
console.log(result3);

let result4 = (x < a || x < z)
console.log(result4); 

let b = 7, c = 2, d = 5

let result5 = (b < c || b < d)
let n = !result5
console.log(result5, n); 

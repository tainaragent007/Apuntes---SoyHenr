// Conversion and coercion
//#1 Conver your data 
//Num    ----> String
//String ----> Num
//Num    ----> Boolean

//This is Explicit Conversion
// let num = String(6)

// console.log(num, typeof num);


// let nu = Number("123")
// console.log(nu, typeof nu);

//Type Coercion
//type_x |o| type_y

// let x 
// // console.log(x, typeof x);
// x = 8
// console.log(x, typeof x);
// x = x + ""
// console.log(x, typeof x);
// x = x - 2
// console.log(x, typeof x);

// //boolean, exclamation means no 

// x = !x
// console.log(x, typeof x);

// //Trusty value
// console.log(Boolean(7));
// console.log(Boolean(!7));

// //Falsey value
// console.log(Boolean(null));
// console.log(Boolean(undefined));

//Boolean 
//0 = false 
//all the other nums are true

//null is a falsy value
//all other nums are trusy value

//falsey values are 
//0; -0; 0n; "",'',``; null
//undefined; Nan; document.all
// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(0n));
// console.log(Boolean(''));
// console.log(Boolean(""));
// console.log(Boolean(``));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

let x = parseInt("123 Navin");
console.log(x);
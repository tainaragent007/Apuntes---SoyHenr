//Else if

let num1 = 10;
let num2 = 9;
let num3 = 7;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is greater");
}
else if (num2 > num1 && num2 > num3) {
    console.log("num2 is greater");
}
else {
    console.log("num3 is greatest");
}
console.log("Bye...");

//Finding if a number is even or odd
function oddEven(num) {
    if(num % 2 === 0) {
      num = 'even';
    }else {
      num = 'odd';
    }
    return num;
  }
  console.log(oddEven(5));
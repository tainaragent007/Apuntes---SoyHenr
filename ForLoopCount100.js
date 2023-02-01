//Count from 1 to 100
// and print all numbers that 
// are divisible with 3

// for(let i=1;i<=100;i++){
//     if(i%3===0)
//         console.log(i);
// }


// While loop when you know the condition
// when don't know the starting or ending point 
// let num = 54321

// while(num>0)
// {
// console.log(num%10);
// num = parseInt(num / 10)
// }

//assingment 
let num = 2345678
let reverse = "";
while (num>0) {
    console.log(num%10); 
    reverse+=num%10;
    num = parseInt(num/10);
}
convert = parseInt(reverse);
console.log(convert, typeof convert);

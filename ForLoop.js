// For Loop
// repeat this statement 5 times
// initialize, condition, increment 

// instead of writing 
// let i = 1;

// while(i<=5)
//{
//  console.log("Hi", i);
//  i++;
//}

for (let i=1;i<=5;i++) {
    console.log("Hi", i)
}

// You can change the order and write 
// somewhere else is ok 
// let i=1;
// for (;i<=5;) {
//    console.log("Hi", i)
//  i++;
// }

//Nested Loop 
//a loop inside a loop

for(let i=1;i<=5;i++)
{
    console.log('Hi', i);

    for(let j=1;j<=5;j++)
    console.log('Hello', j);
}
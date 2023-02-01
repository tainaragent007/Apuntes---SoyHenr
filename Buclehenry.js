
//BUCLE FOR 
// var arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

function encontrarLetraP(string) {
    var letras = string.split('');

    for(let i = 0; i < letras.length; i++) {
        if(letras[i] === 'p') {
            console.log('Si contiene a P');
        }
    }
}
encontrarLetraP('JavaScript');

encontrarLetraP('Henry');

//WHILE

var arr = [];

while (arr.length < 5) {
    arr.push('BOOM');
}

console.log(arr);


var ar = [];
var n = 1;

while(n < 3) {
    ar.push(Math.random());
}
console.log(ar);
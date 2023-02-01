// Bucle For 
// Sabemos con antelacion la cantidad maxima de pasos 
// que queremos ejecutar

var suma = 0;
// suma = suma +1; 
// suma = suma +2; 
// suma = suma +3; 
// suma = suma +4; 

// console.log(suma)

for (var i=0 ; i<5 ; i++) {
    suma = suma + i;
    console.log('Variable de interacion ', i);
}
console.log('Variable Suma: ', suma)

// Bucle While 
// No sabemos con certeza de cuantos pasos vamos a 
// necesitar hasta finalizar la ejecucion.

var suma = 0; 

while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
}
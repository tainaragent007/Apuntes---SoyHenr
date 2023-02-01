//Funcion: sumaTres
var sumaTres = (x) => {
    return x + 3;
}

//Funcion: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

//Predencia de valores
var a = 1;
var b = 2; 
var c = a = b; 
console.log (c); 

//Funcion: otraFuncion
function otraFucion() {
    return(
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " +
        cuidadoConElConsoleLog('Camilo')
    );
}

//Funcion: cuidadoConElReturn
function cuidadoConElReturn (nombre) {
    return nombre;
    console.log(nombre);
}
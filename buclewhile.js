// Bucle    WHILE
while(unaCondicion) {
    //corre algun codigo
}

// Ejemplo de como podemos imprimir los numeros 
// 1 al 5 utilizando un while loop
var count = 0
while(count < 6) {
    console.log("count es: "+count)
    count++;
}

// Ejemplos sencillos 0 al 100 
for(var i = 0; i < 100; i++) {
    //bloque de codigo
}
// ejemplo con i 
var i = 0;
while( i < 100) {
    console.log(i);
    i++;
}

// ejemplo con j pero al infinito 
// va a seguir para siempre hasta 
// que explote la computadora o 
// que se acabe la bateria
var j = 0;
while(j < 100) {
    console.log(j);
}

// ejempl con j pero que si pare
var j = 0;
while(j < 100) {
    console.log(j);
    j++;
}

// ejemplo con matriz
// j++ ---> j = j + 1
// i++ ---> i = i + 1
function matriz(n, m){
var j = 0; 
var i = 0; 
while(i < n) {
    while(j < m) {
        console.log(i, j);
        j = j + 1;
        }
    j = 0;
    i = i + 1;
    }
}
// con el for se hacia el j = 0 sin saber
// osea ya estaba escrito
// for ayuda mucho por que hay 
// menos chances de error, porque 
// ya esta indicando la variable que 
// tiene que tener la parada. en el 
// while hay que poner la parada 
for(var j = 0; j < m; j++) {
    console.log(j)
}


// matriz visualization  
//  0    1   2
//0 a    b   c
//1 e    f   g

// matriz pic
// i   j   (i, j)
// 0   0   a
// 0   1   b
// 0   2   c
// 1   0   e
// 1   1   f
// 1   2   g

// Cual es la diferencia entre el 
// WHILE y el FOR

// En FOR ya sabes la condicion de parada
// ya sabes cuando parar
for(var j = 0; j < m; j++) {
    console.log(j)
}

// WHILE se usa cuando no se 
// la condicion de parada 
// segui segui hasta que esta 
// condicion pare de cumplirse
function matriz(n, m){
    var j = 0; 
    var i = 0; 
    while(i < n) {
        while(j < m) {
            console.log(i, j);
            j = j + 1;
            }
        j = 0;
        i = i + 1;
        }
    }
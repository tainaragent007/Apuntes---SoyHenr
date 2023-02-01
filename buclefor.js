for(var i = 0; i <= 100; i++) {
    //bloque de codigo
}

// bucle dentro de un bucle
// imprime los numeros pares del 1 al 200
// cuando llega a 200 para, y luego imprime j
// y de ahi retorna
function imprime1aN(n) {
    for(var i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
        if(i > 200) {
            for(var j = 0; j < 10; j++) {
                console.log(j);
        }
        return;
        }
    }
}


// Imprimir una matriz 
// n filas
// m columnas 
function matriz(n, m) {
    for(var i = 0; i < n; i++) {
        for(var j = 0; j < m; j++) {
            console.log(i+ ','+j);
        }
    }
}

// columna  0   1   2   3
// fila 0   1   2   3   4
// fila 1   5   6   7   8
// fila 2   9   1   2   3

// i    j
// 0   0
// 0   1
// 0   2
// 0   3
// 1   0
// 1   1
// 1   2
// 1   3
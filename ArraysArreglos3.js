//Metodos de insercion
// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

//console.log(colores);

// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
var existeDali = pintores.includes('Dali');

console.log(existeDali);

//EVERY 
var numeros = [ 1, 6, 8, 9, 43];
var cumplenCondicion = numeros.every((num) => {num > 5});

console.log(cumplenCondicion);

//SPLIT 
var palabra = 'Henri';
var palabraSeparada = palabra.split(''); 

console.log(palabraSeparada);

//JOIN 
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH
var num = [1, 2, 3, 4];
num.forEach((num) => {console.log(num);})

//MAP
var numeritos = [1, 2, 3, 4];
var masUno = numeritos.map((numeritos)=>{return numeritos +1});

console.log(masUno);
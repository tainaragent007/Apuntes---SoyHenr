//ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}}
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}}
persona.nombre = 'Martin';
console.log(persona.nombre);

// CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

// BORRAR
delete autos.marcas; 
console.log(autos); 
// var deportes = {
//     conBalon: ['Football', 'Basketball', 'Rugby'],
//     sinBalon: ['Boxeo', 'Surf', 'Trekking'],
// };

//Acceder
var persona = { nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}};

// console.log(persona.edad); //26

// assignar propieadades
persona.nombre = 'Chuky';
// console.log(persona.nombre); 

persona.edad = 32
// console.log(persona.edad);

// Crear 
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];

console.log(autos);

// ahora a eliminar propiedades 

delete autos.marcas;
// console.log(autos);

var misFunciones = {
    saludar: function() {
        console.log("Hola")}}

console.log(misFunciones);
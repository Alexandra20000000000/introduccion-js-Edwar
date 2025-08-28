// alert("Estoy en hello word");
//covenciones para nombrar variables

//camelCase
// UpperCamelCase  => Se usa para nombrar las clases en JS
// lowerCamelCase  => Se usa para nombrar las variables en JS 
// SCREAMING_SNAKE_CASE  => Se usa para nombrar las variables constantes
// caja-kebab  => Generalmente usado para para nombrar archivos multimedia en JS

// Snake case  => Generalmente usado para nombrar variables en el lenguaje phyton 

// Caja-De-Tren  =>  Variante del Kebab-case

// Ya NO se usa actualmente var para declarar las variables, actualmente se usa let
// En JS No es obligatorio indicar el tipo  de varibale 
// JS SE PUEDE O no usar el punto y coma al final de una sentencia.

var product = 'sensor-1';
var product2 = "sensor-1";

console.log(product);
console.log(product2);

//No se puede iniciar una variable con un guión medio
//var -sensor = "sensor -3"; 


// No se puede iniciar una variable con número 
// Var 1sensor = "sensor-4";

// Si está permitido iniciar una variable con guión al piso 
var _sensor = "sensor-5";


console.log(_sensor);

// Crear una variable de las tres formas distintas 

//var sensor10 = "sensor de lluvia";
//const sensor10 = "sensor de lluvia"; 
let sensor10 = "sensor de lluvia";

console.log(sensor10);

// Ejemplo con var
// No me indica error por duplicidad de variables
//var sensor11 = "sensor humedad";
//var sensor11 = "sensor de calor"; 

//console.log/(sensor11);

//let  no permite duplicidad de variables
//let sensor12 = "Sensor de velocidad"
//let sensor12 = "Sensor de luz"

//No muestra error por falta de inicialización
//console.log(userName);
//var username: "Alexa"


//console.log(userName);
//let userName = "Alexa"; 


// Usando la declaración const No se puede cambiar su valor
const maxSize = 1024; 
maXsize = 2048;  

console.log(maxSize);


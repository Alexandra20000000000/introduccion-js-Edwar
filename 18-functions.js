// Funtions in JS
// ¿Qué es Hoisting? Hoisting en JS es el comportamiento por defecto en el que el interprete 
// "MUEVE" las declaraciones (de variable y funciones) a la parte superior de su ámbito (scope) antes de ejecutar el código.
//Esto significa  que pues al usar una función o varianle declarada, antes de escribirla en el código.


// Declaración de una función  /add-sumar no se puede decir suma resta, multiplicación, se debe decir en AR ER O IR osea se debe de decir multiplicar sumar o restar etc
// Como esta Función está declarada se puede llamar antes o después de su creación.
add();

function add(){
console.log(10 + 10);
};

// =============================================================

//La expresión de una función

const sumar2 =function(){
    console.log(3 + 3);
};

//Está Expresión de la función puede ser declarada en este orden, solo puede llamarse después de su creación
sumar2(); 


// =============================================================
// IIFE (Inmediately Invoked Function Expression), esta función se llama a si misma.
// Son útiles para proteger las variables para que no se mezclen con las variables de otros archivos. 
(function(name){
    console.log(`Hello ${name}`);
})('Laura');

console.log(client);

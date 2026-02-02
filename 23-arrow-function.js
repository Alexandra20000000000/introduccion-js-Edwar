// Arrow function
// En JS es una forma más corta de escribir funciones usando la sintaxis () =>

// Sintaxis más breve, ideal para funciones pequeñas
// NO tiene su propio this, hereda el this del contexto donde se define.


const add = function(){
    console.log(16 + 3);
}

add();

// Función con parámetros
const add2 = function(num1, num2){
    console.log(num1 + num2);
}

add2(4, 8);

// Las llaves son opcionales cuando después de la flecha solo tengo una sentencia
const add3 = (num3, num4) => console.log(num3 + num4);

add3(6, 9);

// Otro ejemplo
const learn = (tecnology) => {
    console.log(`Aprendiendo ${tecnology}`);
}
learn(`Javascript`);

//---------------------------------------------

const months = ['May', 'january', 'july', 'june', 'December', 'November', 'February'];


// Este No tiene constructor
const shoppingCart = [
    {productName: 'Smart TV 60"', price: 900},
    {productName: 'Smart TV 50"', price: 700},
    {productName: 'Tablet', price: 500},
    {productName: 'Sound-bar', price: 900},
    {productName: 'Google assistand', price: 600},
    {productName: 'Sound-bar', price: 400},
    {productName: 'Play Station', price: 800},
    {productName: 'Wii', price: 450},
    {productName: 'Mouse', price: 50},
]

months.forEach( function(month){
    if(month == 'November' || month == 'December'){
        console.log('Se verifico eb ek arreglo y el mes si existe');
    }else{
        console.log('El mes No existe');
    }
})
// =====================================

// const result = shoppingCart.some(function(product){
//     return product.price === 800;
// })

// console.log(result);

const result = shoppingCart.some(product => product.price === 800);

console.log(result);

// let and const: new ways of declaring variables.
// Arrow functions: () => {}.

// const result3 = shoppingCart.reduce(function( total, product){
//     return total + product.price;
// },0)

// console.log(result3);

const result3 = shoppingCart.reduce(( total, product) => total + product.price,0);

console.log(result3);

// =================================================

// const result3 = shoppingCart.filter(function(product){
//     return product.price < 600;
// },0)

// console.log(result3);

const result6 = shoppingCart.filter(product => product.price < 600);

console.log(result6);

// function greet(userName){
//     console.log(Hello ${userName});
// }
// console.log("Nicolas")

const greet = userName => console.log(`Hello ${userName}`);

greet('Nicolas')

// ===========================================================

const boost = num => num * num;
console.log(boost(4));

const boost2 = num => Math.pow(num, 2);
console.log(boost2(100));

// ===========================================================
// Arrow function con retorno explicito

// Se usa cueando el cuerpo de una funcion tiene llaves{}

const add5 = (num4, num5) => {
    const result7 = num4 + num5;
    return result7;
}

console.log(add5(10, 12));

// =========================================================
// const add6 = (num6, num7) =>  num6 + num7;
const add6 = (num6, num7) => {console.log(num6 + num7); num6 + num7};

console.log(add6(4, 6));

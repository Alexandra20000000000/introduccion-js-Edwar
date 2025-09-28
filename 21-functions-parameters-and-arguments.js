// Funciones parámetros y argumentos

// Loa parámetros se pasan en los parentesis de la función
function add(num1, num2){
return console.log(num1 + num2);
};

// add(5, 15); // Estos valores que se envían a la función se llaman argumentos
// add(7, 85);
// add(3, 20);
// add(7, 7);
// add(5, 5);

// ==============================================================
// Ejercicio con la expresión de una función(Ejercicio práctica)
// let add1= function() {
//     return console.log(num1 + num2);
// };
// add(5, 15);
// add(7, 85);
// add(3, 20);
// add(7, 7);
// add(5, 5);
//corrección de este ejercicio)
const add1 = (function(num3, num4){
    return console.log(num3 + num4);
});

 add(5, 15);
 add(7, 85);
 add(3, 20);
 add(7, 7);
 add(5, 5);

// ===============================================================
// Ejemplo cuando No se colocan argumentos, se coloca por defecto los valores en los parámetros.
function add2 (num7 = 35, num8 = 10){
    return console.log(num7 - num8);
};
add2();

// Función que retorna un valor 
function add4(num9, num10){
    return num9 * num10
};

const result = add4(4 , 5 );
console.log(result);

let total = 0;
// Función para calcular productos
function addShoppingCar(price){
    return total += price;
}

function calculateTax(total){
    return 1.19 * total;
};

total = addShoppingCar(800);
total = addShoppingCar(500);
total = addShoppingCar(200);
total = addShoppingCar(900);

console.log(`La suma de los productos es: ${total}`);

const totalToplay = calculateTax(total);

console.log(`La suma de los productos más el impuesto es: ${totalToplay} `);

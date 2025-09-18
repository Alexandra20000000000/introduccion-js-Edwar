// Arrays en Js

const numbers = [10, 20, 80, 100];

console.log(numbers); 

//Otra forma de visualización en tabla
console.table(numbers)

// Crear un arreglo con el constructor 
const months = new Array('may', 'January', 'July', 'June');

console.table(months);

const miArray = ['Hello', 42, true, false, null, {myName: "Laura", myJob: 'Aprendiz'}];

console.log(miArray);

// Consultar un elemento de un arreglo
console.log(typeof numbers[2]);
console.log(miArray[5]);

console.log("laura tu código tiene :" + numbers.length + "elementos");

// Un iterador con forEach

numbers.forEach(function(number){
console.log(number)
})

months.forEach(function(month){
    console.log(month)
});

miArray.forEach(function(Array){
    console.log(Array)
});
// Los booleanos tienen dos valores falso y verdadero

let age = 12;
// Mayor que 
let isOlderThan = age >= 18;

console.log(isOlderThan);

// ==========================================
let userName = "Laura";

let haveName = userName !== "";

console.log(haveName);
// ==========================================
// En Js es falsy, pero cualquier número distinto a cero es trethy.

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(10));
console.log(typeof Boolean(-5));

// ===========================================
// En JS  null or undefined siempre se convierten en false.
let nullValue = null;
let undefinedValue
console.log(Boolean(nullValue));


// ===========================================
// Los Booleanos son la base de las desiciones en los programas.
let haveAcces = true;

if (haveAcces) {
    console.log('Welcome to system')
}else{
    console.log('Defined access');
}
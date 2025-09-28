// More methodes for Arrays
//Este arreglo se creo usando el constructor
const months = new Array('May', 'January', 'July', 'June');

// Vamos a crear un arreglo con un objeto dentro
// productName son claves que tiene que recorrer el paámetro
const shoppinCart = [
    {productName : 'Smart Tv 60"', price: 900}, 
    {productName : 'Smart Tv 50"', price: 700}, 
    {productName : 'Tablet', price: 500}, 
    {productName : 'Sound-bar', price: 900}, 
    {productName : 'Google assistand', price: 600}, 
    {productName : 'Sound-bar', price: 400}, 
    {productName : 'Play Station', price: 800}, 
    {productName : 'Wii', price: 450}, 
    {productName : 'Mouse', price: 50}, 
]

// Recorrer el Arreglo con un ForEach para que me muestre todos los elementos
// En este caso month es un parámetro
months.forEach(function(month){
console.log(month);
});

// Verificar si un mes existe con un forEach
months.forEach(function(month1){
    if (month1 == 'June'){
        console.log('The month of June Existe')
    }else{
console.log("Doesn't Exist");
    }
});

// Buscar en un arreglo si algo existe, si existe devuelve True sinp un False
const result = months.includes('June');
console.log(result);

// ============================================================================

// En JS includes no funciona bien con los objetos
const result2 = shoppinCart.includes('Papel');
console.log(result2);

const num = 5 == 5;
console.log('Igualación doble', num);

// Con igualación doble solo compara el valor por eso en la consola tenemos un true.
const num2 = 5 == '5';
console.log('Igualación doble', num2);

// Con igualación triple verifica si es del mismo valor y tipo.
const num3 = 5 === '5';
console.log('Igualación triple', num3);

// ============================================================================
// En conclusión para un arreglo plano se usa includes y para un arreglo de objetos se usa some.
// const result5 = shoppinCart.some(function(product){
//     return product.productName === 'Papel'
// })

//console.log(result5)

//Hace lo mismo que el código Anterior pero más corto con a
let result5 = shoppinCart.some(product=> product.productName === "Play Station")
console.log(result5);

// ============================================================================

// Aqui llamamos al Arreglo luego debe de sumar todos los precios del carrito de compras
result5 = shoppinCart.reduce(function(total, product){
    return total + product.price
}, 0)

console.log(result5);

// Es lo mismo pero con la Funcion de flecha
result5 = shoppinCart.reduce((total, product) => total + product.price, 0)
console.log(result5);


// ==============================================================================
// Filtrar los valores menore que 700
result5 = shoppinCart.filter(function(product){
return product.price < 700
});

console.log(result5);

// Igual que el anterior pero con Arrow function
result5 = shoppinCart.filter(product => product.price < 700)
console.log(result5);


// Filtrar lo del mismo producto
result5 = shoppinCart.filter(function(product){
    return product.productName === 'Sound-bar'
});

console.log(result5);

result5 = shoppinCart.filter(product => product.productName === 'Sound-bar')

console.log(result5);
bb

// Todos Excepto un Tipo
result5 = shoppinCart.filter(function(product){
return product.productName !== 'Sound-bar'
});

console.log(result5);

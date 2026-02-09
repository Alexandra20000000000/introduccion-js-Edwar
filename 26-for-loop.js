// ForchEach map son métodos exclusivos de arreglos 

const shoppinCart = [
    {productName : 'Smart Tv 60"', color: blue}, 
    {productName : 'Smart Tv 50"', price: 700}, 
    {productName : 'Tablet', price: 500}, 
    {productName : 'Sound-bar', price: 900}, 
    {productName : 'Google assistand', price: 600}, 
    {productName : 'Sound-bar', price: 400}, 
    {productName : 'Play Station', price: 800}, 
    {productName : 'Wii', price: 450}, 
    {productName : 'Mouse', price: 50}, 
]

// Recorrer un elemento por cada elemento
//shoppinCart.forEach(function(product){
   //console.log(product);
//});

// Acceder a un elemento especifico
//shoppinCart.forEach(function(product){
//console.log(product.product.price);
//});

// Acceder a un elemento especifico
//shoppinCart.forEach(function(product){
//console.log(product.color);
//});

// Acceder a un elemento especifico
//shoppinCart.forEach(function(product){
//console.log(product.productName);
//});

// ================================================

//Ahora forEch con Arrow function

//Recorrer un arreglo por cada elemento

//shoppinCart.forEach((product) => console.log(product));
//shoppinCart.forEach((product) => console.log(product.price));
//shoppinCart.forEach((product) => console.log(product.color));
//shoppinCart.forEach((product) => console.log(product.productName));

// ================ Conmigo se siente rico Programar ===========

const array = shoppinCart.map( product => `El nombre del producto es: ${product.productName} &{product.price}`);

console.log(array)
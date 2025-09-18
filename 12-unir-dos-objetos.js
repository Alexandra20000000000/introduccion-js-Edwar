//Cuando se unen dos objetos lo ideal es NO modificar ninguno de los dos objetos, es mejor separarlos y separarlos

const product = {
    productName : "Sensor de humedad",
    price : 300,
    available : true
}

Object.freeze(product);

// Objeto que almacena las medidas
const measurements = {
    weight : "1 kg",
    measurement : "10 cm"
}

//Rest operator, consta de (...)

const newProduct = {...product, ...measurements};

console.log(product);
console.log(newProduct)


const car = {
    Weight : "450 kg",
    meaSurement : "14 cm"
}

const driver = {
    weight : "350 kg",
    length : "16 cm"
}



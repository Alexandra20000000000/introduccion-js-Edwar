// Rest operator o spread operator.
// Lo que se busca es NO NO modificar el arreglo original.

const months= ['December','November', 'March'];
console.table(months);

// Se crea un nuevo arreglo y lo unimos con otro
const neWarray = [...months, 'January'];

// El nuevo arreglo se puede agregar al final o al inicio
const neWarray2 = ['January', ... months];

console.table(neWarray2);
console.table(neWarray);

months.unshift = ('January', 'july');
months.push = (months);

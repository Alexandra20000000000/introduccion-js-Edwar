//This es una palabra reservada del sistema, osea que no se puede crear ni funciones ni variables con este nombre.

const reservation = {
    userName: "Laura", 
    lastName: "Loaiza",
    userAge: 18,
    total: 100000,
    isPaid: false,


//Los objetos puede contener funciones
information: function (params) {
console.log(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es${this.ispaid}`);

}

};

const reservation2 = {
    userName: "Andrés", 
    lastName: "Villa",
    userAge: 34,
    total: 500000,
    isPaid: false,

    //Los objetos puede contener funciones
information: function (params) {
console.log(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es${this.ispaid}`);
}

};
const reservation3 = {
    userName: "Carlos", 
    lastName: "Ospina",
    userAge: 37,
    total: 520000,
    isPaid: false,

    //Los objetos puede contener funciones
information: function (params) {
console.log(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es${this.ispaid}`);
}

};

//This en este contexto hace referencia al objeto sobre el cual se está mandando a llamar.

// Es obligatorio usar la funcion de esta manera, por esta hacer referencia al objeto que se está usando.
reservation.information();
reservation2.information();

// Si se usa arrow fuction no es capaz de leer los datos del contexto, dando como resultado undefined
reservation3.information();

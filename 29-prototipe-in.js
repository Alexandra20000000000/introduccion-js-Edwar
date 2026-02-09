//Protype
//El prototipo es como un molde o modelo de base
// Para este ejemplo, voy a guardar las funciones comunes en un lugar llamado prototype, así los objetos del mismo tipo pueden heredarlas.

function Car(brand, model, color){
    this.brand = brand;
     this.model = brand;
      this.color = brand;

}

const Car1 = new Car("Susuki", "Frons", "Yellow")
const Car2 = new Car("Honda", "Mars", "Gray")

console.log(Car1);
console.log(Car2);

//Se define la función común para todos los vehículos
Car.prototype.stop = function(){
console.log(`El carro ${this.brand} está frenando`);
};
Car1.stop();
Car2.stop();
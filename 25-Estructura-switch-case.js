// Estructura switch
// Permite evaluar una expresión y ejecutar diferentes bloques de código, según el caso que coincida.

const paymentMethod = 'card';

switch (paymentMethod) {
    case 'card':
        console.log('Pagaste con targeta');

        break;
        case 'bitCoin':
             console.log('Pagaste con Bitcoin');
            
        break;
        case 'debitCard':
              console.log('Pagaste con targeta débito');
        break;
        case 'creditCard':
             console.log('Pagaste con targeta crédito');
            
             default:
                console.log('Método de pago NO válido')
                break;
}
//=========================================================================================

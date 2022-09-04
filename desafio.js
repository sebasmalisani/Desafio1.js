let nombre = "";
let apellido = "";

let opcion = 0;
let cantidad = 0;
let subtotal = 0;
let total = 0;

const nombreDeCliente = () => {
    do {
        nombre = prompt("Ingrese su nombre: ");
        apellido = prompt("Ingrese su apellido: ");
    } while (nombre.length === 0 || apellido.length === 0);

    menu(nombre);
};

const calcularPrecio = (precio) => {
    cantidad = Number(prompt("Ingrese la cantidad que desea llevar: "));
    subtotal += precio * cantidad;
    total = (subtotal * 1.21).toFixed(2)
};

const recibo = (total) => {
    if (total !== 0) {
        alert(`Recibo: 
            subtotal: ${subtotal}
            iva: 21%
            total: ${total}
            `);
        alert("Gracias por la compra");
    } else {
        alert("Hasta luego!");
    }
};

const menu = (nombre) => {
    do {
        let precio = 0;
        opcion = Number(prompt("Hola "+nombre+" "+apellido+"!\nElegi algun producto: \n1. Coca-Cola\n2. Frutillas\n3. Carne\n4.Salir"));
        switch (opcion) {
            case 1:
                precio = 180;
                calcularPrecio(precio);
                break;
            case 2:
                precio = 500;
                calcularPrecio(precio);
                break;
            case 3:
                precio = 850;
                calcularPrecio(precio);
                break;
            case 4:
                recibo(total);
                break;

            default:
                alert("Ingrese una opcion valida.")
                break;
        }
    } while (opcion !== 4);
};

nombreDeCliente();
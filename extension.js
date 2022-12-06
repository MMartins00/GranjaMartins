//mi idea de proyecto final sera un "ecommerce" de huevos
function calcularPrecio(precioMaple, cantidadMaple, porcentajedescuento) {
    let descuento = (precioMaple * porcentajedescuento) / 100;
    let preciocondescuento = precioMaple - descuento;
    return (preciocondescuento * cantidadMaple);
}
//le pedimos al cliente que ingrese que tipo de huevos va comprar
let entrada 
do{
let color = prompt("ingrese el tipo de huevos que quiere comprar");
if (color == 1) {alert("el precio de los huevos blancos es $700");
    
} else {
    alert("el precio de los huevos colorados es $750")
}

let precioMaple = parseInt(prompt("ingrese el precio del maple"))

let cantidadMaple = parseInt(prompt("ingrese la cantidad de maples que desea"));
if (cantidadMaple <= 0) { alert("tienes que ingresar una cantidad valida"); }

else if (cantidadMaple >= 12) { alert("tiene un descuento de 10%"); }
let descuento = parseInt(prompt("ingrese el descuento (si corresponde)"))
entrada = prompt("desea continuar comprando?")} while (entrada === "No")

let preciofinal = calcularPrecio(precioMaple + cantidadMaple + descuento);
alert("el precio final de su compra es $" + preciofinal);


class Huevos {
    constructor(Color, precio) {
        this.Color = Color;
        this.precio = precio;
        this.cantidad = 200;
    }
    Vender() {
        if(this.cantidad > 0) {
            this.cantidad --;
        }
    else {
        console.log("No hay mas stock");
    }
}}

const colorados = new huevos(colorados, 750);
const blancos = new huevos(blancos, 700);

const stockhuevos = [Colorados, Blancos];
console.log(stockhuevos);

for(let producto of stockhuevos) {
    console.log(producto)
}

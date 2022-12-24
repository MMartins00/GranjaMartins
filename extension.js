class producto {
    constructor(Color, precio) {
        this.Color = Color;
        this.precio = precio;
        this.cantidad = 200;
    }
    
}

const colorados = new producto("colorados", 750);
const blancos = new producto("blancos", 700);

const stockhuevos = [colorados, blancos];
console.log(stockhuevos);
for(let producto of stockhuevos) {
    console.log(producto)
};
const arrayproductos = [colorados, blancos];
const productos = document.getElementById("productos");
arrayproductos.forEach( producto => {
    let div = document.createElement("div");
    div.innerHTML = ` <p> ${producto.Color} </p> <p> precio: ${producto.precio} </p>
    <button> agregar al carrito</button> `
    productos.appendChild(div);
})

class producto {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.cantidad = 1;
    }

}

const coloradon1 = new producto("colorado n 1", 750, 1);
const coloradon2 = new producto("colorado n 2", 650, 2);
const coloradosuper = new producto("colorado super", 850, 3);
const blancon1 = new producto("blanco n 1", 700, 4);
const blancon2 = new producto("blanco n 2", 600, 5);
const blancosuper = new producto("blanco super", 800, 6);

//Declaramos el carrito:

let carrito= [];


const arrayproductos = [coloradon1, coloradon2, coloradosuper, blancon1, blancon2, blancosuper];
const productos = document.getElementById("productos");
const verproductos = () => {
arrayproductos.forEach(producto => {
    const div1 = document.createElement("div");
    div1.classList.add("col-xl-3", "col-md-6", "col-sm-12");
    div1.innerHTML = `<div>
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${producto.nombre}</h5>
      <p class="card-text"> precio: ${producto.precio}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
      
 `
    productos.appendChild(div1);
})}

class producto {
  constructor(nombre, precio, id, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
    this.img = img;
    this.cantidad = 1;
  }

}

const coloradon1 = new producto("colorado n 1", 750, 1, "imagenes/");
const coloradon2 = new producto("colorado n 2", 650, 2);
const coloradosuper = new producto("colorado super", 850, 3);
const blancon1 = new producto("blanco n 1", 700, 4);
const blancon2 = new producto("blanco n 2", 600, 5);
const blancosuper = new producto("blanco super", 800, 6);

let carrito = []
const arrayproductos = [coloradon1, coloradon2, coloradosuper, blancon1, blancon2, blancosuper];
const productos = document.getElementById("productos");
const verproductos = () => {
  arrayproductos.forEach(producto => {
    const div1 = document.createElement("div");
    div1.classList.add("col-xl-3", "col-md-6", "col-sm-12");
    div1.innerHTML = `<div class= "contenedorproductos">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${producto.nombre}</h5>
      <p class="card-text"> precio: ${producto.precio}</p>
       
      <button class="btn btncolor" id = "botonagregar${producto.id}">Agregar al carrito </button>
    </div>
  </div>
      
 `
    productos.appendChild(div1);

    const botonagregar = document.getElementById(`botonagregar${producto.id}`);
    botonagregar.addEventListener("click", () => {
    agregaralcarrillo(producto.id)
})
  })
}
const agregaralcarrillo = (id) => {
  const productoencarrillo = carrito.find(producto => producto.id === id);
  if (productoencarrillo) {
      productoencarrillo.cantidad++;
  } else {
      const producto = arrayproductos.find(producto => producto.id === id);
      carrito.push(producto);
      console.log(carrito);
  }
}
verproductos();



const contenedorcarrito = document.getElementById("contenedorcarrito");
const btncarrito = document.getElementById("vercarrito");

btncarrito.addEventListener("click", ()=> {
  vercarrito();
})
const vercarrito = () => {
  contenedorcarrito.innerHTML = "";
    carrito.forEach(producto => {
        const cardcarrito = document.createElement("div");
        cardcarrito.classList.add("col-xl-3", "col-md-6", "col-ms-12");

        cardcarrito.innerHTML = `<div class= "contenedorcarrito">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${producto.nombre}</h5>
          <p class="card-text"> precio: ${producto.precio}</p>
          <p> cantidad: ${producto.cantidad}</p>
          <button class="btn btncolor" id = "eliminar${producto.id}">eliminar producto</button>
        </div>
      </div>
          
     `
     contenedorcarrito.appendChild(cardcarrito);

    const btn = document.getElementById(`eliminar${producto.id}`);
    btn.addEventListener("click", () => {
      eliminarproducto(producto.id);
    })

    })}
    
    const eliminarproducto = (id) =>{
      const productoencarrillo = carrito.find(producto => producto.id === id);
      const inc = carrito.indexOf(productoencarrillo);
      carrito.splice(inc, 1);
       vercarrito(); 
    }

   
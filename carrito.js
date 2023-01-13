
let carrito = [];



//funcion para ver los productos en el carrito.

const contenedorcarrito = document.getElementById("contenedorcarrito");

const vercarrillo = () => {
    carrito.forEach(producto => {
        const cardcarrito = document.createElement("div");
        cardcarrito.classList.add("col-xl-3", "col-md-6", "col-ms-12");

        cardcarrito.innerHTML = `<div class= "contenedorproductos">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${producto.nombre}</h5>
          <p class="card-text"> precio: ${producto.precio}</p>
          <p> cantidad: ${producto.cantidad}</p>
          <a href="#" class="btn btncolor" id = "eliminar${producto.id}">eliminar producto</a>
        </div>
      </div>
          
     `
     contenedorcarrito.appendchild(cardcarrito)
    })
}
vercarrillo();




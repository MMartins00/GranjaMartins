class producto {
  constructor(nombre, precio, id, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
    this.img = img;
    this.cantidad = 1;
  }

}

const coloradon1 = new producto("Colorado n 1", 750, 1, "imagenes/n1.jpeg");
const coloradon2 = new producto("Colorado n 2", 650, 2, "imagenes/n2.jpeg");
const coloradosuper = new producto("Colorado super", 850, 3, "imagenes/super.jpeg");
const blancon1 = new producto("Blanco n 1", 700, 4, "imagenes/n1b.jpeg");
const blancon2 = new producto("Blanco n 2", 600, 5, "imagenes/n2b.jpeg");
const blancosuper = new producto("Blanco super", 800, 6, "imagenes/superb.jpeg");

let carrito = []

if(localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

const arrayproductos = [coloradon1, coloradon2, coloradosuper, blancon1, blancon2, blancosuper];
const productos = document.getElementById("productos");
const verproductos = () => {
  arrayproductos.forEach(producto => {
    const div1 = document.createElement("div");
    div1.classList.add("col-xl-3", "col-md-6", "col-sm-12");
    div1.innerHTML = `<div class= "contenedorproductos">
    <img src="${producto.img}" class="card-img-top fotos" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${producto.nombre}</h5>
      <p class="card-text"> Precio: ${producto.precio}</p>
       
      <button class="btn btncolor" id = "botonagregar${producto.id}">Agregar </button>
    </div>
  </div>
      
 `
    productos.appendChild(div1);

    const botonagregar = document.getElementById(`botonagregar${producto.id}`);
    botonagregar.addEventListener("click", () => {
    agregaralcarrillo(producto.id)
    swal({
      title: "Producto agregado",
      text: "El producto fue agregado al carrito",
      icon: "success",
      button: "Ok",
    });
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
      localStorage.setItem("carrito", JSON.stringify(carrito));
}
  calcular();
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
          <button class="btn btneliminar" id = "eliminar${producto.id}">eliminar producto</button>
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
      swal({
        title: "Producto eliminado",
        text: "El producto fue eliminado del carrito con exito",
        icon: "success",
        button: "Ok",
      });
      vercarrito(); 
       localStorage.setItem("carrito", JSON.stringify(carrito));
    }

   const vaciarcarrillo = document.getElementById("vaciarcarrillo");
   vaciarcarrillo.addEventListener("click", () =>{
    vaciarcarrito();
    swal({
      title: "Carrito vacio",
      text: "Se han eliminado todos los productos del carrito",
      icon: "info",
      button: "Ok",
    });
   })
   const vaciarcarrito = () => {
   carrito = [];
   vercarrito();
   localStorage.clear();
   }

   //calculamos el total

   const totalcompra = document.getElementById("total");
   let calcular = () => {
    let preciototal = 0;
    carrito.forEach(producto => {
      preciototal += producto.precio * producto.cantidad;
    }); 
    totalcompra.innerHTML = `total: ${preciototal}`;
  }

  
  
  

  
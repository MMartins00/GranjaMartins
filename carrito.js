;
const btnCarrillo = document.getElementById("carrillo");
const contenedorCarrillo = document.getElementById("contenedor-carrito");
const contenedorprimario = document.getElementById("contenedor-primario");
const botonagregar = document.getElementById("botonagregar");
const totalproductos = document.getElementById("totalproductos");
const totalprecio = document.getElementById("totalprecio");
const vaciarcarrillo = document.getElementById("vaciarcarrillo");

//ver carrillo.

btnCarrillo.addEventListener('click', () => {
    contenedorCarrillo.classList.toggle("active");
})

let carrillo = [];

if(localStorage.getItem("carrillo")) {
    carrito = JSON.parse(localStorage.getItem("carrillo"));
    
    vercarrillo();
}

//funcion para agregar productos.

function agregarproductos(id){
    const productoencarrito = carrillo.find(e => e.id === id);
    if(productoencarrito){
        productoencarrito.cantidad++;
        localStorage.setItem("carrillo", JSON.stringify(carrillo));
    }else{
        const producto = arrayproductos.find(e => e.id === id);
        producto.cantidad = 1
        carrillo.push(producto);
        localStorage.setItem("carrillo", JSON.stringify(carrillo));
    }
}

total ();
vercarrillo(carrillo);

//funcion para ver productos cargados al carrito.





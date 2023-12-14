var carrito = false;
var productos = '[{"producto":"Mantequilla sin Sal","Img":"http://127.0.0.1:5500/Img/mantequilla.png","precio":"$9.000"},{"producto":"Mantequilla Fina","Img":"http://127.0.0.1:5500/Img/Mfina.png","precio":"$6.700"},{"producto":"Sal Refisal","Img":"http://127.0.0.1:5500/Img/Sal.png","precio":"$4.000"},{"producto":"Sal Ligera","Img":"http://127.0.0.1:5500/Img/SalR.png","precio":"$4.000"},{"producto":"Aceite","Img":"http://127.0.0.1:5500/Img/Aceite.jpg","precio":"$20.000"},{"producto":"Aceite vegetal","Img":"http://127.0.0.1:5500/Img/AVegetal.jpg","precio":"$20.000"},{"producto":"Arroz Diana","Img":"http://127.0.0.1:5500/Img/ArrozDiana.png","precio":"$5.900"},{"producto":"Arroz Roa","Img":"http://127.0.0.1:5500/Img/ArrozRoa.png","precio":"$4.500"},{"producto":"Jabon Axión","Img":"http://127.0.0.1:5500/Img/jabon.png","precio":"$4.300"},{"producto":"Jabon Loza","Img":"http://127.0.0.1:5500/Img/jabonLoza.png","precio":"$8.000"},{"producto":"Crema Dental","Img":"http://127.0.0.1:5500/Img/Colgate.png","precio":"$4.600"},{"producto":"crema Dental Niños","Img":"http://127.0.0.1:5500/Img/cremaNiños.png","precio":"$5.000"}]';


if (document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}

function ready(){
    
    mostrarProducto();
}

  var botonEliminarItem = document.getElementsByClassName('Eliminar-producto');
    for(var i=0; i < botonEliminarItem. length; i++){
        var button = botonEliminarItem[i];
        button.addEventListener('click', botonEliminar);
   }

 function botonEliminar(event){
   actualizarTotalCarrito();
    var buttonClicked = event.target;
   buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();  
}

document.addEventListener('DOMContentLoaded', function() {

    const botonesSumar = document.querySelectorAll('.Sumar-cantidad');
    const botonesRestar = document.querySelectorAll('.Restar-cantidad');

    botonesSumar.forEach(boton => {
        boton.addEventListener('click', sumarCantidad);
    });

    botonesRestar.forEach(boton => {
        boton.addEventListener('click', restarCantidad);
    });
});

function sumarCantidad(event) {
    const botonSumar = event.target;
    const contenedorItem = botonSumar.closest('.Carrito-item');
    const inputCantidad = contenedorItem.querySelector('.carrito-cantidad');
    let cantidad = parseInt(inputCantidad.value);
    cantidad++;
    inputCantidad.value = cantidad;
    actualizarPrecioTotal(contenedorItem, cantidad);
    actualizarTotalCarrito();
}

function restarCantidad(event) {
    const botonRestar = event.target;
    const contenedorItem = botonRestar.closest('.Carrito-item');
    const inputCantidad = contenedorItem.querySelector('.carrito-cantidad');
    let cantidad = parseInt(inputCantidad.value);
    if (cantidad > 1) {
        cantidad--;
        inputCantidad.value = cantidad;
        actualizarPrecioTotal(contenedorItem, cantidad);
        actualizarTotalCarrito();
    }
}

function actualizarPrecioTotal(item, cantidad) {
    const precioUnitario = parseFloat(item.querySelector('.Total-carrito').textContent.replace('$', ''));
    const precioTotal = (precioUnitario * cantidad).toFixed(2);
    item.querySelector('.Total-carrito').textContent = `$${precioTotal}`;
}

function actualizarTotalCarrito() {
    const carritoItems = document.querySelectorAll('.Carrito-item');
    let total = 0;

    carritoItems.forEach(item => {
        const precio = parseFloat(item.querySelector('.Total-carrito').textContent.replace('$', ''));
        total += precio;
    });

    const precioTotalElement = document.querySelector('.Precio-total');
    precioTotalElement.textContent = `$${total.toFixed(2)}`;
}
                                                                                                                                                      

    function mostrarProducto(){
        var divProductos = document.getElementById('Contenedor-items');
        var productosActuales = JSON.parse(productos);
        var objetoPintar ='';
        console.log(divProductos);
        productosActuales.forEach(elemento=>{
                objetoPintar= objetoPintar+'<div class="Item">'+
                '<span class="Producto">'+elemento['producto']+'</span>'+
                '<img src="'+elemento['Img']+'"  class="Item-img">'+
                '<span class="Precio">'+elemento['precio']+'</span>'+
                '<button class="boton-item">Agregar</button>'+
                '</div>';
              
            console.log(divProductos)
        })
          divProductos.innerHTML=objetoPintar;
    };document.addEventListener('DOMContentLoaded', function() {

    const botonesAgregar = document.querySelectorAll('.boton-item');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });
});

function agregarAlCarrito(event) {
    const botonAgregar = event.target;
    const contenedorItem = botonAgregar.closest('.Item');
    const nombreProducto = contenedorItem.querySelector('.Producto').textContent;
    const precioProducto = contenedorItem.querySelector('.Precio').textContent;
    const imagenProducto = contenedorItem.querySelector('.Item-img').src;
    const carrito = document.querySelector('.Carrito-items');
    const nuevoItem = document.createElement('div');
    nuevoItem.classList.add('Carrito-item');

    nuevoItem.innerHTML = `
    
        <img src="${imagenProducto}" class="Carrito-img">
        <div class="Carrito-detalle">
            <span class="Producto-nombre">${nombreProducto}</span>
            <div class="Selector-cantidad">
                <i class="fa-solid fa-minus Restar-cantidad"></i>
                <input type="text" value="1" class="carrito-cantidad" disabled>
                <i class="fa-solid fa-plus Sumar-cantidad"></i>
            </div>
            <span class="Total-carrito">${precioProducto}
                <span class="Eliminar-producto">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </span>
             <button class="btn-pagar">Pagar <i class="fa-solid fa-bag-shopping Bolsa-compra"></i></button>
        </div>
    `;

    carrito.appendChild(nuevoItem);

    const botonEliminarItem = nuevoItem.querySelector('.Eliminar-producto');
    botonEliminarItem.addEventListener('click', botonEliminar);

    const botonesSumar = nuevoItem.querySelector('.Sumar-cantidad');
    botonesSumar.addEventListener('click', sumarCantidad);

    const botonesRestar = nuevoItem.querySelector('.Restar-cantidad');
    botonesRestar.addEventListener('click', restarCantidad);

    actualizarTotalCarrito();
}

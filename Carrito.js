const carrito = { productos: [], valorTotal: 0 };

let productos;

const urlAPIProductos = "https://fakestoreapi.com/products";

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {

    mostrarProducto();
}

var botonEliminarItem = document.getElementsByClassName('Eliminar-producto');
for (var i = 0; i < botonEliminarItem.length; i++) {
    var button = botonEliminarItem[i];
    button.addEventListener('click', botonEliminar);
}

function botonEliminar(event) {
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


function mostrarProducto() {
    fetch(urlAPIProductos).then((response) => { return response.json() }).then((listaProductos) => {
        var divProductos = document.getElementById('Contenedor-items');
        var objetoPintar = '';
        productos = listaProductos;
        listaProductos.forEach(elemento => {
            objetoPintar = objetoPintar + '<div class="Item">' +
                '<span class="Producto">' + elemento['title'] + '</span>' +
                '<img src="' + elemento['image'] + '"  class="Item-img">' +
                '<span class="Precio">' + elemento['price'] + '</span>' +
                '<button class="boton-item"onclick="agregarAlCarrito(' + elemento.id + ')">Agregar</button>' +
                '</div>';

        })
        divProductos.innerHTML = objetoPintar;

         });
};


function calcularValorTotalCarrito() {
    carrito.productos.forEach((elemento) => {
        carrito.valorTotal = carrito.valorTotal + elemento.precio
    });
    document.getElementById('Precio-total').innerHTML = carrito.valorTotal;
}

function agregarAlCarrito(idProducto) {
    //const botonAgregar = event.target;
    const productoEnCarrito = carrito.productos.filter((item) => { return item.id == idProducto })[0];
    if (productoEnCarrito == undefined) {
        const producto_a_agregar = productos.filter((item) => { return item.id == idProducto })[0];
        carrito.productos.push({ id: idProducto, nombre: producto_a_agregar.title, precio: producto_a_agregar.price, foto: producto_a_agregar.image, cantidad: 1 });


        const contendorCarrito = document.getElementById('Carrito-items');
        contendorCarrito.innerHTML = carrito.productos.map((item) => {
            return `<div class="Carrito-item">
        <img src="${item.foto}" class="Carrito-img">
        <div class="Carrito-detalle">
            <span class="Producto-nombre">${item.nombre}</span>
            <div class="Selector-cantidad">
                <i class="fa-solid fa-minus Restar-cantidad"></i>
                <input type="text" value="${item.cantidad}" class="carrito-cantidad" disabled>
                <i class="fa-solid fa-plus Sumar-cantidad"></i>
            </div>
            <span class="Total-carrito">${item.precio}
                <span class="Eliminar-producto">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </span>

        </div>
    </div>`
        }).join('');

        calcularValorTotalCarrito();
    } else {
        alert('El producto ya se encuentra agregado al carrito')
    }

    }

    function ready() {
    mostrarProducto();

    const botonesSumar = document.querySelectorAll('.Sumar-cantidad');
    const botonesRestar = document.querySelectorAll('.Restar-cantidad');
    const botonesEliminar = document.querySelectorAll('.Eliminar-producto');

    botonesSumar.forEach(boton => {
        boton.addEventListener('click', sumarCantidad);
    });

    botonesRestar.forEach(boton => {
        boton.addEventListener('click', restarCantidad);
    });

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', botonEliminar);
    });
}

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

function botonEliminar(event) {
    actualizarTotalCarrito();
    const buttonClicked = event.target;
    buttonClicked.closest('.Carrito-item').remove();
}
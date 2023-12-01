var carrito = false;

if (document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}

function ready(){
    var botonEliminarItem = document.getElementsByClassName('Eliminar-producto');
    for(var i=0; i < botonEliminarItem. length; i++){
        var button = botonEliminarItem[i];
        button.addEventListener('click', botonEliminar);
    }
}

function botonEliminar(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();

    actualizarTotalCarrito();
}

function actualizarTotalCarrito(){
    var carritoContenedor = document.getElementsByClassName('Carrito')[0];
    var carritoItem = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;

    for(var i=0; i < carritoItem.length;i++)
    var item = carritoItems[i];
    var precioElemento = item.getElementsByClassName('Total-producto')[0];
    console.log(precioElemento);
}
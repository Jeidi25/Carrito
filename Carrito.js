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
    var actualizarTotalCarrito = document.getElementsByClassName('Total-carrito');
    for(var i=0; i < actualizarTotalCarrito. length; i++){
        var button = actualizarTotalCarrito[i];
        button.addEventListener('click', actualizarTotalCarrito);

    }
}

function botonEliminar(event){
    actualizarTotalCarrito();
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
  
  }

function actualizarTotalCarrito(){
    var carritoContenedor = document.getElementsByClassName('Carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('Carrito-item');
    var total = 0;

    for(var i=0; i < carritoItems.length;i++){
    var item = carritoItems[i];
    var precioElemento= item.getElementsByClassName('Total-carrito')[0];
    console.log(precioElemento);

    var precio = parseFloat(precioElemento.innerText.replace ('$',''));
    console.log(precio);
    var carrioCantidad = item.getElementsByClassName('carrito-cantidad') [0];
    var cantidad = carrioCantidad.value;
    console.log(carrioCantidad);
    console.log (cantidad);
    total = total + (precio * cantidad)
    }  

    var precioTotal = document.getElementsByClassName ('Precio-total') [0].innerText.replace ('$','');


total = Math.round(total *100)/100;
precioTotal = precioTotal - total
document.getElementsByClassName ('Precio-total') [0].innerText = '$' + precioTotal. toLocaleString("es") + '00';
}                                                                                                                                                                                                        

    function ocultarCarrito() {
      const carritoItems = document.getElementsByClassName('Carrito-items')[0];
     if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('Carrito')[0];
        carritoVisible=false;
     }
    
     var items = document.getElementById('Contenedor-items')[0];
    
    }

    const elementos = document.querySelectorAll ('Item');
    const elementosArray =[];

    elementos.forEach(elemento =>{
        const producto = elemento.getAttribute ('Producto');
        const Img = elemento.getAttribute ('Item-img');
        const precio = elemento.getAttribute ('Precio');

        const elementoProducto = {
            producto : producto,
            Img : Img,
            precio :precio
        };
        
        elementosArray.push(elementoProducto);
    })

    const elementoJSON = JSON. stringify(elementosArray);
    console.log(elementoJSON);
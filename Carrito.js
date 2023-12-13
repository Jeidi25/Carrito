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
    };

     // function ocultarCarrito() {
    //   const carritoItems = document.getElementsByClassName('Carrito-items')[0];
    //  if(carritoItems.childElementCount==0){
    //     var carrito = document.getElementsByClassName('Carrito')[0];
    //     carritoVisible=false;
    //  }
    
    //  const contenedorItems = document.getElementsByClassName('Contenedor-items');
    
    // elementos.forEach(elemento =>{
    //     const producto = elemento.getElementsByClassName ('Producto')[0].innerHTML; 
    //     const Img = elemento.getElementsByClassName ('Item-img')[0].src;
    //     const precio = elemento.getElementsByClassName ('Precio')[0].innerHTML;

    //     const elementoProducto = {
    //         producto : producto,
    //         Img : Img,
    //         precio :precio
    //     };
        
    // elementosArray.push(elementoProducto);


    // const elementoJSON = JSON.stringify(elementosArray);
    // console.log(elementoJSON);

    //  })
    // }
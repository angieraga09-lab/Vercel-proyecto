let totalGeneral = 0;

function agregarProducto(){

    let producto = document.getElementById("producto").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);

    if(producto=="" || isNaN(precio) || isNaN(cantidad)){

        alert("Complete todos los campos");

        return;

    }

    let total = precio * cantidad;

    totalGeneral += total;

    let tabla = document.getElementById("tablaProductos");

    let fila = tabla.insertRow();

    fila.insertCell(0).innerHTML = producto;
    fila.insertCell(1).innerHTML = "$" + precio.toFixed(2);
    fila.insertCell(2).innerHTML = cantidad;
    fila.insertCell(3).innerHTML = "$" + total.toFixed(2);

    let accion = fila.insertCell(4);

    accion.innerHTML = "<button class='eliminar' onclick='eliminarProducto(this," + total + ")'>Eliminar</button>";

    document.getElementById("totalGeneral").innerHTML =
    "Valor Total: $" + totalGeneral.toFixed(2);

    document.getElementById("producto").value="";
    document.getElementById("precio").value="";
    document.getElementById("cantidad").value="";

}

function eliminarProducto(boton,total){

    totalGeneral -= total;

    let fila = boton.parentNode.parentNode;

    fila.remove();

    document.getElementById("totalGeneral").innerHTML =
    "Valor Total: $" + totalGeneral.toFixed(2);

}
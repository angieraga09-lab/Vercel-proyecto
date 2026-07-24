// ===============================
// SISTEMA DE GESTIÓN DE PRODUCTOS
// ===============================

let productos = [];
let contador = 1;

function agregarProducto() {

    let nombre = document.getElementById("producto").value.trim();
    let categoria = document.getElementById("categoria").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);

    if (
        nombre === "" ||
        categoria === "" ||
        isNaN(precio) ||
        isNaN(cantidad)
    ) {

        alert("Debe completar todos los campos.");

        return;

    }

    let total = precio * cantidad;

    let producto = {

        id: contador,
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        cantidad: cantidad,
        total: total

    };

    productos.push(producto);

    contador++;

    mostrarProductos();

    limpiarFormulario();

}

function mostrarProductos() {

    let tabla = document.getElementById("tablaProductos");

    tabla.innerHTML = "";

    let valorInventario = 0;

    productos.forEach(function (item, index) {

        valorInventario += item.total;

        tabla.innerHTML += `

        <tr>

            <td>${item.id}</td>

            <td>${item.nombre}</td>

            <td>${item.categoria}</td>

            <td>$${item.precio.toLocaleString()}</td>

            <td>${item.cantidad}</td>

            <td>$${item.total.toLocaleString()}</td>

            <td>

                <button onclick="editarProducto(${index})">

                    Editar

                </button>

                <button onclick="eliminarProducto(${index})">

                    Eliminar

                </button>

            </td>

        </tr>

        `;

    });

    document.getElementById("cantidadProductos").textContent = productos.length;

    document.getElementById("productosRegistrados").textContent = productos.length;

    document.getElementById("valorInventario").textContent =
        "$" + valorInventario.toLocaleString();

}

function limpiarFormulario() {

    document.getElementById("producto").value = "";

    document.getElementById("categoria").value = "";

    document.getElementById("precio").value = "";

    document.getElementById("cantidad").value = "";

}
// =========================================
// EDITAR PRODUCTO
// =========================================

function editarProducto(indice) {

    let producto = productos[indice];

    document.getElementById("producto").value = producto.nombre;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("cantidad").value = producto.cantidad;

    productos.splice(indice, 1);

    mostrarProductos();

}

// =========================================
// ELIMINAR PRODUCTO
// =========================================

function eliminarProducto(indice) {

    let confirmar = confirm(
        "¿Está seguro de eliminar este producto?"
    );

    if (confirmar) {

        productos.splice(indice, 1);

        mostrarProductos();

        alert("Producto eliminado correctamente.");

    }

}

// =========================================
// BUSCAR PRODUCTO
// =========================================

function buscarProducto() {

    let filtro = document
        .getElementById("buscar")
        .value
        .toLowerCase();

    let filas = document
        .getElementById("tablaProductos")
        .getElementsByTagName("tr");

    for (let i = 0; i < filas.length; i++) {

        let columna =
            filas[i].getElementsByTagName("td")[1];

        if (columna) {

            let texto = columna.textContent.toLowerCase();

            if (texto.indexOf(filtro) > -1) {

                filas[i].style.display = "";

            } else {

                filas[i].style.display = "none";

            }

        }

    }

}

// =========================================
// MENSAJE DE BIENVENIDA
// =========================================

window.onload = function () {

    console.log("Sistema de Gestión de Productos iniciado correctamente.");

}

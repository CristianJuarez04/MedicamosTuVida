let ventas = [];
let btnStyleDelete = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #bf0000; color: #fff;";

export function addVenta() {
    let var_idEmpleado,
        var_nombreCliente,
        var_fecha,
        var_hora,
        totalVenta = 0;

    var_idEmpleado = document.getElementById("id-empleado").value;
    var_nombreCliente = document.getElementById("nombre-cliente").value;
    var_fecha = document.getElementById("fecha-input").value;
    var_hora = document.getElementById("hora-input").value;
    let var_productosRows = document.getElementsByClassName("producto-row");

    let venta = {};

    venta.idVenta = ventas.length + 1;
    venta.idEmpleado = var_idEmpleado;
    venta.nombreCliente = var_nombreCliente;
    venta.fecha = var_fecha;
    venta.hora = var_hora;
    venta.productos = [];

    for (let row of var_productosRows) {
        let nombreProducto = row.querySelector(".producto-nombre").value;
        let precioProducto = parseFloat(row.querySelector(".producto-precio").value);
        let cantidadProducto = parseInt(row.querySelector(".producto-cantidad").value);
        let totalProducto = precioProducto * cantidadProducto;

        venta.productos.push(
            {
                nombreProducto: nombreProducto,
                precioProducto: precioProducto,
                cantidadProducto: cantidadProducto,
                totalProducto: totalProducto
            }
        );

        totalVenta += totalProducto;
    }

    venta.total = totalVenta;

    ventas.push(venta);
    cargarTabla();
    clean();
}

export function clean() {
    document.getElementById("nombre-cliente").value = "";
    document.getElementById("id-empleado").value = "";
    document.getElementById("fecha-input").value = "";
    document.getElementById("hora-input").value = "";
    let productosContainer = document.getElementById("productos-container");
    let inputs = productosContainer.querySelectorAll("input");
    for (let input of inputs) {
        input.value = "";
    }
}

export function cargarTabla() {
    let body = "";

    ventas.forEach(function (venta) {
        let nombreProductos = "";
        for (let producto of venta.productos) {
            nombreProductos += `${producto.nombreProducto}<br>`;
        }
        let cantidadProductos = "";
        for (let producto of venta.productos) {
            cantidadProductos += `(${producto.cantidadProducto})<br>`;
        }
        let totalProductos = "";
        for (let producto of venta.productos) {
            totalProductos += `$${producto.totalProducto.toFixed(2)}<br>`;
        }
        let registro =
            `<tr>
        <td>${venta.idVenta}</td>
        <td>${venta.nombreCliente}</td>
        <td>${venta.fecha}</td>
        <td>${venta.hora}</td>
        <td>${venta.idEmpleado}</td>
        <td>${nombreProductos}</td>
        <td>${cantidadProductos}</td>
        <td>${totalProductos}</td>
        <td>${venta.total}</td>
        </tr>`;

        body += registro;
    });

    console.log(body);
    document.getElementById("product-table").innerHTML = body;
}

export function agregarProductoRow() {
    let productosContainer = document.getElementById("productos-container");

    let productoRow = document.createElement("div");
    productoRow.className = "producto-row";
    productoRow.innerHTML = `<br>
        <input type="text" class="producto-nombre" placeholder="Nombre del Producto" required>
        <input type="number" class="producto-precio" placeholder="Precio" required>
        <input type="number" class="producto-cantidad" placeholder="Cantidad" required>
        <button type="button" class="btn" style="${btnStyleDelete}" onclick="moduloVenta.quitarProductoRow(this)"><i class="fa-solid fa-trash-can"></button></i>
    `;

    productosContainer.appendChild(productoRow);
}

export function quitarProductoRow(button) {
    let productoRow = button.parentElement;
    productoRow.remove();
}

export function buscarVenta(event) {
    event.preventDefault();

    let searchInput = document.getElementById("busqueda-input");
    let idVenta = parseInt(searchInput.value);

    let ventaEncontrada = ventas.find(venta => venta.idVenta === idVenta);

    if (ventaEncontrada) {
        let ventaDetails = document.getElementById("venta-details");
        ventaDetails.innerHTML = `
        <h3>Venta Encontrada</h3>
        <p>ID: ${ventaEncontrada.idVenta}</p>
        <p>Nombre del Cliente: ${ventaEncontrada.nombreCliente}</p>
        <p>Fecha: ${ventaEncontrada.fecha}</p>
        <p>Hora: ${ventaEncontrada.hora}</p>
        <p>ID del Empleado: ${ventaEncontrada.idEmpleado}</p>
        <p>Nombre de los Productos: ${ventaEncontrada.nombreProductos}</p>
        <p>Cantidad de los Productos: ${ventaEncontrada.cantidadProductos}</p>
        <p>Total de los Productos: ${ventaEncontrada.totalProductos}</p>
        <p>Total: ${ventaEncontrada.total}</p>
    `;
    } else {
        let ventaDetails = document.getElementById("venta-details");
        ventaDetails.innerHTML = `
        <p>No se encontró ninguna venta con el ID proporcionado.</p>
    `;
    }

}
let pedidos = [];
let idAutoincrementable = 1;

function agregarProductoRow() {
    let productosContainer = document.getElementById("productos-container");

    let productoRow = document.createElement("div");
    productoRow.className = "producto-row";
    productoRow.innerHTML = `
        <input type="text" class="producto-nombre" placeholder="Nombre del Producto" required>
        <input type="number" class="producto-cantidad" placeholder="Cantidad" required>
        <button type="button" class="btn btn-danger quitar-producto" onclick="quitarProductoRow(this)">Quitar</button>
    `;

    productosContainer.appendChild(productoRow);
}

function quitarProductoRow(button) {
    let productoRow = button.parentElement;
    productoRow.remove();
}

function reiniciarFormulario() {
    document.getElementById("productos-container").innerHTML = `
        <div class="producto-row">
            <input type="text" class="producto-nombre" placeholder="Nombre del Producto" required>
            <input type="number" class="producto-cantidad" placeholder="Cantidad" required>
        </div>
    `;
}

document.querySelector(".form-container").addEventListener("submit", function (event) {
    event.preventDefault();

    const productos = [];
    const productoRows = document.querySelectorAll(".producto-row");

    productoRows.forEach(row => {
        const nombreProducto = row.querySelector(".producto-nombre").value;
        const cantidad = row.querySelector(".producto-cantidad").value;
        productos.push({ nombre: nombreProducto, cantidad: cantidad });
    });

    const fecha = new Date();
    const hora = formatTwoDigits(fecha.getHours());
    const minutos = formatTwoDigits(fecha.getMinutes());
    const id = idAutoincrementable++;

    const nuevoPedido = {
        id: id,
        idSucursal: generarIDSucursal(),
        idEmpleado: generarIDEmpleado(),
        fecha: fecha.toDateString(),
        hora: hora + ":" + minutos,
        productos: productos,
        activo: true // Agregar la propiedad activo al nuevo pedido
    };

    pedidos.push(nuevoPedido);
    agregarDatosTabla(id, nuevoPedido.idSucursal, nuevoPedido.idEmpleado, nuevoPedido.fecha, nuevoPedido.hora, productos, nuevoPedido.activo);
    reiniciarFormulario();
});

function formatTwoDigits(num) {
    return num.toString().padStart(2, "0");
}

function generarIDSucursal() {
    return Math.floor(Math.random() * 5) + 1;
}

function generarIDEmpleado() {
    return Math.floor(Math.random() * 20) + 1;
}

function agregarDatosTabla(id, idSucursal, idEmpleado, fecha, hora, productos, activo = true) {
    const tablaBody = document.getElementById("tabla-pedidos-body");
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${id}</td>
        <td>${idSucursal}</td>
        <td>${idEmpleado}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>${productos.map(producto => producto.nombre).join("<br>")}</td>
        <td>${productos.map(producto => producto.cantidad).join("<br>")}</td>
        <td>${activo ? "Activo" : "Inactivo"}</td>`;
    tablaBody.appendChild(fila);
}

function buscarPedido(event) {
    event.preventDefault();
    const idBusqueda = parseInt(document.getElementById("busqueda-input").value);

    const pedidoEncontrado = pedidos.find(pedido => pedido.id === idBusqueda);

    if (pedidoEncontrado) {
        mostrarDetallesPedido(pedidoEncontrado);
    } else {
        alert("Pedido no encontrado.");
    }
}

function mostrarDetallesPedido(pedido) {
    const detallesPedidoDiv = document.getElementById("detalles-pedido");
    detallesPedidoDiv.innerHTML = `
        <h3>Detalles del Pedido</h3>
        <p>ID: ${pedido.id}</p>
        <p>ID Sucursal: ${pedido.idSucursal}</p>
        <p>ID Empleado: ${pedido.idEmpleado}</p>
        <p>Fecha: ${pedido.fecha}</p>
        <p>Hora: ${pedido.hora}</p>
        <p>Productos:</p>
        <ul>
            ${pedido.productos.map(producto => `<li>${producto.nombre}: ${producto.cantidad}</li>`).join("")}
        </ul>
        <button class="btn btn-danger" onclick="cambiarEstadoPedido(${pedido.id}, ${pedido.activo})">Cambiar Estado a Inactivo</button>
        <button class="btn btn-success" onclick="cambiarEstadoPedido(${pedido.id}, ${!pedido.activo})">Cambiar Estado a Activo</button>
    `;
}

function cambiarEstadoPedido(id, activo) {
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {
        pedido.activo = !activo;
        actualizarTablaPedidos();
    }
}

function actualizarTablaPedidos() {
    const tablaBody = document.getElementById("tabla-pedidos-body");
    tablaBody.innerHTML = "";

    pedidos.forEach(pedido => {
        if (pedido.activo) {
            agregarDatosTabla(pedido.id, pedido.idSucursal, pedido.idEmpleado, pedido.fecha, pedido.hora, pedido.productos, pedido.activo);
        }
    });
}

document.getElementById("busqueda-form").addEventListener("submit", buscarPedido);

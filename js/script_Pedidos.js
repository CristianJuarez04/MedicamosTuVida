let pedidos = [];

fetch("../json/pedidosCentral.json")
  .then(response => {
    return response.json();
  })
  .then(function (jsondata) {
    pedidos = jsondata;
    console.log(pedidos);
    mostrarPedidos();
  }
  );

function mostrarDetallesPedido(id) {
    const detallesPedido = document.getElementById('detalles-pedido');
    const pedido = pedidos.find(p => p.id === id);

    if (pedido) {
        detallesPedido.innerHTML = `
            <h3>Detalles de Pedido</h3>
            <p>ID: ${pedido.id}</p>
            <p>Fecha: ${pedido.fecha}</p>
            <p>Sucursal: ${pedido.sucursal}</p>
            <p>Empleado: ${pedido.empleado}</p>
            <p>CP: ${pedido.cp}</p>
            <p>Ciudad: ${pedido.ciudad}</p>
            <p>Estado: ${pedido.estatus}</p>
            <p>Total: $${pedido.total}</p>
            ${pedido.estatus === 'activo' ? 
                `<button onclick="eliminarVenta(${pedido.id})">Eliminar</button>` :
                `<button onclick="reactivarVenta(${pedido.id})">Reactivar</button>`}
        `;
    } else {
        detallesPedido.innerHTML = '<p>Selecciona un pedido para ver detalles.</p>';
    }
}

function reactivarVenta(idPedido) {
    const detallesPedido = document.getElementById('detalles-pedido');
    const pedido = pedidos.find(p => p.id === idPedido);
    
    if (pedido) {
        pedido.estatus = 'activo';
        mostrarDetallesPedido(idPedido);
        llenarTabla(); // Actualizar la tabla para reflejar el cambio de estado
    }
}


function buscarVenta(event) {
    event.preventDefault();
    const busquedaInput = document.getElementById('busqueda-input');
    const idPedido = parseInt(busquedaInput.value, 10);

    mostrarDetallesPedido(idPedido);
}

function eliminarVenta(idPedido) {
    const detallesPedido = document.getElementById('detalles-pedido');
    
    const pedido = pedidos.find(p => p.id === idPedido);
    if (pedido) {
        pedido.estatus = 'inactivo';
        mostrarDetallesPedido(idPedido);
        llenarTabla(); // Actualizar la tabla para reflejar el cambio de estado
    }
}



function llenarTabla() {
    const productTable = document.getElementById('product-table');
    productTable.innerHTML = ''; // Limpiar la tabla antes de llenarla nuevamente

    // Filtra y muestra los pedidos activos en la tabla
    const pedidosActivos = pedidos.filter(pedido => pedido.estatus === 'activo');

    pedidosActivos.forEach(pedido => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pedido.id}</td>
            <td>${pedido.fecha}</td>
            <td>${pedido.sucursal}</td>
            <td>${pedido.empleado}</td>
            <td>${pedido.cp}</td>
            <td>${pedido.ciudad}</td>
            <td>${pedido.estado}</td>
            <td>${pedido.total}</td>
            <td>${pedido.estatus}</td>
        `;

        productTable.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    llenarTabla();

    // Agregar el evento de clic a las filas de la tabla para mostrar detalles
    const filas = document.querySelectorAll('#product-table tr');
    filas.forEach(fila => {
        const idPedido = parseInt(fila.querySelector('td:first-child').textContent, 10);
        fila.addEventListener('click', () => {
            mostrarDetallesPedido(idPedido);
        });
    });
});
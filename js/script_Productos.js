let productos = [
  {
    id: 1,
    nombre: "Clorfenamina",
    precio: 20,
    existencias: 60,
    imagen: ""
  },
  {
    id: 2,
    nombre: "Pseudoefedrina",
    precio: 28,
    existencias: 40,
    imagen: ""
  },
  {
    id: 3,
    nombre: "Tiamina",
    precio: 25,
    existencias: 100,
    imagen: ""
  },
  {
    id: 4,
    nombre: "Ferrous Sulfate",
    precio: 32,
    existencias: 80,
    imagen: ""
  },
  {
    
    id: 5,
    nombre: "Vitamin B12",
    precio: 36,
    existencias: 50,
    imagen: ""
  },
  {
    id: 6,
    nombre: "Rabeprazole",
    precio: 38,
    existencias: 40,
    imagen: ""
  }
];

let idProductoSeleccionado = null;
let btnStyle = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #0059b3; color: #fff;";


// Función para eliminar un producto
function eliminarProducto() 
{
    if (idProductoSeleccionado !== null) 
    {
        // Buscamos el producto en el array por su ID
        let producto = productos.find(producto => producto.id === idProductoSeleccionado);

        if (producto) 
        {
            // Establecemos las existencias del producto a 0
            producto.existencias = 0;

            // Limpiamos el producto seleccionado
            idProductoSeleccionado = null;

            // Actualizamos la tabla y los detalles del producto
            mostrarProductos();
            mostrarDetallesProducto(null);
        }
    }
}

// Función para mostrar los productos en la tabla
function mostrarProductos() {
  let tablaProductos = document.getElementById("product-table");
  tablaProductos.innerHTML = "";

  productos.forEach(producto => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td>${producto.existencias}</td>
      <td>
        <button class="btn" style="${btnStyle}" onclick="mostrarFormularioEdicion(${producto.id})">Editar</button>
      </td>
    `;
    tablaProductos.appendChild(fila);
  });
}

// Función para agregar un producto
function agregarProducto(evento) {
  evento.preventDefault();

  let nombreInput = document.getElementById("nombre-input");
  let precioInput = document.getElementById("precio-input");
  let existenciasInput = document.getElementById("existencias-input");
  let imagenInput = document.getElementById("imagen-input");

  // Verificamos si se seleccionó una imagen
  let imagenURL = "";
  if (imagenInput.files.length > 0) {
    imagenURL = URL.createObjectURL(imagenInput.files[0]);
  }

  let nuevoProducto = {
    id: productos.length + 1,
    nombre: nombreInput.value,
    precio: parseFloat(precioInput.value),
    existencias: parseInt(existenciasInput.value),
    imagen: imagenURL
  };

  productos.push(nuevoProducto);
  mostrarProductos();
  
  document.getElementById("nombre-input").innerHTML = "";
  document.getElementById("precio-input").innerHTML = "";
  document.getElementById("existencias-input").innerHTML = "";
}

// Función para buscar un producto por ID
function buscarProducto(evento) {
  evento.preventDefault();

  let inputBusqueda = document.getElementById("busqueda-input");
  let idProducto = parseInt(inputBusqueda.value);

  let productoEncontrado = productos.find(producto => producto.id === idProducto);

  if (productoEncontrado) {
    let detallesProducto = document.getElementById("detalles-producto");
    detallesProducto.innerHTML = `
      <h3>Producto Encontrado</h3>
      <p>ID: ${productoEncontrado.id}</p>
      <p>Nombre: ${productoEncontrado.nombre}</p>
      <p>Precio: $${productoEncontrado.precio}</p>
      <p>Existencias: ${productoEncontrado.existencias}</p>
      <p>Imagen:</p>
      <img src="${productoEncontrado.imagen}" alt="Imagen de ${productoEncontrado.nombre}" width="200">
    `;
  } else {
    let detallesProducto = document.getElementById("detalles-producto");
    detallesProducto.innerHTML = `
      <p>No se encontró ningún producto con el ID proporcionado.</p>
    `;
  }
}

// Función para mostrar el formulario de edición con los datos de un producto
function mostrarFormularioEdicion(idProducto) {
  let producto = productos.find(producto => producto.id === idProducto);
  if (producto) {
    idProductoSeleccionado = producto.id;

    let nombreInput = document.getElementById("edit-nombre-input");
    let precioInput = document.getElementById("edit-precio-input");
    let existenciasInput = document.getElementById("edit-existencias-input");

    nombreInput.value = producto.nombre;
    precioInput.value = producto.precio;
    existenciasInput.value = producto.existencias;
  }
}

// Función para limpiar el formulario de edición
function limpiarFormularioEdicion() {
  let nombreInput = document.getElementById("edit-nombre-input");
  let precioInput = document.getElementById("edit-precio-input");
  let existenciasInput = document.getElementById("edit-existencias-input");

  nombreInput.value = "";
  precioInput.value = "";
  existenciasInput.value = "";

  // Importante también limpiar el ID del producto seleccionado
  idProductoSeleccionado = null;
}

function editarProducto(evento) {
  evento.preventDefault();

  let nombreInput = document.getElementById("edit-nombre-input");
  let precioInput = document.getElementById("edit-precio-input");
  let existenciasInput = document.getElementById("edit-existencias-input");

  let productoEditado = {
    id: idProductoSeleccionado,
    nombre: nombreInput.value,
    precio: parseFloat(precioInput.value),
    existencias: parseInt(existenciasInput.value),
  };

  // Actualizar los datos del producto en el array
  let indice = productos.findIndex(producto => producto.id === idProductoSeleccionado);
  if (indice !== -1) {
    productos[indice] = productoEditado;
  }

  mostrarProductos();
  limpiarFormularioEdicion();
}

// Inicializar la tabla de productos
mostrarProductos();
let productos = [];
let idProductoSeleccionado = null;
let btnStyleEdit = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #00931b; color: #fff;";
let btnStyleDelete = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #bf0000; color: #fff;";

document.querySelector('.mandar').addEventListener('click', function (event) {
  event.preventDefault();
  let nombre = document.querySelector('#nombre-input').value;
  let precio = document.querySelector('#precio-input').value;
  let existencias = document.querySelector('#existencias-input').value;
  let imagen = document.querySelector('#imagen-input').value;
  if (nombre && precio && existencias && imagen) {
    agregarProducto();
  } else {
    alert('Por favor, llene todos los campos antes de enviar el formulario.');
  }
});

fetch("../json/productos.json")
  .then(response => {
    return response.json();
  })
  .then(function (jsondata) {
    productos = jsondata;
    console.log(productos);
    mostrarProductos();
  }
  );

// Función para agregar un producto
export function agregarProducto() {
  let var_nombre_producto,
    var_unidades,
    var_precioVenta,
    var_ruta_foto;

  var_nombre_producto = document.getElementById("nombre-input").value;
  var_precioVenta = document.getElementById("precio-input").value;
  var_unidades = document.getElementById("existencias-input").value;
  var_ruta_foto = document.getElementById("imagen-input");

  // Verificamos si se seleccionó una imagen
  let imagenURL = "";
  if (var_ruta_foto.files.length > 0) {
    imagenURL = URL.createObjectURL(var_ruta_foto.files[0]);
  }

  let producto = {};
  producto.id_Producto = productos.length + 1;
  producto.nombre_producto = var_nombre_producto;
  producto.nombre_generico = "";
  producto.forma_farmaceutica = "";
  producto.unidad_medida = "";
  producto.presentacion = "";
  producto.principal_indicacion = "";
  producto.contraindicacion = "";
  producto.concentracion = "";
  producto.unidades = var_unidades;
  producto.precioCompra = "";
  producto.precioVenta = var_precioVenta;
  producto.foto_producto = "";
  producto.foto_producto = imagenURL;
  producto.codigo_barras = "";
  producto.estatus = 1;

  productos.push(producto);

  document.getElementById("nombre-input").innerHTML = "";
  document.getElementById("precio-input").innerHTML = "";
  document.getElementById("existencias-input").innerHTML = "";

  clean();
  mostrarProductos();
}

export function clean()
{
  document.getElementById("nombre-input").value = "";
  document.getElementById("precio-input").value = "";
  document.getElementById("existencias-input").value = "";
  document.getElementById("imagen-input").value = "";
}

// Función para mostrar los productos en la tabla
export function mostrarProductos() {
  let tablaProductos = "";

  productos.forEach(function (product) {
    let fila =
      `<tr>
      <td>${product.id_Producto}</td>
      <td>${product.nombre_producto}</td>
      <td>$${product.precioVenta}</td>
      <td>${product.unidades}</td>
      <td>
        <button class="btn" style="${btnStyleEdit}" onclick="moduloProducto.mostrarFormularioEdicion(${product.id_Producto})"><i class="fa-solid fa-pencil"></button></i>
        <button class="btn" style="${btnStyleDelete}" onclick="moduloProducto.eliminarProducto(${product.id_Producto})"><i class="fa-solid fa-trash-can"></button></i>
      </td></tr>`;

    tablaProductos += fila;
  });

  console.log(tablaProductos);
  document.getElementById("product-table").innerHTML = tablaProductos;
}

// Función para eliminar un producto
export function eliminarProducto(idProductoSeleccionado) {
  if (idProductoSeleccionado !== null) {
    // Buscamos el producto en el array por su ID
    let producto = productos.find(product => product.id_Producto === idProductoSeleccionado);

    if (producto) {
      // Establecemos las existencias del producto a 0
      producto.unidades = 0;

      // Limpiamos el producto seleccionado
      idProductoSeleccionado = null;

      // Actualizamos la tabla y los detalles del producto
      limpiarFormularioEdicion()
      mostrarProductos();
    }
  }
}

// Función para mostrar el formulario de edición con los datos de un producto
export function mostrarFormularioEdicion(idProducto) {
  let producto = productos.find(producto => producto.id_Producto === idProducto);
  if (producto) {
    idProductoSeleccionado = producto.id_Producto;

    let nombreInput = document.getElementById("edit-nombre-input");
    let precioInput = document.getElementById("edit-precio-input");
    let existenciasInput = document.getElementById("edit-existencias-input");

    nombreInput.value = producto.nombre_producto;
    precioInput.value = producto.precioVenta;
    existenciasInput.value = producto.unidades;
  }
}

// Función para limpiar el formulario de edición
export function limpiarFormularioEdicion() {
  document.getElementById("edit-nombre-input").value = "";
  document.getElementById("edit-precio-input").value = "";
  document.getElementById("edit-existencias-input").value = "";

  // Importante también limpiar el ID del producto seleccionado
  idProductoSeleccionado = null;
}

export function editarProducto() {
  let nombreInput = document.getElementById("edit-nombre-input").value;
  let precioInput = document.getElementById("edit-precio-input").value;
  let existenciasInput = document.getElementById("edit-existencias-input").value;

  let productoEditado =
  {
    id_Producto: idProductoSeleccionado,
    nombre_producto: nombreInput,
    precioVenta: parseFloat(precioInput),
    unidades: parseInt(existenciasInput),
  };

  // Actualizar los datos del producto en el array
  let indice = productos.findIndex(producto => producto.id_Producto === idProductoSeleccionado);
  if (indice !== -1) {
    productos[indice] = productoEditado;
  }

  mostrarProductos();
  limpiarFormularioEdicion();
}

// Función para buscar un producto por ID
export function loadProducto(event) {
  event.preventDefault();

  let searchInput = document.getElementById("busqueda-input");
  let idProducto = parseInt(searchInput.value);

  let productoEncontrado = productos.find(producto => producto.id_Producto === idProducto);

  if (productoEncontrado) {
    let productoDetails = document.getElementById("detalles-producto");
    productoDetails.innerHTML = `
        <h3>Producto Encontrado</h3>
        <p>ID: ${productoEncontrado.id_Producto}</p>
        <p>Nombre: ${productoEncontrado.nombre_producto}</p>
        <p>Precio: $${productoEncontrado.precioVenta}</p>
        <p>Existencias: ${productoEncontrado.unidades}</p>
        <p>Imagen:</p>
        <img src="${productoEncontrado.foto_producto}" alt="Imagen de ${productoEncontrado.nombre_producto}" width="200">
    `;
  } else {
    let productoDetails = document.getElementById("producto-details");
    productoDetails.innerHTML = `
        <p>No se encontró ningún producto con el ID proporcionado.</p>
    `;
  }
}
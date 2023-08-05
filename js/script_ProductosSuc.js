let productos = [];

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

  mostrarProductos();
}

// Función para mostrar los productos en la tabla
export function mostrarProductos() {
  let tablaProductos = "";//document.getElementById("product-table");
  //tablaProductos.innerHTML = "";

  productos.forEach(function (product) {
    let fila =
      `<tr>
      <td>${product.id_Producto}</td>
      <td>${product.nombre_producto}</td>
      <td>$${product.precioVenta}</td>
      <td>${product.unidades}</td>
      </tr>`;

    tablaProductos += fila;
  });

  console.log(tablaProductos);
  document.getElementById("product-table").innerHTML = tablaProductos;
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
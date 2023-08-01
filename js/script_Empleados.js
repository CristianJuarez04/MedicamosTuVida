let empleados = [
  {
    id: 1,
    nombre: "Juan Gómez Pérez",
    genero: "Masculino",
    fechaNacimiento: "15/05/1990",
    rfc: "RFC123456789",
    curp: "GOPJ900515HDFMRN93",
    calle: "Calle Principal",
    colonia: "Centro",
    numeroExt: "123",
    codigoPostal: "12345",
    ciudad: "Ciudad de México",
    estado: "Ciudad de México",
    telefono: "555-5555",
    email: "juan@gmail.com",
    puesto: "Vendedor",
    salario: "$2500",
    codigo: "23070001",
    fechaIngreso: "18/07/2023",
    status: "Activo"
  },
  {
    id: 2,
    nombre: "Laura Gonzáles Sánchez",
    genero: "Femenino",
    fechaNacimiento: "20/08/1985",
    rfc: "RFC123456789",
    curp: "GOSL850820MJCNNR33",
    calle: "Rosas",
    colonia: "Centro",
    numeroExt: "123",
    codigoPostal: "54321",
    ciudad: "Guadalajara",
    estado: "Jalisco",
    telefono: "555-1111",
    email: "laura@gmail.com",
    puesto: "Administrador",
    salario: "$2800",
    codigo: "23070002",
    fechaIngreso: "18/07/2023",
    status: "Activo"
  },
  {
    id: 3,
    nombre: "Juan Pérez Ortiz",
    genero: "Masculino",
    fechaNacimiento: "15/05/1990",
    rfc: "RFC123456780",
    curp: "PEOJ900515HDFRRN36",
    calle: "Calle Principal",
    colonia: "Centro",
    numeroExt: "123",
    codigoPostal: "12345",
    ciudad: "Ciudad de México",
    estado: "Ciudad de México",
    telefono: "555-5555",
    email: "juan@gmail.com",
    puesto: "Vendedor",
    salario: "$2500",
    codigo: "23070003",
    fechaIngreso: "18/07/2023",
    status: "Activo"
  },
  {
    id: 4,
    nombre: "María Gónzález Rojas",
    genero: "Femenino",
    fechaNacimiento: "20/09/1985",
    rfc: "RFC4567890123",
    curp: "PEJU900512HDFRNR04",
    calle: "Avenida Reforma",
    colonia: "Juárez",
    numeroExt: "465",
    codigoPostal: "54321",
    ciudad: "Ciudad de México",
    estado: "Ciudad de México",
    telefono: "555-5678",
    email: "maria@gmail.com",
    puesto: "Vendedor",
    salario: "$2500",
    codigo: "23070004",
    fechaIngreso: "18/07/2023",
    status: "Activo"
  },
  {
    id: 5,
    nombre: "Carlos López Cabrera",
    genero: "Masculino",
    fechaNacimiento: "10/03/1992",
    rfc: "RFC7890123456",
    curp: "PEJU900512HDFRNR04",
    calle: "5 de Mayo",
    colonia: "Centro",
    numeroExt: "789",
    codigoPostal: "98765",
    ciudad: "Guadalajara",
    estado: "Jalisco",
    telefono: "555-9012",
    email: "juan@gmail.com",
    puesto: "Vendedor",
    salario: "$2500",
    codigo: "23070005",
    fechaIngreso: "18/07/2023",
    status: "Activo"
  }
];

let idEmpleadoSeleccionado = null;
let btnStyle = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #0059b3; color: #fff;";


// Función para mostrar los empleados en la tabla
function mostrarEmpleados() {
  let tablaEmpleados = document.getElementById("employee-table");
  tablaEmpleados.innerHTML = "";

  empleados.forEach(empleado => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${empleado.id}</td>
      <td>${empleado.nombre}</td>
      <td>${empleado.email}</td>
      <td>${empleado.status}</td>
      <td>
        <button class="btn" style="${btnStyle}" onclick="mostrarFormularioEdicion(${empleado.id})">Editar</button>` +
        //<button class="btn" style="${btnStyle}" onclick="eliminarEmpleado(${empleado.id})">Eliminar</button>
      `</td>`;
    tablaEmpleados.appendChild(fila);
  });
}

// Función para agregar un empleado
function agregarEmpleado(evento) {
  evento.preventDefault();

  let nombreInput = document.getElementById("nombre-input");
  let generoInput = document.getElementById("genero-input");
  let fechaNacimientoInput = document.getElementById("fecha-nacimiento-input");
  let rfcInput = document.getElementById("rfc-input");
  let curpInput = document.getElementById("curp-input");
  let calleInput = document.getElementById("calle-input");
  let coloniaInput = document.getElementById("colonia-input");
  let numeroExtInput = document.getElementById("numero-ext-input");
  let codigoPostalInput = document.getElementById("codigo-postal-input");
  let ciudadInput = document.getElementById("ciudad-input");
  let estadoInput = document.getElementById("estado-input");
  let telefonoInput = document.getElementById("telefono-input");
  let emailInput = document.getElementById("email-input");
  let puestoInput = document.getElementById("puesto-input");
  let salarioInput = document.getElementById("salario-input");
  let codigoInput = document.getElementById("codigo-input");
  let fechaIngresoInput = document.getElementById("fecha-ingreso-input");
  let imagenInput = document.getElementById("imagen-input");

  let imagenURL = "";
  if (imagenInput.files.length > 0) {
    imagenURL = URL.createObjectURL(imagenInput.files[0]);
  }

  let nuevoEmpleado = {
        id: empleados.length + 1,
        nombre: nombreInput.value,
        genero: generoInput.value,
        fechaNacimiento: fechaNacimientoInput.value,
        rfc: rfcInput.value,
        curp: curpInput.value,
        calle: calleInput.value,
        colonia: coloniaInput.value,
        numeroExt: numeroExtInput.value,
        codigoPostal: codigoPostalInput.value,
        ciudad: ciudadInput.value,
        estado: estadoInput.value,
        telefono: telefonoInput.value,
        email: emailInput.value,
        puesto: puestoInput.value,
        salario: salarioInput.value,
        codigo: codigoInput.value,
        fechaIngreso: fechaIngresoInput.value,
        status: "Activo",
        imagen: imagenURL
  };

  empleados.push(nuevoEmpleado);
  mostrarEmpleados();
}

// Función para buscar un empleado por ID
function buscarEmpleado(evento) 
{
  evento.preventDefault();

  let inputBusqueda = document.getElementById("busqueda-input");
  let idEmpleado = parseInt(inputBusqueda.value);

  let empleadoEncontrado = empleados.find(empleado => empleado.id === idEmpleado);

  if (empleadoEncontrado) {
    let detallesEmpleado = document.getElementById("detalles-empleado");
    detallesEmpleado.innerHTML = `
      <h3>Empleado Encontrado</h3>
      <p>ID: ${empleadoEncontrado.id}</p>
      <p>Nombre: ${empleadoEncontrado.nombre}</p>
      <p>Género: ${empleadoEncontrado.genero}</p>
      <p>Fecha de nacimiento: ${empleadoEncontrado.fechaNacimiento}</p>
      <p>RFC: ${empleadoEncontrado.rfc}</p>
      <p>CURP: ${empleadoEncontrado.curp}</p>
      <p>Calle: ${empleadoEncontrado.calle}</p>
      <p>Colonia: ${empleadoEncontrado.colonia}</p>
      <p>Número Ext: ${empleadoEncontrado.numeroExt}</p>
      <p>Código postal: ${empleadoEncontrado.codigoPostal}</p>
      <p>Ciudad: ${empleadoEncontrado.ciudad}</p>
      <p>Estado: ${empleadoEncontrado.estado}</p>
      <p>Teléfono: ${empleadoEncontrado.telefono}</p>
      <p>Email: ${empleadoEncontrado.email}</p>
      <p>Puesto: ${empleadoEncontrado.puesto}</p>
      <p>Salario: ${empleadoEncontrado.salario}</p>
      <p>Código: ${empleadoEncontrado.codigo}</p>
      <p>Fecha de ingreso: ${empleadoEncontrado.fechaIngreso}</p>
      <p>Imagen:</p>
      <img src="${empleadoEncontrado.imagen}" alt="Imagen de ${empleadoEncontrado.nombre}" width="200">
    `;
  } else {
    let detallesEmpleado = document.getElementById("detalles-empleado");
    detallesEmpleado.innerHTML = `
      <p>No se encontró ningún empleado con el ID proporcionado.</p>
    `;
  }
}

// Función para editar los datos de un empleado
function editarEmpleado(evento) {
  evento.preventDefault();

  let nombreInput = document.getElementById("edit-nombre-input");
  let generoInput = document.getElementById("edit-genero-input");
  let fechaNacimientoInput = document.getElementById("edit-fecha-nacimiento-input");
  let rfcInput = document.getElementById("edit-rfc-input");
  let curpInput = document.getElementById("edit-curp-input");
  let calleInput = document.getElementById("edit-calle-input");
  let coloniaInput = document.getElementById("edit-colonia-input");
  let numeroExtInput = document.getElementById("edit-numero-ext-input");
  let codigoPostalInput = document.getElementById("edit-codigo-postal-input");
  let ciudadInput = document.getElementById("edit-ciudad-input");
  let estadoInput = document.getElementById("edit-estado-input");
  let telefonoInput = document.getElementById("edit-telefono-input");
  let emailInput = document.getElementById("edit-email-input");
  let puestoInput = document.getElementById("edit-puesto-input");
  let salarioInput = document.getElementById("edit-salario-input");
  let codigoInput = document.getElementById("edit-codigo-input");
  let fechaIngresoInput = document.getElementById("edit-fecha-ingreso-input");

  let empleadoEditado = {
    id: idEmpleadoSeleccionado,
    nombre: nombreInput.value,
    genero: generoInput.value,
    fechaNacimiento: fechaNacimientoInput.value,
    rfc: rfcInput.value,
    curp: curpInput.value,
    calle: calleInput.value,
    colonia: coloniaInput.value,
    numeroExt: numeroExtInput.value,
    codigoPostal: codigoPostalInput.value,
    ciudad: ciudadInput.value,
    estado: estadoInput.value,
    telefono: telefonoInput.value,
    email: emailInput.value,
    puesto: puestoInput.value,
    salario: salarioInput.value,
    codigo: codigoInput.value,
    fechaIngreso: fechaIngresoInput.value,
    status: "Activo"
  };

  // Actualizar los datos del empleado en el array
  let indice = empleados.findIndex(empleado => empleado.id === idEmpleadoSeleccionado);
  if (indice !== -1) 
  {
    empleados[indice] = empleadoEditado;
  }

  mostrarEmpleados();
  limpiarFormularioEdicion();
}

// Función para cambiar el status de un empleado a "inactivo"
function eliminarEmpleado() {
  if (idEmpleadoSeleccionado !== null) {
    // Buscamos al empleado en el array por su ID
    let empleado = empleados.find(empleado => empleado.id === idEmpleadoSeleccionado);

    if (empleado) {
      // Marcamos al empleado como inactivo cambiando el valor del campo "status"
      empleado.status = "Inactivo";

      // Limpiamos el empleado seleccionado
      idEmpleadoSeleccionado = null;
      limpiarFormularioEdicion();
      // Actualizamos la tabla y los detalles del empleado
      mostrarEmpleados();
      mostrarDetallesEmpleado(null);
    }
  }
}

// Función para mostrar el formulario de edición con los datos de un empleado
function mostrarFormularioEdicion(idEmpleado) {
  let empleado = empleados.find(empleado => empleado.id === idEmpleado);
  if (empleado) 
  {
    idEmpleadoSeleccionado = empleado.id;

    let nombreInput = document.getElementById("edit-nombre-input");
    let generoInput = document.getElementById("edit-genero-input");
    let fechaNacimientoInput = document.getElementById("edit-fecha-nacimiento-input");
    let rfcInput = document.getElementById("edit-rfc-input");
    let curpInput = document.getElementById("edit-curp-input");
    let calleInput = document.getElementById("edit-calle-input");
    let coloniaInput = document.getElementById("edit-colonia-input");
    let numeroExtInput = document.getElementById("edit-numero-ext-input");
    let codigoPostalInput = document.getElementById("edit-codigo-postal-input");
    let ciudadInput = document.getElementById("edit-ciudad-input");
    let estadoInput = document.getElementById("edit-estado-input");
    let telefonoInput = document.getElementById("edit-telefono-input");
    let emailInput = document.getElementById("edit-email-input");
    let puestoInput = document.getElementById("edit-puesto-input");
    let salarioInput = document.getElementById("edit-salario-input");
    let codigoInput = document.getElementById("edit-codigo-input");
    let fechaIngresoInput = document.getElementById("edit-fecha-ingreso-input");

    nombreInput.value = empleado.nombre;
    generoInput.value = empleado.genero;
    fechaNacimientoInput.value = empleado.fechaNacimiento;
    rfcInput.value = empleado.rfc;
    curpInput.value = empleado.curp;
    calleInput.value = empleado.calle;
    coloniaInput.value = empleado.colonia;
    numeroExtInput.value = empleado.numeroExt;
    codigoPostalInput.value = empleado.codigoPostal;
    ciudadInput.value = empleado.ciudad;
    estadoInput.value = empleado.estado;
    telefonoInput.value = empleado.telefono;
    emailInput.value = empleado.email;
    puestoInput.value = empleado.puesto;
    salarioInput.value = empleado.salario;
    codigoInput.value = empleado.codigo;
    fechaIngresoInput.value = empleado.fechaIngreso;
  }
}

// Función para limpiar el formulario de edición
function limpiarFormularioEdicion() {
  let nombreInput = document.getElementById("edit-nombre-input");
  let generoInput = document.getElementById("edit-genero-input");
  let fechaNacimientoInput = document.getElementById("edit-fecha-nacimiento-input");
  let rfcInput = document.getElementById("edit-rfc-input");
  let curpInput = document.getElementById("edit-curp-input");
  let calleInput = document.getElementById("edit-calle-input");
  let coloniaInput = document.getElementById("edit-colonia-input");
  let numeroExtInput = document.getElementById("edit-numero-ext-input");
  let codigoPostalInput = document.getElementById("edit-codigo-postal-input");
  let ciudadInput = document.getElementById("edit-ciudad-input");
  let estadoInput = document.getElementById("edit-estado-input");
  let telefonoInput = document.getElementById("edit-telefono-input");
  let emailInput = document.getElementById("edit-email-input");
  let puestoInput = document.getElementById("edit-puesto-input");
  let salarioInput = document.getElementById("edit-salario-input");
  let codigoInput = document.getElementById("edit-codigo-input");
  let fechaIngresoInput = document.getElementById("edit-fecha-ingreso-input");

  nombreInput.value = "";
  generoInput.value = "";
  fechaNacimientoInput.value = "";
  rfcInput.value = "";
  curpInput.value = "";
  calleInput.value = "";
  coloniaInput.value = "";
  numeroExtInput.value = "";
  codigoPostalInput.value = "";
  ciudadInput.value = "";
  estadoInput.value = "";
  telefonoInput.value = "";
  emailInput.value = "";
  puestoInput.value = "";
  salarioInput.value = "";
  codigoInput.value = "";
  fechaIngresoInput.value = "";
}

// Inicializar la tabla de empleados
mostrarEmpleados();
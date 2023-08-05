let empleados = [];
let idEmpleadoSeleccionado = null;
let btnStyleEdit = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #00931b; color: #fff;";
let btnStyleDelete = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #bf0000; color: #fff;";

fetch("../json/empleados.json")
  .then(response => {
    return response.json();
  })
  .then(function (jsondata) {
    empleados = jsondata;
    console.log(empleados);
    mostrarEmpleados();
  }
  );

//Funcion para verificar que los campos del formulario agregar empleados estan llenos y proseguir con las operaciones de ser asi
document.querySelector('.mandar').addEventListener('click', function (event) {
  event.preventDefault();
  let nombre = document.querySelector('#nombre-input').value;
  let genero = document.querySelector('#genero-input').value;
  let fechaNacimiento = document.querySelector('#fecha-nacimiento-input').value;
  let rfc = document.querySelector('#rfc-input').value;
  let curp = document.querySelector('#curp-input').value;
  let calle = document.querySelector('#calle-input').value;
  let colonia = document.querySelector('#colonia-input').value;
  let numeroExt = document.querySelector('#numero-ext-input').value;
  let codigoPostal = document.querySelector('#codigo-postal-input').value;
  let ciudad = document.querySelector('#ciudad-input').value;
  let estado = document.querySelector('#estado-input').value;
  let telefono = document.querySelector('#telefono-input').value;
  let email = document.querySelector('#email-input').value;
  let puesto = document.querySelector('#puesto-input').value;
  let salario = document.querySelector('#salario-input').value;
  let codigo = document.querySelector('#codigo-input').value;
  let fechaIngreso = document.querySelector('#fecha-ingreso-input').value;
  let imagen = document.querySelector('#imagen-input').value;

  if (nombre && genero && fechaNacimiento && rfc && curp && calle && colonia && numeroExt && codigoPostal && ciudad && estado && telefono && email && puesto && salario && codigo && fechaIngreso && imagen) {
    moduloEmpleado.agregarEmpleado();
  } else {
    alert('Por favor, llene todos los campos antes de enviar el formulario.');
  }
});

// Función para agregar un empleado
export function agregarEmpleado() {
  let nombreInput,
    generoInput,
    fechaNacimientoInput,
    rfcInput,
    curpInput,
    calleInput,
    coloniaInput,
    numeroExtInput,
    codigoPostalInput,
    ciudadInput,
    estadoInput,
    telefonoInput,
    emailInput,
    puestoInput,
    salarioInput,
    codigoInput,
    fechaIngresoInput;

  nombreInput = document.getElementById("nombre-input").value;
  generoInput = document.getElementById("genero-input").value;
  fechaNacimientoInput = document.getElementById("fecha-nacimiento-input").value;
  rfcInput = document.getElementById("rfc-input").value;
  curpInput = document.getElementById("curp-input").value;
  calleInput = document.getElementById("calle-input").value;
  coloniaInput = document.getElementById("colonia-input").value;
  numeroExtInput = document.getElementById("numero-ext-input").value;
  codigoPostalInput = document.getElementById("codigo-postal-input").value;
  ciudadInput = document.getElementById("ciudad-input").value;
  estadoInput = document.getElementById("estado-input").value;
  telefonoInput = document.getElementById("telefono-input").value;
  emailInput = document.getElementById("email-input").value;
  puestoInput = document.getElementById("puesto-input").value;
  salarioInput = document.getElementById("salario-input").value;
  codigoInput = document.getElementById("codigo-input").value;
  fechaIngresoInput = document.getElementById("fecha-ingreso-input").value;

  let nuevoEmpleado = {}
  nuevoEmpleado.id = empleados.length + 1;
  nuevoEmpleado.nombre = nombreInput;
  nuevoEmpleado.genero = generoInput;
  nuevoEmpleado.fechaNacimiento = fechaNacimientoInput;
  nuevoEmpleado.rfc = rfcInput;
  nuevoEmpleado.curp = curpInput;
  nuevoEmpleado.calle = calleInput;
  nuevoEmpleado.colonia = coloniaInput;
  nuevoEmpleado.numeroExt = numeroExtInput;
  nuevoEmpleado.codigoPostal = codigoPostalInput;
  nuevoEmpleado.ciudad = ciudadInput;
  nuevoEmpleado.estado = estadoInput;
  nuevoEmpleado.telefono = telefonoInput;
  nuevoEmpleado.email = emailInput;
  nuevoEmpleado.puesto = puestoInput;
  nuevoEmpleado.salario = salarioInput;
  nuevoEmpleado.codigo = codigoInput;
  nuevoEmpleado.fechaIngreso = fechaIngresoInput;
  nuevoEmpleado.status = "Activo";

  empleados.push(nuevoEmpleado);
  mostrarEmpleados();
}

// Función para mostrar los empleados en la tabla
export function mostrarEmpleados() {
  let tablaEmpleados = "";

  empleados.forEach(function (empleado) {
    let fila =
      `<tr>
      <td>${empleado.id}</td>
      <td>${empleado.nombre}</td>
      <td>${empleado.email}</td>
      <td>${empleado.status}</td>
      <td>
        <button class="btn" style="${btnStyleEdit}" onclick="moduloEmpleado.mostrarFormularioEdicion(${empleado.id})"><i class="fa-solid fa-pencil"></button></i>
        <button class="btn" style="${btnStyleDelete}" onclick="moduloEmpleado.eliminarEmpleado(${empleado.id})"><i class="fa-solid fa-trash-can"></button></i>
      </td></tr>`;
    tablaEmpleados += fila;
  });

  console.log(tablaEmpleados);
  document.getElementById("employee-table").innerHTML = tablaEmpleados;
}

// Función para buscar un empleado por ID
export function buscarEmpleado(evento) {
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
    `;
  } else {
    let detallesEmpleado = document.getElementById("detalles-empleado");
    detallesEmpleado.innerHTML = `
      <p>No se encontró ningún empleado con el ID proporcionado.</p>
    `;
  }
}

// Función para editar los datos de un empleado
export function editarEmpleado() {
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
  if (indice !== -1) {
    empleados[indice] = empleadoEditado;
  }

  limpiarFormularioEdicion();
  mostrarEmpleados();
}

// Función para cambiar el status de un empleado a "inactivo"
export function eliminarEmpleado(idEmpleadoSeleccionado) {
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
    }
  }
}

// Función para mostrar el formulario de edición con los datos de un empleado
export function mostrarFormularioEdicion(idEmpleado) {
  let empleado = empleados.find(empleado => empleado.id === idEmpleado);
  if (empleado) {
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
export function limpiarFormularioEdicion() {
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
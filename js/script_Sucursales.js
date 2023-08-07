let sucursales = [];
let id_Seleccionado = null;
let btnStyleEdit = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #00931b; color: #fff;";
let btnStyleDelete = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #bf0000; color: #fff;";

fetch("../json/sucursales.json")
  .then(response => {
    return response.json();
  })
  .then(function (jsondata) {
    sucursales = jsondata;
    console.log(sucursales);
    mostrarSucursal();
  }
  );

document.querySelector('.mandar').addEventListener('click', function (event) {
  event.preventDefault();
  let nombreSuc = document.querySelector('#nombre-suc-input').value;
  let nombreTit = document.querySelector('#nombre-tit-input').value;
  let rfcTit = document.querySelector('#rfc-tit-input').value;
  let calleSuc = document.querySelector('#calle-suc-input').value;
  let coloniaSuc = document.querySelector('#colonia-suc-input').value;
  let codigoPostalSuc = document.querySelector('#codigo-postal-suc-input').value;
  let ciudadSuc = document.querySelector('#ciudad-suc-input').value;
  let estadoSuc = document.querySelector('#estado-suc-input').value;
  let telefonoSuc = document.querySelector('#telefono-suc-input').value;
  let long = document.querySelector('#long-input').value;
  let lat = document.querySelector('#lat-input').value;

  if (nombreSuc && nombreTit && rfcTit && calleSuc && coloniaSuc && codigoPostalSuc && ciudadSuc && estadoSuc && telefonoSuc && long && lat) {
    addSucursal();
  } else {
    alert('Por favor, llene todos los campos antes de enviar el formulario.');
  }
});

export function addSucursal() {
  let var_sucursal,
    var_titular,
    var_rfc,
    var_calle,
    var_colonia,
    var_cp,
    var_ciudad,
    var_estado,
    var_telefono,
    var_long,
    var_lat;

  var_sucursal = document.getElementById("nombre-suc-input").value;
  var_titular = document.getElementById("nombre-tit-input").value;
  var_rfc = document.getElementById("rfc-tit-input").value;
  var_calle = document.getElementById("calle-suc-input").value;
  var_colonia = document.getElementById("colonia-suc-input").value;
  var_cp = document.getElementById("codigo-postal-suc-input").value;
  var_ciudad = document.getElementById("ciudad-suc-input").value;
  var_estado = document.getElementById("estado-suc-input").value;
  var_telefono = document.getElementById("telefono-suc-input").value;
  var_long = document.getElementById("long-input").value;
  var_lat = document.getElementById("lat-input").value;

  let sucursal = {};

  sucursal.id_Sucursal = sucursales.length + 1;
  sucursal.nombre_Sucursal = var_sucursal;
  sucursal.nombre_Duenio = var_titular;
  sucursal.rfc_duenio = var_rfc;
  sucursal.domicilio = var_calle;
  sucursal.colonia = var_colonia;
  sucursal.ciudad = var_ciudad;
  sucursal.cp_sucursal = var_cp;
  sucursal.estado = var_estado;
  sucursal.tel_sucursal = var_telefono;
  sucursal.longitud = var_long;
  sucursal.latitud = var_lat;
  sucursal.estatus = "Activo";

  sucursales.push(sucursal);

  clean();
  mostrarSucursal();
}

export function clean() {
  document.getElementById("nombre-suc-input").value = "";
  document.getElementById("nombre-tit-input").value = "";
  document.getElementById("rfc-tit-input").value = "";
  document.getElementById("calle-suc-input").value = "";
  document.getElementById("colonia-suc-input").value = "";
  document.getElementById("codigo-postal-suc-input").value = "";
  document.getElementById("ciudad-suc-input").value = "";
  document.getElementById("estado-suc-input").value = "";
  document.getElementById("telefono-suc-input").value = "";
  document.getElementById("long-input").value = "";
  document.getElementById("lat-input").value = "";
}

export function mostrarSucursal() {
  let body = "";

  sucursales.forEach(function (sucursal) {
    let filas =
      `<tr>
      <td>${sucursal.id_Sucursal}</td>
      <td>${sucursal.nombre_Sucursal}</td>
      <td>${sucursal.domicilio}</td>
      <td>${sucursal.estatus}</td>
      <td>
        <button class="btn btn-succes" style=" ${btnStyleEdit} " onclick="moduloSuc.showEditForm(${sucursal.id_Sucursal})"><i class="fa-solid fa-pencil"></button></i>
        <button class="btn" style=" ${btnStyleDelete} " onclick="moduloSuc.deleteSuc(${sucursal.id_Sucursal})"><i class="fa-solid fa-trash-can"></button></i>
      </td>
    </tr>`

    body += filas;
  });

  console.log(body);
  document.getElementById("shop-table").innerHTML = body;
}

// Función para editar los datos de una sucursal
export function editSuc() {
  let sucIdInput = document.getElementById("edit-suc-id");
  let sucId = parseInt(sucIdInput.value);
  let nombreSucInput = document.getElementById("edit-nombre-suc-input");
  let nombreTitInput = document.getElementById("edit-nombre-tit-input");
  let rfcTitInput = document.getElementById("edit-rfc-tit-input");
  let calleSucInput = document.getElementById("edit-calle-suc-input");
  let coloniaSucInput = document.getElementById("edit-colonia-suc-input");
  let codigoPostalSucInput = document.getElementById("edit-codigo-postal-suc-input");
  let ciudadSucInput = document.getElementById("edit-ciudad-suc-input");
  let estadoSucInput = document.getElementById("edit-estado-suc-input");
  let telefonoSucInput = document.getElementById("edit-telefono-suc-input");
  let longInput = document.getElementById("edit-long-input");
  let latInput = document.getElementById("edit-lat-input");

  let editedSuc = {
    id_Sucursal: sucId,
    nombre_Sucursal: nombreSucInput.value,
    nombre_Duenio: nombreTitInput.value,
    rfc_duenio: rfcTitInput.value,
    domicilio: calleSucInput.value,
    colonia: coloniaSucInput.value,
    cp_sucursal: codigoPostalSucInput.value,
    ciudad: ciudadSucInput.value,
    estado: estadoSucInput.value,
    tel_sucursal: telefonoSucInput.value,
    longitud: longInput.value,
    latitud: latInput.value,
    estatus: "Activo"
  };

  // Actualizar los datos de la sucursal en el array
  let index = sucursales.findIndex(sucursal => sucursal.id_Sucursal === sucId);
  if (index !== -1) {
    sucursales[index] = editedSuc;
  }

  clearEditForm();
  mostrarSucursal();
}

// Función para mostrar el formulario de edición con los datos de una sucursal
export function showEditForm(sucId) {
  let sucursal = sucursales.find(sucursal => sucursal.id_Sucursal === sucId);

  if (sucursal) {
    id_Seleccionado = sucursales.id_Sucursal;
    let sucIdInput = document.getElementById("edit-suc-id");
    let nombreSucInput = document.getElementById("edit-nombre-suc-input");
    let nombreTitInput = document.getElementById("edit-nombre-tit-input");
    let rfcTitInput = document.getElementById("edit-rfc-tit-input");
    let calleSucInput = document.getElementById("edit-calle-suc-input");
    let coloniaSucInput = document.getElementById("edit-colonia-suc-input");
    let codigoPostalSucInput = document.getElementById("edit-codigo-postal-suc-input");
    let ciudadSucInput = document.getElementById("edit-ciudad-suc-input");
    let estadoSucInput = document.getElementById("edit-estado-suc-input");
    let telefonoSucInput = document.getElementById("edit-telefono-suc-input");
    let longInput = document.getElementById("edit-long-input");
    let latInput = document.getElementById("edit-lat-input");

    sucIdInput.value = sucursal.id_Sucursal;
    nombreSucInput.value = sucursal.nombre_Sucursal;
    nombreTitInput.value = sucursal.nombre_Duenio;
    rfcTitInput.value = sucursal.rfc_duenio;
    calleSucInput.value = sucursal.domicilio;
    coloniaSucInput.value = sucursal.colonia;
    ciudadSucInput.value = sucursal.ciudad;
    codigoPostalSucInput.value = sucursal.cp_sucursal;
    estadoSucInput.value = sucursal.estado;
    telefonoSucInput.value = sucursal.tel_sucursal;
    longInput.value = sucursal.longitud;
    latInput.value = sucursal.latitud;
  }
}

// Función para eliminar una sucursal
export function deleteSuc(sucId) {
  // Filtrar el array de sucursales para obtener los que no coinciden con el ID a eliminar
  let sucursal = sucursales.find(sucursal => sucursal.id_Sucursal === sucId);

  if(sucursal)
  {
    sucursal.estatus = "Inactivo"
  }

  clearEditForm();
  mostrarSucursal();
}

// Función para limpiar el formulario de edición de sucursal
function clearEditForm() {
  document.getElementById("edit-suc-id").value = "";
  document.getElementById("edit-nombre-suc-input").value = "";
  document.getElementById("edit-nombre-tit-input").value = "";
  document.getElementById("edit-rfc-tit-input").value = "";
  document.getElementById("edit-calle-suc-input").value = "";
  document.getElementById("edit-colonia-suc-input").value = "";
  document.getElementById("edit-codigo-postal-suc-input").value = "";
  document.getElementById("edit-ciudad-suc-input").value = "";
  document.getElementById("edit-estado-suc-input").value = "";
  document.getElementById("edit-telefono-suc-input").value = "";
  document.getElementById("edit-long-input").value = "";
  document.getElementById("edit-lat-input").value = "";
  id_Seleccionado = null;
}

export function searchSucursal(event) {
  event.preventDefault();

  let searchInput = document.getElementById("search-input");
  let sucId = parseInt(searchInput.value);

  let foundSucursal = sucursales.find(sucursal => sucursal.id_Sucursal === sucId);

  if (foundSucursal) 
  {
    let sucursalDetails = document.getElementById("suc-details");
    sucursalDetails.innerHTML = `
    <h3>Sucursal Encontrada</h3>
    <p>ID: ${foundSucursal.id_Sucursal}</p>
    <p>Nombre: ${foundSucursal.nombre_Sucursal}</p>
    <p>Dueño: ${foundSucursal.nombre_Duenio}</p>
    <p>RFC: ${foundSucursal.rfc_duenio}</p>
    <p>Calle: ${foundSucursal.domicilio}</p>
    <p>Colonia: ${foundSucursal.colonia}</p>
    <p>Ciudad: ${foundSucursal.ciudad}</p>
    <p>Estado: ${foundSucursal.estado}</p>
    <p>Código postal: ${foundSucursal.cp_sucursal}</p>
    <p>Teléfono: ${foundSucursal.tel_sucursal}</p>
    <p>Longitud: ${foundSucursal.longitud}</p>
    <p>Latitud: ${foundSucursal.latitud}</p>
    <p>Estatus: ${foundSucursal.estatus}</p>`;
  }
  else
  {
    let sucursalDetails = document.getElementById("suc-details");
    sucursalDetails.innerHTML = `<p>No se encontró ninguna sucursal con el ID proporcionado.</p>`;
  }
}

// Función de inicialización del mapa
export function initMap() {
  // Coordenadas del centro del mapa
  let coordenadas = { lat: longInput.value, lng: longInput.value };
  let opcionesMapa = {
    center: coordenadas,
    zoom: 12
  };

  // Crea el mapa en el elemento con el ID "map"
  let mapa = new google.maps.Map(document.getElementById('map'), opcionesMapa);

  // Marcador para la ubicación
  let marcador = new google.maps.Marker({
    position: coordenadas,
    map: mapa,
    title: 'Ubicación'
  });
}

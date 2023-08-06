
  // Función para buscar una Sucursal por ID
  function searchSuc(event) {
    event.preventDefault();
  
    let searchInput = document.getElementById("search-input");
    let sucId = parseInt(searchInput.value);
  
    let foundSuc = suc.find(suc => suc.id === sucId);
  
    if (foundSuc) {
      let sucDetails = document.getElementById("suc-details");
      sucDetails.innerHTML = `
        <h3>Sucursal Encontrada</h3>
        <p>ID: ${foundSuc.id}</p>
        <p>Nombre: ${foundSuc.nombreSuc}</p>
        <p>Nombre: ${foundSuc.nombreTit}</p>
        <p>RFC: ${foundSuc.rfcTit}</p>
        <p>Calle: ${foundSuc.calleSuc}</p>
        <p>Colonia: ${foundSuc.coloniaSuc}</p>
        <p>Número Ext: ${foundSuc.numeroExtSuc}</p>
        <p>Código postal: ${foundSuc.codigoPostalSuc}</p>
        <p>Ciudad: ${foundSuc.ciudadSuc}</p>
        <p>Estado: ${foundSuc.estadoSuc}</p>
        <p>Teléfono: ${foundSuc.telefonoSuc}</p>
        <p>Longitud: ${foundSuc.long}</p>
        <p>Latitud: ${foundSuc.lat}</p>

      `;
    } else {
      let sucDetails = document.getElementById("suc-details");
      sucDetails.innerHTML = `
        <p>No se encontró ninguna sucursal con el ID proporcionado.</p>
      `;
    }
  }

// Función para agregar una nueva sucursal
function addSuc(event) {
  event.preventDefault();

  let sucIdInput = document.getElementById("nombre-suc-input");
  let nombreTitInput = document.getElementById("nombre-tit-input");
  let rfcTitInput = document.getElementById("rfc-tit-input");
  let calleSucInput = document.getElementById("calle-suc-input");
  let coloniaSucInput = document.getElementById("colonia-suc-input");
  let numeroExtSucInput = document.getElementById("numero-ext-suc-input");
  let codigoPostalSucInput = document.getElementById("codigo-postal-suc-input");
  let ciudadSucInput = document.getElementById("ciudad-suc-input");
  let estadoSucInput = document.getElementById("estado-suc-input");
  let telefonoSucInput = document.getElementById("telefono-suc-input");
  let longInput = document.getElementById("long-input");
  let latInput = document.getElementById("lat-input");

  let newSuc = {
    id: generateUniqueID(),
    nombreSuc: sucIdInput.value,
    nombreTit: nombreTitInput.value,
    rfcTit: rfcTitInput.value,
    calleSuc: calleSucInput.value,
    coloniaSuc: coloniaSucInput.value,
    numeroExtSuc: numeroExtSucInput.value,
    codigoPostalSuc: codigoPostalSucInput.value,
    ciudadSuc: ciudadSucInput.value,
    estadoSuc: estadoSucInput.value,
    telefonoSuc: telefonoSucInput.value,
    long: longInput.value,
    lat: latInput.value,
  };

   // Agregar la nueva sucursal al arreglo de sucursales
  suc.push(newSuc);

  showSuc();
  clearAddForm();
}

// Función para generar un ID único
function generateUniqueID() {
  return Math.random().toString(36).substr(2, 9); // This generates a random alphanumeric ID
}

// Función para limpiar el formulario de agregar
function clearAddForm() {
  document.getElementById("nombre-suc-input").value = "";
  document.getElementById("nombre-tit-input").value = "";
  document.getElementById("rfc-tit-input").value = "";
  document.getElementById("calle-suc-input").value = "";
  document.getElementById("colonia-suc-input").value = "";
  document.getElementById("numero-ext-suc-input").value = "";
  document.getElementById("codigo-postal-suc-input").value = "";
  document.getElementById("ciudad-suc-input").value = "";
  document.getElementById("estado-suc-input").value = "";
  document.getElementById("telefono-suc-input").value = "";
  document.getElementById("long-input").value = "";
  document.getElementById("lat-input").value = "";
}

    // Función para editar los datos de una sucursal
    function editSuc(event) {
      event.preventDefault();
    
      let sucIdInput = document.getElementById("edit-suc-id");
      let sucId = parseInt(sucIdInput.value);
      let nombreSucInput = document.getElementById("edit-nombre-suc-input");
      let nombreTitInput = document.getElementById("edit-nombre-tit-input");
      let rfcTitInput = document.getElementById("edit-rfc-tit-input");
      let calleSucInput = document.getElementById("edit-calle-suc-input");
      let coloniaSucInput = document.getElementById("edit-colonia-suc-input");
      let numeroExtSucInput = document.getElementById("edit-numero-ext-suc-input");
      let codigoPostalSucInput = document.getElementById("edit-codigo-postal-suc-input");
      let ciudadSucInput = document.getElementById("edit-ciudad-suc-input");
      let estadoSucInput = document.getElementById("edit-estado-suc-input");
      let telefonoSucInput = document.getElementById("edit-telefono-suc-input");
      let longInput = document.getElementById("edit-longitud-input");
      let latInput = document.getElementById("edit-latitud-input");
    
      let editedSuc = {
        id: sucId,
        nombreSuc: nombreSucInput.value,
        nombreTit: nombreTitInput.value,
        rfcTit: rfcTitInput.value,
        curpTit: curpTitInput.value,
        calleSuc: calleSucInput.value,
        coloniaSuc: coloniaSucInput.value,
        numeroExtSuc: numeroExtSucInput.value,
        codigoPostalSuc: codigoPostalSucInput.value,
        ciudadSuc: ciudadSucInput.value,
        estadoSuc: estadoSucInput.value,
        telefonoSuc: telefonoSucInput.value,
        longitud: longInput.value,
        latitud: latInput.value
      };
    
      // Actualizar los datos de la sucursal en el array
      let index = suc.findIndex(suc => suc.id === sucId);
      if (index !== -1) {
        suc[index] = editedSuc;
      }
    
      showSuc();
      clearEditForm();
    }

  // Función para eliminar una sucursal
  function deleteSuc(SucId) {
    // Filtrar el array de sucursales para obtener los que no coinciden con el ID a eliminar
    suc = suc.filter(suc => suc.id !== sucId);
  
    showSuc();
    clearEditForm();
  }
  
    // Función para mostrar el formulario de edición con los datos de una sucursal
  function showEditForm(sucId) {
    let suc = suc.find(suc => suc.id === sucId);
    if (suc) {
      let sucIdInput = document.getElementById("edit-suc-id");
      let nombreSucInput = document.getElementById("edit-nombre-suc-input");
      let nombreTitInput = document.getElementById("edit-nombre-tit-input");
      let rfcTitInput = document.getElementById("edit-rfc-tit-input");
      let calleSucInput = document.getElementById("edit-calle-suc-input");
      let coloniaSucInput = document.getElementById("edit-colonia-suc-input");
      let numeroExtSucInput = document.getElementById("edit-numero-ext-suc-input");
      let codigoPostalSucInput = document.getElementById("edit-codigo-postal-suc-input");
      let ciudadSucInput = document.getElementById("edit-ciudad-suc-input");
      let estadoSucInput = document.getElementById("edit-estado-suc-input");
      let telefonoSucInput = document.getElementById("edit-telefono-Suc-input");
      let longInput = document.getElementById("edit-longitud-input");
      let latInput = document.getElementById("edit-latitud-input");
  
      sucIdInput.value = suc.id;
      nombreSucInput.value = suc.nombreSuc;
      nombreTitInput.value = suc.nombreTit;
      rfcTitInput.value = suc.rfcTit;
      calleSucInput.value = suc.calleSuc;
      coloniaSucInput.value = suc.coloniaSuc;
      numeroExtSucInput.value = suc.numeroExtSuc;
      codigoPostalSucInput.value = suc.codigoPostalSuc;
      ciudadSucInput.value = suc.ciudadSuc;
      estadoSucInput.value = suc.estadoSuc;
      telefonoSucInput.value = suc.telefonoSuc;
      longInput.value = suc.long;
      latInput.value = suc.lat;
    }
  }
 
  // Función para limpiar el formulario de edición de sucursal
  function clearEditForm() {
    let sucIdInput = document.getElementById("edit-suc-id");
    let nombreSucInput = document.getElementById("edit-nombre-suc-input");
    let nombreTitInput = document.getElementById("edit-nombre-tit-input");
    let rfcTitInput = document.getElementById("edit-rfc-tit-input");
    let calleSucInput = document.getElementById("edit-calle-suc-input");
    let coloniaSucInput = document.getElementById("edit-colonia-suc-input");
    let numeroExtSucInput = document.getElementById("edit-numero-ext-suc-input");
    let codigoPostalSucInput = document.getElementById("edit-codigo-postal-suc-input");
    let ciudadSucInput = document.getElementById("edit-ciudad-suc-input");
    let estadoSucInput = document.getElementById("edit-estado-suc-input");
    let telefonoSucInput = document.getElementById("edit-telefono-suc-input");
    let longInput = document.getElementById("edit-longitud-input");
    let latInput = document.getElementById("edit-latitud-input");
  
    sucIdInput.value = "";
    nombreSucInput.value = "";
    nombreTitInput.value = "";
    rfcTitInput.value = "";
    calleSucInput.value = "";
    coloniaSucInput.value = "";
    numeroExtSucInput.value = "";
    codigoPostalSucInput.value = "";
    ciudadSucInput.value = "";
    estadoSucInput.value = "";
    telefonoSucInput.value = "";
    longInput.value = "";
    latInput.value = "";
  }
  
  // Mostrar las sucursales al cargar la página
  showSuc();  

  // Función de inicialización del mapa
  function initMap() {
    // Coordenadas del centro del mapa
    let coordenadas = { lat: longInput.value, lng: longInput.value };
    let opcionesMapa = {
      center: coordenadas,
      zoom: 12};
    

    // Crea el mapa en el elemento con el ID "map"
    let mapa = new google.maps.Map(document.getElementById('map'), opcionesMapa);
    
    // Marcador para la ubicación
    let marcador = new google.maps.Marker({
      position: coordenadas,
      map: mapa,
      title: 'Ubicación'});
    }

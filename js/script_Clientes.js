// Datos de ejemplo de clientes
let clients = [
    { 
        id: 1, 
        nombre: "Laura Sánchez Reyes", 
        genero: "Femenino", 
        fechaNacimiento: "18/02/1995", 
        rfc: "RFC579", 
        curp: "SARL950218MOCNYR23", 
        calle: "Calle Hidalgo", 
        colonia: "Colonia Reforma", 
        numeroExt: "529", 
        codigoPostal: "12345", 
        ciudad: "Oaxaca", 
        estado: "Oaxaca", 
        telefono: "555-8901", 
        email: "lauraL@gmail.com",
        estatus: "Activo"
    },
    { 
        id: 2, 
        nombre: "Isabel López López", 
        genero: "Femenino", 
        fechaNacimiento: "12/06/1987", 
        rfc: "RFC963", 
        curp: "LOLI870612MYNPPS13", 
        calle: "Avenida Venito Juárez", 
        colonia: "Colonia Centro", 
        numeroExt: "963", 
        codigoPostal: "67890", 
        ciudad: "Mérida", 
        estado: "Tucatán", 
        telefono: "555-5678", 
        email: "isabelLO@gmail.com",
        estatus: "Activo"
    },
    { 
        id: 3, 
        nombre: "Pedro Castro Martinez", 
        genero: "Masculino", 
        fechaNacimiento: "25/11/1993", 
        rfc: "RFC802", 
        curp: "CAMP931125HMCTRD14", 
        calle: "Calle Principal", 
        colonia: "Centro", 
        numeroExt: "802", 
        codigoPostal: "54321", 
        ciudad: "Toluca", 
        estado: "Estado de México", 
        telefono: "555-2345", 
        email: "pedroPP@gmail.com",
        estatus: "Activo"
    },
    { 
        id: 4, 
        nombre: "María García Hernández", 
        genero: "Femenino", 
        fechaNacimiento: "10/08/1995", 
        rfc: "GAHX950810", 
        curp: "GAHX950810MJCRR48", 
        calle: "Avenida Morelos", 
        colonia: "Colonia Nueva", 
        numeroExt: "345", 
        codigoPostal: "54321", 
        ciudad: "Guadalajara", 
        estado: "Jalisco", 
        telefono: "555-4444", 
        email: "maria2@gmail.com",
        estatus: "Activo"
    },
    { 
        id: 5, 
        nombre: "Pedro González Sánchez", 
        genero: "Masculino", 
        fechaNacimiento: "22/03/1986", 
        rfc: "GOSP860322", 
        curp: "GOSP860322HNLNND84", 
        calle: "Calle Zaragoza", 
        colonia: "Colonia Vieja", 
        numeroExt: "678", 
        codigoPostal: "98765", 
        ciudad: "Monterrey", 
        estado: "Nuevo León", 
        telefono: "555-3333", 
        email: "pedro2@gmail.com",
        estatus: "Activo"
    }
  ];
  
let btnStyle = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #0059b3; color: #fff;";
  
  // Función para mostrar los clientes en la tabla
function showClients() 
{
    let tableBody = document.getElementById("client-table");
    tableBody.innerHTML = "";
  
    clients.forEach(client => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${client.id}</td>
            <td>${client.nombre}</td>
            <td>${client.email}</td>
            <td>${client.estatus}</td>
            <td>
                <button class="btn" style="${btnStyle}" onclick="showEditForm(${client.id})">Editar</button>
                <button class="btn" style="${btnStyle}" onclick="deleteClient(${client.id})">Eliminar</button>
            </td>`;
        tableBody.appendChild(row);
    });
}
  
  // Función para agregar un cliente
function addClient(event) {
    event.preventDefault();
  
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
  
    let newClient = {
      id: clients.length + 1,
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
      estatus: "Activo"
    };
  
    clients.push(newClient);
  
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
  
    showClients();
}
  
  // Función para buscar un cliente por ID
function searchClient(event) 
{
    event.preventDefault();
  
    let searchInput = document.getElementById("search-input");
    let clientId = parseInt(searchInput.value);
  
    let foundClient = clients.find(client => client.id === clientId);
  
    if (foundClient) {
        let clientDetails = document.getElementById("client-details");
        clientDetails.innerHTML = `
        <h3>Cliente Encontrado</h3>
        <p>ID: ${foundClient.id}</p>
        <p>Nombre: ${foundClient.nombre}</p>
        <p>Género: ${foundClient.genero}</p>
        <p>Fecha de nacimiento: ${foundClient.fechaNacimiento}</p>
        <p>RFC: ${foundClient.rfc}</p>
        <p>CURP: ${foundClient.curp}</p>
        <p>Calle: ${foundClient.calle}</p>
        <p>Colonia: ${foundClient.colonia}</p>
        <p>Número Ext: ${foundClient.numeroExt}</p>
        <p>Código postal: ${foundClient.codigoPostal}</p>
        <p>Ciudad: ${foundClient.ciudad}</p>
        <p>Estado: ${foundClient.estado}</p>
        <p>Teléfono: ${foundClient.telefono}</p>
        <p>Email: ${foundClient.email}</p>`;
    } 
    else 
    {
        let clientDetails = document.getElementById("client-details");
        clientDetails.innerHTML = `
        <p>No se encontró ningún cliente con el ID proporcionado.</p>`;
    }
}
  
  // Función para editar los datos de un cliente
function editClient(event) 
{
    event.preventDefault();
  
    let clientIdInput = document.getElementById("edit-client-id");
    let clientId = parseInt(clientIdInput.value);
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
  
    let editedClient = {
        id: clientId,
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
        estatus: "Activo"
    };
  
    // Actualizar los datos del cliente en el array
    let index = clients.findIndex(client => client.id === clientId);
    if (index !== -1) {
        clients[index] = editedClient;
    }
  
    showClients();
    clearEditForm();
}
  
  // Función para eliminar un cliente
function deleteClient(clientId) 
{
    // Filtrar el array de clientes para obtener los que no coinciden con el ID a eliminar
    //clients = clients.filter(client => client.id !== clientId);
    
    clients.forEach(client => 
    {
        if (client.id === clientId) 
        {
            client.estatus = "Inactivo";
        }
    });
    
    showClients();
    clearEditForm();
}
  
  // Función para mostrar el formulario de edición con los datos de un cliente
function showEditForm(clientId) 
{
    let client = clients.find(client => client.id === clientId);
    if (client) 
    {
        let clientIdInput = document.getElementById("edit-client-id");
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

        clientIdInput.value = client.id;
        nombreInput.value = client.nombre;
        generoInput.value = client.genero;
        fechaNacimientoInput.value = client.fechaNacimiento;
        rfcInput.value = client.rfc;
        curpInput.value = client.curp;
        calleInput.value = client.calle;
        coloniaInput.value = client.colonia;
        numeroExtInput.value = client.numeroExt;
        codigoPostalInput.value = client.codigoPostal;
        ciudadInput.value = client.ciudad;
        estadoInput.value = client.estado;
        telefonoInput.value = client.telefono;
        emailInput.value = client.email;
    }
}
  
  // Función para limpiar el formulario de edición
function clearEditForm() 
{
    let clientIdInput = document.getElementById("edit-client-id");
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
  
    clientIdInput.value = "";
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
}
  
// Mostrar los clientes al cargar la página
showClients();  
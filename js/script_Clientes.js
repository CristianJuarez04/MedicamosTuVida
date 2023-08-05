let clients = [];
let btnStyleEdit = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #00931b; color: #fff;";
let btnStyleDelete = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #bf0000; color: #fff;";

fetch("../json/clientes.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        clients = jsondata;
        console.log(clients);
        loadTabla();
    }
    );

document.querySelector('.btn').addEventListener('click', function (event) {
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

    if (nombre && genero && fechaNacimiento && rfc && curp && calle && colonia && numeroExt && codigoPostal && ciudad && estado && telefono && email) {
        moduloCliente.addClient();
    } else {
        alert('Por favor, llene todos los campos antes de enviar el formulario.');
    }
});

export function addClient() {
    let var_nombre,
        var_genero,
        var_fechaNac,
        var_rfc,
        var_curp,
        var_calle,
        var_colonia,
        var_numExt,
        var_cp,
        var_ciudad,
        var_estado,
        var_telefono,
        var_email;

    var_nombre = document.getElementById("nombre-input").value;
    var_genero = document.getElementById("genero-input").value;
    var_fechaNac = document.getElementById("fecha-nacimiento-input").value;
    var_rfc = document.getElementById("rfc-input").value;
    var_curp = document.getElementById("curp-input").value;
    var_calle = document.getElementById("calle-input").value;
    var_colonia = document.getElementById("colonia-input").value;
    var_numExt = document.getElementById("numero-ext-input").value;
    var_cp = document.getElementById("codigo-postal-input").value;
    var_ciudad = document.getElementById("ciudad-input").value;
    var_estado = document.getElementById("estado-input").value;
    var_telefono = document.getElementById("telefono-input").value;
    var_email = document.getElementById("email-input").value;

    let cliente = {};
    cliente.id = clients.length + 1;
    cliente.nombre = var_nombre;
    cliente.genero = var_genero;
    cliente.fechaNacimiento = var_fechaNac;
    cliente.rfc = var_rfc;
    cliente.curp = var_curp;
    cliente.calle = var_calle;
    cliente.colonia = var_colonia;
    cliente.numeroExt = var_numExt;
    cliente.codigoPostal = var_cp;
    cliente.ciudad = var_ciudad;
    cliente.estado = var_estado;
    cliente.telefono = var_telefono;
    cliente.email = var_email;
    cliente.estatus = "Activo";

    clients.push(cliente);
    clean();
    loadTabla();
}

export function clean() {
    document.getElementById("nombre-input").value = "";
    document.getElementById("genero-input").value = "";
    document.getElementById("fecha-nacimiento-input").value = "";
    document.getElementById("rfc-input").value = "";
    document.getElementById("curp-input").value = "";
    document.getElementById("calle-input").value = "";
    document.getElementById("colonia-input").value = "";
    document.getElementById("numero-ext-input").value = "";
    document.getElementById("codigo-postal-input").value = "";
    document.getElementById("ciudad-input").value = "";
    document.getElementById("estado-input").value = "";
    document.getElementById("telefono-input").value = "";
    document.getElementById("email-input").value = "";
}

export function loadTabla() {
    let body = "";

    clients.forEach(function (cliente) {
        let register =
            `<tr>
            <td> ${cliente.id}</td>
            <td> ${cliente.nombre}</td> 
            <td> ${cliente.email}</td>
            <td> ${cliente.estatus}</td>
            <td>
            
                <button class="btn btn-succes" style=" ${btnStyleEdit} " onclick="moduloCliente.showEditForm(${cliente.id})"><i class="fa-solid fa-pencil"></button></i>
                <button class="btn" style=" ${btnStyleDelete} " onclick="moduloCliente.deleteClient(${cliente.id})"><i class="fa-solid fa-trash-can"></button></i>
            </td>
        </tr>`;

        body += register;
    });

    console.log(body);
    document.getElementById("client-table").innerHTML = body;
}

export function editClient() {
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

    loadTabla();
    clearEditForm();
}

export function showEditForm(clientId) {
    let client = clients.find(client => client.id === clientId);
    if (client) {
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
        estatus.value = "Activo";
    }

    clean();
}

export function deleteClient(clientId) {
    let client = clients.find(client => client.id === clientId);

    if (client) {
        client.estatus = "Inactivo";
    }

    clearEditForm();
    loadTabla();
}

export function clearEditForm() {
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

export function searchClient(event) {
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
        <p>Email: ${foundClient.email}</p>
        <p>Estatus: ${foundClient.estatus}</p>
        <p>Imagen: </p>
        <img src="${foundClient.imagen}" alt="Imagen de ${foundClient.nombre}" width="200">
      `;
    } else {
        let clientDetails = document.getElementById("client-details");
        clientDetails.innerHTML = `
        <p>No se encontró ningún cliente con el ID proporcionado.</p>
      `;
    }
}
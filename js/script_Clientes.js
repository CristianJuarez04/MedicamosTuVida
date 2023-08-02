let indexClienteSeleccionado;
let clients = [];

fetch("../json/clientes.json")
    .then(function(response)
    {
        return response.json();
    })
    .then(function(jsondata)
    {
        clients = jsondata;
        console.log(clients);
        loadTabla();
    }            
    );
  
let btnStyle = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #0059b3; color: #fff;";
  
// Función para mostrar los clientes en la tabla
function showClients() 
{
    let tableBody = document.getElementById("client-table");
    tableBody = "";
  
    clients.forEach(function (client){
        let row = //document.createElement("tr");
        row = `<tr onload="js.selectCliente(${clients.indexOf(client)});">
            <td>${client.id}</td>
            <td>${client.nombre}</td>
            <td>${client.email}</td>
            <td>${client.estatus}</td>
            <td>' +
                <button class="btn" style="${btnStyle}" onclick="showEditForm(${client.id})">Editar</button>' +
                <button class="btn" style="${btnStyle}" onclick="deleteClient(${client.id})">Eliminar</button>' +
            </td></tr>`;
        tableBody += row;
    });

    console.log(tableBody);
    document.getElementById("client-tabl").innerHTML = tableBody;
}

export function addCliente()
{
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
    cliente.fechaNacimiento = apellido_materno;
    cliente.rfc = telefono;
    cliente.curp = telefono_movil;
    cliente.calle = correo_electronico;
    cliente.colonia = rfc;
    cliente.numeroExt = genero;
    cliente.codigoPostal = "Activo";
    cliente.ciudad = "a";
    cliente.estado =
    cliente.telefono =
    cliente.email =
    cliente.estatus =

    clients.push(cliente);
    clean();
    loadTabla();
}
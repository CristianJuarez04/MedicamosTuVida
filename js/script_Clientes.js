let indexClienteSeleccionado;
let clients = [];
let btnStyle = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin: 1px; background-color: #0059b3; color: #fff;";


fetch("../json/clientes.json")
    .then(response =>
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
  
  
// Función para mostrar los clientes en la tabla
// function showClients() 
// {
//     let tableBody = document.getElementById("client-table");
//     tableBody = "";
  
//     clients.forEach(function (client){
//         let row = //document.createElement("tr");
//         row = `<tr onload="js.selectCliente(${clients.indexOf(client)});">
//             <td>${client.id}</td>
//             <td>${client.nombre}</td>
//             <td>${client.email}</td>
//             <td>${client.estatus}</td>
//             <td>
//                 <button class="btn" style="${btnStyle}" onclick="showEditForm(${client.id})">Editar</button>' +
//                 <button class="btn" style="${btnStyle}" onclick="deleteClient(${client.id})">Eliminar</button>' +
//             </td></tr>`;
//         tableBody += row;
//     });

//     console.log(tableBody);
//     document.getElementById("client-tabl").innerHTML = tableBody;
// }

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

export function clean()
{
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

export function loadTabla()
{
    let body = "";

    clients.forEach(function (cliente)
    {
        let register = 
        `<tr onclick="moduloCliente.selectCliente(${clients.indexOf(cliente)});">
            <td> ${cliente.id}</td>
            <td> ${cliente.nombre}</td> 
            <td> ${cliente.email}</td>
            <td> ${cliente.estatus}</td>
            <td>
                <button class="btn" style=" ${btnStyle} " onclick="showEditForm(${cliente.id})">Editar</button>
                <button class="btn" style=" ${btnStyle} " onclick="deleteClient(${cliente.id})">Eliminar</button>
            </td>
        </tr>`; 
        
        body += register;
    });

    console.log(body);
    document.getElementById("client-table").innerHTML = body;
}

export function selectCliente(index){
    document.getElementById("nombre-input").value = clients[index].nombre;
    document.getElementById("genero-input").value = clients[index].genero ;
    document.getElementById("fecha-nacimiento-input").value = clients[index].fechaNacimiento;
    document.getElementById("rfc-input").value = clients[index].rfc;
    document.getElementById("curp-input").value = clients[index].curp;
    document.getElementById("calle-input").value = clients[index].calle;
    document.getElementById("colonia-input").value = clients[index].colonia;
    document.getElementById("numero-ext-input").value = clients[index].numeroExt;
    document.getElementById("codigo-postal-input").value = clients[index].codigoPostal;
    document.getElementById("ciudad-input").value = clients[index].ciudad;
    document.getElementById("estado-input").value = clients[index].estado;
    document.getElementById("telefono-input").value = clients[index].telefono;
    document.getElementById("email-input").value = clients[index].email;
}
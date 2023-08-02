let moduloCliente, moduloEmpleado, moduloProducto;

function cargarScriptCliente() 
{
    fetch("clientes.html")
        .then
        (
            function(response)
            {
                return response.text();
            }
        )
        .then
        (
            function(html)
            {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Clientes.js")
                .then
                (
                    function(controller)
                    {
                        moduloCliente = controller;
                    }
                );
            }
        );
}

function cargarScriptEmpleado() 
{
    fetch("empleados.html")
        .then
        (
            function(response)
            {
                return response.text();
            }
        )
        .then
        (
            function(html)
            {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Empleados.js")
                .then
                (
                    function(controller)
                    {
                        moduloEmpleado = controller;
                    }
                );
            }
        );
}

function cargarScriptProducto() 
{
    fetch("productos.html")
        .then
        (
            function(response)
            {
                return response.text();
            }
        )
        .then
        (
            function(html)
            {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Productos.js")
                .then
                (
                    function(controller)
                    {
                        moduloProducto = controller;
                    }
                );
            }
        );
}

////////////////////////////////////////////////////////////////////////////////

let moduloCliente2, moduloEmpleado2, moduloProducto2;

function cargarScriptCliente2() 
{
    fetch("clientes.html")
        .then
        (
            function(response)
            {
                return response.text();
            }
        )
        .then
        (
            function(html)
            {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Clientes.js")
                .then
                (
                    function(controller)
                    {
                        moduloCliente2 = controller;
                    }
                );
            }
        );
}

function cargarScriptEmpleado2() 
{
    fetch("empleados.html")
        .then
        (
            function(response)
            {
                return response.text();
            }
        )
        .then
        (
            function(html)
            {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Empleados.js")
                .then
                (
                    function(controller)
                    {
                        moduloEmpleado2 = controller;
                    }
                );
            }
        );
}

function cargarScriptProducto2() 
{
    fetch("productos.html")
        .then
        (
            function(response)
            {
                return response.text();
            }
        )
        .then
        (
            function(html)
            {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Productos.js")
                .then
                (
                    function(controller)
                    {
                        moduloProducto2 = controller;
                    }
                );
            }
        );
}
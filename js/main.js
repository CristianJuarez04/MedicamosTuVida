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
                        moduloCliente = controller;
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
                        moduloEmpleado = controller;
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
                        moduloProducto = controller;
                    }
                );
            }
        );
}
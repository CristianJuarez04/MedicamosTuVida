let moduloCliente, moduloEmpleado, moduloProducto, moduloProductoSuc, moduloVenta, moduloSuc, moduloPedidos;

function cargarScriptCliente() {
    fetch("clientes.html")
        .then
        (
            function (response) {
                return response.text();
            }
        )
        .then
        (
            function (html) {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Clientes.js")
                    .then
                    (
                        function (controller) {
                            moduloCliente = controller;
                        }
                    );
            }
        );
}

function cargarScriptEmpleado() {
    fetch("empleados.html")
        .then
        (
            function (response) {
                return response.text();
            }
        )
        .then
        (
            function (html) {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Empleados.js")
                    .then
                    (
                        function (controller) {
                            moduloEmpleado = controller;
                        }
                    );
            }
        );
}

function cargarScriptProducto() {
    fetch("productos.html")
        .then
        (
            function (response) {
                return response.text();
            }
        )
        .then
        (
            function (html) {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Productos.js")
                    .then
                    (
                        function (controller) {
                            moduloProducto = controller;
                        }
                    );
            }
        );
}

function cargarScriptProductoSuc() {
    fetch("productos.html")
        .then
        (
            function (response) {
                return response.text();
            }
        )
        .then
        (
            function (html) {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_ProductosSuc.js")
                    .then
                    (
                        function (controller) {
                            moduloProductoSuc = controller;
                        }
                    );
            }
        );
}

function cargarScriptVenta() {
    fetch("ventas.html")
        .then
        (
            function (response) {
                return response.text();
            }
        )
        .then
        (
            function (html) {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Ventas.js")
                    .then
                    (
                        function (controller) {
                            moduloVenta = controller;
                        }
                    );
            }
        );
}

function cargarScriptSucursales() {
    fetch("sucursales.html")
        .then
        (
            function (response) {
                return response.text();
            }
        )
        .then
        (
            function (html) {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Sucursales.js")
                    .then
                    (
                        function (controller) {
                            moduloSuc = controller;
                        }
                    );
            }
        );
}

function cargarScriptPedidos() {
    fetch("pedidos.html")
        .then
        (
            function (response) {
                return response.text();
            }
        )
        .then
        (
            function (html) {
                document.getElementById("cargarCuerpo").innerHTML = html;
                import("../js/script_Pedidos.js")
                    .then
                    (
                        function (controller) {
                            moduloPedidos = controller;
                        }
                    );
            }
        );
}

function cargarScriptCompras() {
    fetch("compras.html")
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
                import("../js/script_Compras.js")
                .then
                (
                    function(controller)
                    {
                        moduloPedidos = controller;
                    }
                );
            }
        );
}
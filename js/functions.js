function agregarEntrada() {
    event.preventDefault(); // Evita que se envíe el formulario de forma tradicional

    // Captura los datos
    const id = document.getElementById('id-entrada').value;
    const fecha = document.getElementById('fecha').value;
    const lote = document.getElementById('lote').value;
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
    const responsable = document.getElementById('responsable').value;


    // Muestra los datos capturados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <center><h3 class="green">Datos Capturados:</h3>
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Lote:</strong> ${lote}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>Producto:</strong> ${producto}</p>
        <p><strong>Responsable:</strong> ${responsable}</p>
        </center>
    `;
    // Validacion entrada
    if (id == "" || fecha == "" || lote == "" || producto == "" || cantidad == "" || responsable == "") {
        alert("Ningun campo puede estar vacio");

    } else if (lote <= 0 && cantidad <= 0) { alert('El valor debe ser mayor a 0 en lote o cantidad') }

    else {
        let detalleProduccion = document.getElementById('produccion-body');
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td scope="row">${id}</td>
        <td scope="row">${fecha}</td>
        <td scope="row">${lote}</td>
        <td scope="row">${producto}</td>
        <td scope="row">${cantidad}</td>
        <td scope="row">${responsable}</td>
        <td scope="row" class="td-opciones"><img class="icon-eraser" src="img/edit.svg" alt="editar"><img
            class="icon-eraser" src="img/trash.svg" alt="borrar"></td>`;

        detalleProduccion.appendChild(fila);

        // Aquí puedes realizar otras acciones, como enviar los datos a un servidor
    }
};

function agregarCliente() {
    // Prevenir la recarga de la página
    event.preventDefault();

    let idcliente = document.getElementById("idcliente").value;
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let direccion = document.getElementById("address").value;
    let ciudad = document.getElementById("city").value;
    let email = document.getElementById("email").value;

    // Validacion cliente
    if (idcliente == "" || nombre == "" || telefono == "" || direccion == "" || ciudad == "" || email == "") {
        alert("Ningun campo puede estar vacio");

    } else if (telefono <= 0) { alert('El valor debe ser mayor a 0') }

    else {
        let detalleClientes = document.getElementById('clientes-body');
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td scope="col">1</td>
                    <td scope="col">Fabian Cañon</td>
                    <td scope="col">3115293172</td>
                    <td scope="col">CR 34bis 12a 25</td>
                    <td scope="col">Bogotá</td>
                    <td scope="col">fabianca117@gmail.com</td>
                    <td scope="col" class="td-opciones"><img class="icon-eraser" src="img/edit.svg" alt="editar"><img
                            class="icon-eraser" src="img/trash.svg" alt="borrar"></td>`;

        detalleClientes.appendChild(fila);
    };
};

function agregarUsuario() {
    // Prevenir la recarga de la página
    event.preventDefault();

    let idUsuario = document.getElementById("idusuario").value;
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let direccion = document.getElementById("address").value;
    let rol = document.getElementById("rol").value;
    let email = document.getElementById("email").value;

    // Validacion cliente
    if (idUsuario == "" || nombre == "" || telefono == "" || direccion == "" || rol == "" || email == "") {
        alert("Ningun campo puede estar vacio");

    } else if (telefono <= 0) { alert('El valor debe ser mayor a 0') }

    else {
        let detalleUsuarios = document.getElementById('usuarios-body');
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td scope="col">${idUsuario}</td>
        <td scope="col">${nombre}</td>
        <td scope="col">${telefono}</td>
        <td scope="col">${direccion}</td>
        <td scope="col">${rol}</td>
        <td scope="col">${email}</td>
        <td scope="col" class="td-opciones"><img class="icon-eraser" src="img/edit.svg" alt="editar"><img
            class="icon-eraser" src="img/trash.svg" alt="borrar"></td>`;

        detalleUsuarios.appendChild(fila);
    };
};

function agregarProducto() {
    // Prevenir la recarga de la página
    event.preventDefault();
    
    let idproducto = document.getElementById("idproducto").value;
    let producto = document.getElementById("producto").value;
    let foto = document.getElementById("foto").value;

    // Validacion producto
    if (idproducto == "" || producto == "") {
        alert("Ningun campo puede estar vacio");

    } else {
        let detalleProductos = document.getElementById('productos-body');
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td scope="row">${idproducto}</td>
            <td scope="row">${producto}</td>
            <td scope="row">${foto}</td>
            <td scope="row" class="td-opciones"><img class="icon-eraser" src="img/edit.svg" alt="editar"><img class="icon-eraser"
                    src="img/trash.svg" alt="Bootstrap"></td>`;

        detalleProductos.appendChild(fila);
    };
};

function agregarVenta() {
    let idventa = document.getElementById('idventa').value;
    let fecha = document.getElementById('date').value;
    let cantidad = document.getElementById('quanty').value;
    let cliente = document.getElementById('cliente').value;
    let producto = document.getElementById('producto').value;
    let valorUnitario = document.getElementById('valorUnitario').value;
    let valorTotal = document.getElementById('valorTotal').value;

    // Validacion ventas
    if (idventa == "" || fecha == "" || cantidad == "" || cliente == "" || producto == "" || valorUnitario == "" || valorTotal == "") {
        alert("Ningun campo puede estar vacio");

    } else {
        let detalleVentas = document.getElementById('ventas-body');
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td scope="row">${idventa}</td>
        <td scope="row">${fecha}</td>
        <td scope="row">${cantidad}</td>
        <td scope="row">${cliente}</td>
        <td scope="row">${producto}</td>
        <td scope="row">${valorUnitario}</td>
        <td scope="row">${valorTotal}</td>
        <td scope="row"class="td-opciones"><img class="icon-eraser" src="img/edit.svg" alt="editar"><img class="icon-eraser"
                    src="img/trash.svg" alt="Bootstrap"></td>`;

        detalleVentas.appendChild(fila);
    };
};

let entradas = [
    {
        "id-entrada": "21342",
        "fecha": "20/7/2024 10:00",
        "lote": "2",
        "producto": "Huevos",
        "cantidad": 150,
        "responsable": "Jhon charry"
    },
    {
        "id-entrada": "21343",
        "fecha": "21/8/2024 08:00",
        "lote": "1",
        "producto": "Pollos",
        "cantidad": 75,
        "responsable": "Carlos Suarez"
    },
    {
        "id-entrada": "21344",
        "fecha": "22/8/2024 07:00",
        "lote": "1",
        "producto": "Huevos",
        "cantidad": 50,
        "responsable": "Jhon charry"
    }
];

/* console.log(entradas[0].producto);
console.log(entradas[1].producto);
entradas.forEach(function(producto) {
    console.log(producto);    
}); */

for (contador = 0; contador < entradas.length; contador++) {
    console.log(entradas[contador].responsable)
}
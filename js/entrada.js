document.getElementById('entrada').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma tradicional

    // Captura los datos
    const id = document.getElementById('id-entrada').value;
    const fecha = document.getElementById('fecha').value;
    const lote = document.getElementById('lote').value;
    const cantidad = document.getElementById('cantidad').value;
    const producto = document.getElementById('producto').value;
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
    let detalleProduccion = document.getElementById('produccion-body');
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td scope="row">${id}</td>
                    <td scope="row">${fecha}</td>
                    <td scope="row">${lote}</td>
                    <td scope="row">${cantidad}</td>
                    <td scope="row">${producto}</td>
                    <td scope="row">${responsable}</td>
                    <td scope="row" class="td-opciones"><img class="icon-eraser" src="img/edit.svg" alt="editar"><img
                            class="icon-eraser" src="img/trash.svg" alt="borrar"></td>`;

    detalleProduccion.appendChild(fila);

    // Aquí puedes realizar otras acciones, como enviar los datos a un servidor
});
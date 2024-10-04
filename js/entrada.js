document.getElementById('entrada').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de forma tradicional

    // Captura los datos
    const id = document.getElementById('id-entrada').value;
    const fecha = document.getElementById('fecha').value;
    const cantidad = document.getElementById('cantidad').value;
    const responsable = document.getElementById('responsable').value;


    // Muestra los datos capturados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <center><h3>Datos Capturados:</h3>
        <p><strong>id:</strong> ${id}</p>
        <p><strong>fecha:</strong> ${fecha}</p>
        <p><strong>cantidad:</strong> ${cantidad}</p>
        <p><strong>responsable:</strong> ${responsable}</p>
        </center>
    `;

    // Aquí puedes realizar otras acciones, como enviar los datos a un servidor
});

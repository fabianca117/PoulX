function agregarCliente() {
    let idcliente = document.getElementById("idcliente").value;
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let direccion = document.getElementById("direction").value;
    let ciudad = document.getElementById("city").value;
    let email = document.getElementById("email").value;
console.log('buenas');

    // Validacion cliente
    if (idcliente == "" || nombre == "" || telefono == "" || direccion == "" || ciudad == "" || email == "") {
        alert("Ningun campo puede estar vacio");
        
    } else if (telefono <= 0) { alert('El valor debe ser mayor a 0') }

    else {
    let detalleClientes = document.getElementById('clientes-body');
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td scope="col">0001</td>
        <td scope="col">Fabian Canon</td>
        <td scope="col">3115293172</td>
        <td scope="col">Cra 32a 32-15</td>
        <td scope="col">Bogota</td>
        <td scope="col">fabian@poulx.com</td>`;

    detalleClientes.appendChild(fila);
    };
};
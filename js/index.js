function validarInicio(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const message = document.getElementById('message');

    // Aquí defines tus credenciales válidas
    let validUsername = 'admin';
    let validPassword = '1234';

    // Validación simple
    if (validUsername === document.getElementById('username').value && validPassword == document.getElementById('password').value) {
        message.textContent = '¡Inicio de sesión exitoso!';
        message.style.color = 'green';
        window.location.href = "entradas.html"; // Redirigir a otra página
    } else {
        message.textContent = 'Usuario o contraseña incorrectos.';
        message.style.color = 'red';
    }
}

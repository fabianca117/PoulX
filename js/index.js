document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Evita que el formulario se envíe

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Aquí defines tus credenciales válidas
    let Username = 'admin';
    let Password = '1234';

    // Validación simple
    if (username === Username && password === Password) {
        message.textContent = '¡Inicio de sesión exitoso!';
        message.style.color = 'green';
        window.location.href = "entradas.html";
        // Redirigir o realizar otra acción
    } else {
        message.textContent = 'Usuario o contraseña incorrectos.';
        message.style.color = 'red';
    }
});

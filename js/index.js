function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function validateForm(event) {
    // Evitar el envío del formulario
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validar el correo electrónico
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = "Correo inválido.";
        document.getElementById('emailError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = "none";
    }

    // Validar el usuario
    if (username.length < 3) {
        document.getElementById('usernameError').innerText = "El usuario debe tener al menos 3 caracteres.";
        document.getElementById('usernameError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('usernameError').style.display = "none";
    }

    // Validar la contraseña
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = "La contraseña debe tener al menos 6 caracteres.";
        document.getElementById('passwordError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = "none";
    }

    // Si el formulario es válido, validar usuario
    if (isValid) {
        validateUser(username, password);
    }

    return false; // Asegúrate de que el formulario no se envíe
}

function validateUser(username, password) {
    const message = document.getElementById('message');
    
    const validUsername = "admin";
    const validPassword = "123456";

    // Validación simple
    if (validUsername === username && validPassword === password) {
        message.textContent = '¡Inicio de sesión exitoso!';
        message.style.color = 'green';
        window.location.href = "produccion.html"; // Redirigir a otra página
    } else {
        message.textContent = 'Usuario o contraseña incorrectos.';
        message.style.color = 'red';
    }
}

function validateFormforgot(event) {
    // Evitar el envío del formulario
    event.preventDefault();
    
    const email = document.getElementById('email').value;

    let isValid = true;

    // Validar el correo electrónico
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = "Correo inválido.";
        document.getElementById('emailError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = "none";
    }


    // Si el formulario es válido, validar usuario
    if (isValid) {
        validateUserforgot(email);
    }

    return false; // Asegúrate de que el formulario no se envíe
}

function validateUserforgot(email) {
    const message = document.getElementById('message');
    
    const validEmail = "demo@poulx.com";

    // Validación simple
    if (validEmail === email) {
        message.textContent = '¡Inicio de sesión exitoso!';
        message.style.color = 'green';
        window.location.href = "index.html"; // Redirigir a otra página
    } else {
        message.textContent = 'Usuario no existe';
        message.style.color = 'red';
    }
}

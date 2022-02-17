let nombre = document.getElementById('name')

let boton = document.getElementById('button-blue')

let inputName = document.querySelector('inputName')

//Eventos
boton.addEventListener('click', validar)

contador = 0;

function validar() {
    validarNombre();
    validarPassword();
    validarOk();
}

function validarNombre(e) {

    let errorNombre = document.querySelector('.errorNombre')
    if (nombre.value == '' || nombre.value.length < 3) {
        // nombre.classList.add = "name"
        nombre.setCustomValidity('El nombre debe tener minimo 3 carateres')
        nombre.style.background = '#f7c1c4'
        errorNombre.innerHTML = "El nombre debe tener minimo 3 carateres"
        errorNombre.style.color = "red"
        errorNombre.style.fontWeight = "bold"
        nombre.focus()
    } else {
        nombre.setCustomValidity('')
        nombre.style.background = ''
        errorNombre.innerHTML = ""
            //nombre.classList.remove = "name"
        contador++

    }
}

function validarPassword() {
    let errorPassword = document.querySelector('.errorPassword')
    let password = document.getElementById('password')
    if (password.value == '' || password.value.length < 3) {
        password.setCustomValidity('El password debe tener minimo 3 carateres')
        password.style.background = '#f7c1c4'
        errorPassword.innerHTML = "El password debe tener minimo 3 carateres"
        errorPassword.style.color = "red"
        errorPassword.style.fontWeight = "bold"
        password.focus()
    } else {
        password.setCustomValidity('')
        password.style.background = ''
        errorPassword.innerHTML = ""
        contador++
    }
}

function validarOk() {
    if (contador = 2) {
        exito.innerHTML = "Formulario enviado con exito";
        exito.style.color = "green"
    }
}
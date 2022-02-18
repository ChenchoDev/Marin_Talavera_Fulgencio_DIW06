let boton = document.getElementById('button-blue')
let nombre = document.getElementById('name')
let inputName = document.querySelector('inputName')
let password = document.getElementById('password')

//Eventos
boton.addEventListener('click', validar)

contador = 0;

function validar() {
    validarNombre();
    validarPassword();
    // validarOk();
}

function validarNombre() {

    let errorNombre = document.querySelector('.errorNombre')
    if (nombre.value == '' || nombre.value.length < 4) {
        nombre.className = ("vibra")
        nombre.setCustomValidity('El nombre debe tener minimo 4 carateres')
        nombre.style.background = '#f7c1c4'
        errorNombre.innerHTML = "El nombre debe tener minimo 4 carateres"
        errorNombre.style.color = "red"
        errorNombre.style.fontWeight = "bold"
        nombre.focus()
    } else {
        nombre.setCustomValidity('')
            // nombre.style.background = ''
        nombre.classList.add = ("exito")
        errorNombre.innerHTML = ""
        nombre.classList.remove = ("vibra")
        contador++

    }
}

function validarPassword() {
    let errorPassword = document.querySelector('.errorPassword')

    if (password.value == '' || password.value.length < 4) {
        password.className = ("vibra")
        password.setCustomValidity('El password debe tener minimo 4 carateres')
        password.style.background = '#f7c1c4'
        errorPassword.innerHTML = "El password debe tener minimo 4 carateres"
        errorPassword.style.color = "red"
        errorPassword.style.fontWeight = "bold"
        password.focus()
    } else {
        password.setCustomValidity('')
            // password.style.background = ''
        password.classList.add = ("exito")
        errorPassword.innerHTML = ""
        password.classList.remove = ("vibra")
        contador++
    }
}
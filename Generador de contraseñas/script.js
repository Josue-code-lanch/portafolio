function generarContraseña() {
    let longitud = document.getElementById('length').value;
    let contraseña = generarContraseñaAleatoria(longitud);
    document.getElementById('password').textContent = "Su contraseña es: " + contraseña;
}

function generarContraseñaAleatoria(longitud) {
    let caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    let contraseña = '';

    for (let i = 0; i < longitud; i++) {
        let caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        contraseña += caracterAleatorio;
    }
    return contraseña;
}
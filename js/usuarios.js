let nombre = document.getElementById("nombre_completo").value;
let email = document.getElementById("email").value;
let numero_celular = document.getElementById("numero_celular").value;
let genero = document.getElementById("genero").value;
let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
let direccion = document.getElementById("direccion").value;
let contrasena = document.getElementById("contrasena").value;

function ValidarDatos() {
    if (nombre === "" || email === "" || numero_celular === "" || genero === "" || fecha_nacimiento === "" || direccion === "" || contrasena === "") {
        console.log("Por favor, complete todos los campos.");   
    }
    if (nombre != /[a-zA-Z]/) {
        console.log("Debe ser un nombre válido");
    }
    if (email != /[a-zA-Z]/) {
        console.log("Debe ser un email válido");
    }
    if (numero_celular != /[0-9]/) {
        console.log("Debe ser un número de celular válido");
    }
    if (fecha_nacimiento == /[a-zA-Z]/) {
        console.log("Debe ser una fecha de nacimiento válida");
    }
    if (direccion != /[a-zA-Z0-9]/) {
        console.log("Debe ser una dirección válida");
    }
    if (contrasena != /[a-zA-Z0-9]/) {
        console.log("Debe ser una contraseña válida");
    }
    if (genero != /[a-zA-Z]/) {
        console.log("Debe ser un género válido");
    }
    else {
        console.log("ingrese todos los campos correctamente");
    }
}
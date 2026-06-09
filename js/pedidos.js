let nombre = document.getElementById("nombre_completo").value;
let referencias = document.getElementById("referencias").value;
let pedido = document.getElementById("pedido").value;
let email = document.getElementById("email").value;
let numero_celular = document.getElementById("numero_celular").value;
let direccion = document.getElementById("direccion").value;
let metodo_pago = document.getElementById("metodo_pago").value;

function ValidarDatos() {
    if (nombre === "" || referencias === "" || pedido === "" || email === "" || numero_celular === "" || direccion === "" || metodo_pago === "") {
        console.log("Por favor, complete todos los campos.");
    }
    if (nombre == /[a-zA-Z]/) {
        console.log("Debe ser un nombre válido");
    }
    if (pedido != /[a-zA-Z]/) {
        console.log("Debe ser un pedido válido");
    }
    if (!email.includes("@")) {
        console.log("Debe ser un email válido");
    }
    if (numero_celular != /[0-9]/) {
        console.log("Debe ser un número de celular válido");

    }
    if (direccion == /[a-zA-Z0-9]/) {
        console.log("Debe ser una dirección válida");

    }
    if (metodo_pago == /[a-zA-Z]/) {
        console.log("Debe ser un método de pago válido");
    }
    else {
        console.log("ingrese todos los campos correctamente");
    }
}
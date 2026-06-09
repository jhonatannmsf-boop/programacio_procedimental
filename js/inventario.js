let producto = document.getElementById("nombre_producto").value;
let precio = document.getElementById("precio").value;
let codigo = document.getElementById("codigo").value;
let marca = document.getElementById("marca").value;
let cantidad = document.getElementById("cantidad").value;
let categoria = document.getElementById("categoria").value;
let unidad_medida = document.getElementById("unidad_medida").value;

function ValidarDatos() {
    if (producto === "" || precio === "" || codigo === "" || cantidad === "" || categoria === "" || unidad_medida === "") {
        console.log("Por favor, complete todos los campos.");       
    }
    if (precio == /[a-zA-Z]/) {
        console.log("Debe ser numerico el Precio");
    }
    if (codigo == /[a-zA-Z]/) {
        console.log("Solo Debe Contener Numeros El codigo");
    }
    if (cantidad == /[a-zA-Z]/) {
        console.log("Debe ser numerico la cantidad");
    }
    if (unidad_medida != /[a-zA-Z]/) {
        console.log("Debe ser texto la Unidad de Medida");
    }
    if (categoria != /[a-zA-Z]/) {
        console.log("Debe ser texto la Categoria");
    }
    else {
        console.log("ingrese todos los campos correctamente");
    }
}
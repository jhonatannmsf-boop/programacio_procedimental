function ValidarDatos() {
    let nombre = document.getElementById("nombre_completo").value.trim();
    let email = document.getElementById("email").value.trim();
    let numero_celular = document.getElementById("numero_celular").value.trim();
    let genero = document.getElementById("genero").value.trim();
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();

    if (!nombre || !email || !numero_celular || !genero || !fecha_nacimiento || !direccion || !contrasena) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(nombre)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser un nombre válido",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser un email válido",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!/^\+?\d{1,3}[\s-]?\d{6,10}$/.test(numero_celular)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser un número de celular válido",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!fecha_nacimiento) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe seleccionar una fecha de nacimiento",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!/^[a-zA-Z0-9ÁÉÍÓÚÑáéíóúñ#.,\-\s]+$/.test(direccion)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser una dirección válida",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(contrasena)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser una contraseña válida",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(genero)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser un género válido",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Datos Guardados Correctamente",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("guardar_usuario").onclick = ValidarDatos;
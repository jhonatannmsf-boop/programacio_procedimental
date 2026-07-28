function ValidarDatos() {
    let nombre = document.getElementById("nombre_completo").value;
    let referencias = document.getElementById("referencias").value;
    let pedido = document.getElementById("pedido").value;
    let email = document.getElementById("email").value;
    let numero_celular = document.getElementById("numero_celular").value;
    let direccion = document.getElementById("direccion").value;
    let metodo_pago = document.getElementById("metodo_pago").value;

    if (!nombre || !referencias || !pedido || !email || !numero_celular || !direccion || !metodo_pago) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser un nombre válido",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(referencias)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser una referencia válida",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(pedido)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser un pedido válido",
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

    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(metodo_pago)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser un método de pago válido",
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

document.getElementById("guardar_pedido").onclick = ValidarDatos;
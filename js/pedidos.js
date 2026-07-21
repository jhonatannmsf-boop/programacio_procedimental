function ValidarDatos() {
    let nombre = document.getElementById("nombre_completo").value.trim();
    let referencias = document.getElementById("referencias").value.trim();
    let pedido = document.getElementById("pedido").value.trim();
    let email = document.getElementById("email").value.trim();
    let numero_celular = document.getElementById("numero_celular").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let metodo_pago = document.getElementById("metodo_pago").value.trim();

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
        
    }

    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(referencias)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser una referencia válida",
            showConfirmButton: false,
            timer: 1500
        });
        
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser un email válido",
            showConfirmButton: false,
            timer: 1500
        });
        
    }

    if (!/^\+?\d{1,3}[\s-]?\d{6,10}$/.test(numero_celular)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser un número de celular válido",
            showConfirmButton: false,
            timer: 1500
        });
        
    }

    if (/^\d+$/.test(direccion)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser una dirección válida",
            showConfirmButton: false,
            timer: 1500
        });
        
    }

    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(metodo_pago)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser un método de pago válido",
            showConfirmButton: false,
            timer: 1500
        });
        
    }

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Datos Validados Correctamente",
        showConfirmButton: false,
        timer: 1500
    });
}
document.getElementById("guardar_pedido").onclick = ValidarDatos;
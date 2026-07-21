function ValidarDatos() {
    let producto = document.getElementById("nombre_producto").value;
    let precio = document.getElementById("precio").value;
    let codigo = document.getElementById("codigo").value;
    let marca = document.getElementById("marca").value;
    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;
    let unidad_medida = document.getElementById("unidad_medida").value;

    if (!producto || !precio || !codigo || !marca || !cantidad || !categoria || !unidad_medida) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos Incompletos",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (!/^\d+(\.\d{1,2})?$/.test(precio)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe ser un precio válido",
            showConfirmButton: false,
            timer: 1500
        });
      
    }

    if (!/^[A-Za-z0-9-]+$/.test(codigo)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Formato de Código Incorrecto",
            showConfirmButton: false,
            timer: 1500
        });
        
    }

    if (!/^\d+$/.test(cantidad)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Formato de Cantidad Incorrecto",
            showConfirmButton: false,
            timer: 1500
        });
        
    }

    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(marca)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Formato de Marca Incorrecto",
            showConfirmButton: false,
            timer: 1500
        });
        
    }

    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(unidad_medida)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Formato de Unidad de Medida Incorrecto",
            showConfirmButton: false,
            timer: 1500
        });
        
    }

    if (!/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(categoria)) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Formato de Categoria Incorrecto",
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
document.getElementById("guardar_producto").onclick = ValidarDatos;
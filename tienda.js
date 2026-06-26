let cantidad = 1;
const precio = 10000;

function actualizar() {

    document.getElementById("cantidad").innerHTML = cantidad;

    let total = cantidad * precio;

    document.getElementById("total").innerHTML =
        "$" + total.toLocaleString("es-AR");

    document.getElementById("resumenCantidad").innerHTML = cantidad;

    document.getElementById("resumenTotal").innerHTML =
        "$" + total.toLocaleString("es-AR");
}

function cambiarCantidad(valor) {

    cantidad += valor;

    if (cantidad < 1) {
        cantidad = 1;
    }

    actualizar();

}

function siguientePaso(id) {

    const tab = new bootstrap.Tab(document.getElementById(id));
    tab.show();

}
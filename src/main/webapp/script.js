/**
 * 
 */
let saldo = 100;

document.getElementById("agregar").addEventListener("click", function() {
    const select = document.getElementById("libro");
    const opcion = select.options[select.selectedIndex];
    const nombreLibro = opcion.text.split(" - ")[0];
    const precioLibro = Number(opcion.getAttribute("data-precio"));

    const cantidad = Number(document.getElementById("cantidad").value);
    const terminos = document.getElementById("terminos").checked;

    if (!terminos) {
        alert("Debes aceptar los términos antes de continuar.");
        return;
    }

    if (cantidad <= 0) {
        alert("La cantidad debe ser positiva.");
        return;
    }

    const totalCompra = precioLibro * cantidad;

    if (totalCompra > saldo) {
        alert("No tienes saldo suficiente para esta compra.");
        return;
    }

    saldo -= totalCompra;
    document.getElementById("saldo").innerText = saldo;

    const li = document.createElement("li");
    li.textContent = `${nombreLibro} → ${cantidad} unidades`;
    document.getElementById("lista").appendChild(li);
});

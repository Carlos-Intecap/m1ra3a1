function generarTabla(){
    // Cantidad de filas y columnas
    var filas = parseInt(document.getElementById("txtFilas").value)
    var columnas = parseInt(document.getElementById("txtColumnas").value)
    // Crear un elemento de tabla
    var tabla = document.createElement("table");
    // Crear filas y columnas
    for (var i = 0; i < filas; i++) {
        var fila = tabla.insertRow();
        for (var j = 0; j < columnas; j++) {
        var celda = fila.insertCell();
        celda.innerHTML = "Fila: "+(i+1)+", Columna: "+(j+1);
        }
    }
    // Agregar la tabla al contenedor
    document.getElementById("tablaContainer").innerHTML = "";
    document.getElementById("tablaContainer").appendChild(tabla);
}
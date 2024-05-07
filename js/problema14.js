filas=0;
columnas=0;
//Funcion para generar tablas
function generarTabla(contenido){
    // Crear un elemento de tabla
    var tabla = document.createElement("table");
    var contador = 0;
    // Crear filas y columnas
    for (var i = 0; i < filas; i++) {
        var fila = tabla.insertRow();
        for (var j = 0; j < columnas; j++) {
        var celda = fila.insertCell();
        celda.innerHTML = contenido[contador];
        contador++;
        }
    }
    // Agregar la tabla al contenedor
    document.getElementById("tablaContainer").innerHTML = "";
    document.getElementById("tablaContainer").appendChild(tabla);
}
//Función para buscar un caracter especifico dentro un texto
function buscador(letra,texto){
    var contador = 0;
    var posicion = texto.indexOf(letra);
    while (posicion != -1) {
    contador++;
    posicion = texto.indexOf(letra, posicion + 1);
    }
    return contador;
}
//Función para obtener la cantidad de letras "s" en los textos
function cantVocales(){
    var vTexto = document.getElementById("txtTexto").value;
    filas = 7, columnas = 2;
    var caracterA = buscador("a",vTexto) + buscador("A",vTexto);
    var caracterE = buscador("e",vTexto) + buscador("E",vTexto);
    var caracterI = buscador("i",vTexto) + buscador("I",vTexto);
    var caracterO = buscador("o",vTexto) + buscador("O",vTexto);
    var caracterU = buscador("u",vTexto) + buscador("U",vTexto);
    var total = caracterA + caracterE + caracterI + caracterO + caracterU;
    var vocales = ["VOCAL","CANTIDAD",
                    "A,a",caracterA,
                    "E,e",caracterE,
                    "I,i",caracterI,
                    "O,o",caracterO,
                    "U,u",caracterU,
                    "TOTAL",total];
    generarTabla(vocales);    
}
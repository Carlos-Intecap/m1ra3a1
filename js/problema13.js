//Variables Globales
var textoTotal = "";
var filas = 0; // Número de filas
var columnas = 0; // Número de columnas
var texto1, texto2;
    
//Funcion para capturar textos
function obtenerTextos(){
    texto1 = document.getElementById("txtTexto1").value;
    texto2 = document.getElementById("txtTexto2").value;
    textoTotal = texto1 + texto2;
}

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

//Funcioón para mostrar la cantidad de caracteres de los textos
function cantCaracteres(){
    obtenerTextos();
    filas = 4, columnas = 2;
    var cantTexto1 = texto1.length;
    var cantTexto2 = texto2.length;
    var cantTotal = textoTotal.length;
    var textos = ["TEXTO","CANTIDAD","NO.1",cantTexto1,"NO.2",cantTexto2,"TOTAL",cantTotal]
    generarTabla(textos);
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
function cantLetraS(){
    obtenerTextos();
    filas = 4, columnas = 2;
    var cants = buscador("S",texto1) + buscador("s",texto1);
    var cantS = buscador("S",texto2) + buscador("s",texto2);
    var total = cants + cantS;
    var datos = ["TEXTO","CANTIDAD DE S Y s","NO.1",cants,"NO.2",cantS,"TOTAL",total];
    generarTabla(datos);    
}

//Función para mostrar los caracteres pares dentro del texto
function cantPares(){
    obtenerTextos();
    var tamano = textoTotal.length;
    filas=(tamano/2)+2;
    columnas = 2;
    var caracteres =[];
    var contador = 2;
    caracteres[0]="Correlativo";
    caracteres[1]="Valor";
    while (contador<=tamano){
        if(contador%2==0){
            caracteres[contador]=contador;
            caracteres[contador+1]=textoTotal.charAt(contador-1);     
        }
        contador++;
    }
    if(contador%2==0){
        caracteres[contador]="Total";
        caracteres[contador+1]=parseInt(filas-2);
        filas=filas-1;
    }else{
        caracteres[contador+1]="Total";
        caracteres[contador+2]=filas-2;
    }
    generarTabla(caracteres);
}

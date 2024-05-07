var palabra1="Accion";
var palabra2="Monumento";
var palabra3="Computación";
var palabra="Accion";
var tamano;
function seleccionarPalabra(palabraSeleccionada){
    palabra = palabraSeleccionada;
}
function primerCaracter(){
    document.getElementById("mostrar").innerHTML = palabra.charAt(0);
}
function ultimoCaracter(){
    tamano = palabra.length;
    document.getElementById("mostrar").innerHTML = palabra.charAt(tamano-1);
}
function caracteres(){
    tamano = palabra.length;
    var totalCaracteres="";
    for(i=0;i<tamano;i++){
        totalCaracteres=totalCaracteres+palabra.charAt(i)+"<br>";
    }
    document.getElementById("mostrar").innerHTML = totalCaracteres;
}
function mostrarCaracteres(){
    var texto = document.getElementById("txtTexto").value;
    var tam = texto.length;
    var cadena = "";
    for(i=0;i<tam;i++){
        if(i%2==0){
            cadena=cadena+texto.charAt(i)+", "
        }
    }
    document.getElementById("resultado").innerHTML=cadena;
}
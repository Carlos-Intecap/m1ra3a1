function buscarPalabra(){
    var texto = document.getElementById("txtTexto").value;
    var palabra = document.getElementById("txtPalabra").value;
    let posicion = 0;
    var tam = texto.length;
    var contador = 0;
    
    for(i=0;i<= tam;i++){
        if(texto.includes(palabra,posicion)==true){
            posicion = texto.indexOf(palabra,posicion) + 1;
            contador++;
            console.log(posicion);
        }
    }
    document.getElementById("position").innerHTML="La palabra se encontró: "+contador+" veces";
}
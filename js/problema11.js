function mostrarNumeros(){
    var num = parseFloat(document.getElementById("txtNumero").value);
    var res = 0;
    for(i=1;i<num;i++){
        res = res+i+", ";
    }
    document.getElementById("resultado").innerHTML=res+num;
}
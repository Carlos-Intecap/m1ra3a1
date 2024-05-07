function mostrarTabla(){
    var num = parseInt(document.getElementById("txtNumero").value);
    for(i=1;i<=10;i++){
        document.getElementById("o"+i).innerHTML=num+"x"+i;
    }
    for(i=1;i<=10;i++){
        document.getElementById("r"+i).innerHTML=(num*i);
    }
}
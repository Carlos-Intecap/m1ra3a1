function analizar(){
    var num = parseFloat(document.getElementById("txtNumero").value);
    if(num<0){
        document.getElementById("resultado").innerHTML="El número es negativo";
    }
    else if(num>0){
        document.getElementById("resultado").innerHTML="El número es positivo";
    }
    else{
        document.getElementById("resultado").innerHTML="El número es neutro";
    }
}
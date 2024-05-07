function maxComDiv(){
    var num1 = parseFloat(document.getElementById("txtNumero1").value);
    var num2 = parseFloat(document.getElementById("txtNumero2").value);
    var mayor = num1, menor = num2, respuesta;
    if(num1>num2){
        mayor=num1;
        menor=num2
    }
    else if(num2>num1){
        mayor=num2;
        menor=num1;
    }
    for(i=0;i<=menor;i++){
        if((mayor%i==0)&&(menor%i==0)){
            respuesta = i;
        }
    }
    document.getElementById("resultado").innerHTML="El máximo común divisor es: "+respuesta;
    console.log("El máximo común divisor es: "+respuesta);
    alert("El máximo común divisor es: "+respuesta);
}